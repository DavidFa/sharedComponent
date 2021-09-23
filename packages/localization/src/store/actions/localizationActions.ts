import { AnyAction } from "redux"
import { ThunkAction } from "redux-thunk"
import { ActionType, KeyValuePair } from "../../models/Types"
import { RootState } from "../reducers"

export const showFlyoutAction = (flyOutField: string) => {
    return { type: ActionType.showFlyout, payload: { flyOutField } }
}

export const dissFlyoutAction = (local: string) => {
    return { type: ActionType.dissFlyout, payload: { local } }
}

export const updateName = (field: string, local: string) => {
    return { type: ActionType.updateName, payload: { field, local } }
}

export const updateNameSet = (localization: { [key: string]: string }, local: string) => {
    return { type: ActionType.updateNameSet, payload: { localization, local } }
}

export const updateFlyoutName = (field: string) => {
    return { type: ActionType.updateFlyoutName, payload: { field } }
}

export const updateDesc = (field: string, local: string) => {
    return { type: ActionType.updateDesc, payload: { field, local } }
}

export const updateDescSet = (localization: { [key: string]: string }, local: string) => {
    return { type: ActionType.updateDescSet, payload: { localization, local } }
}

export const updateFlyoutDesc = (field: string) => {
    return { type: ActionType.updateFlyoutDesc, payload: { field } }
}

export const syncDataToFirebase = (paylod: {
    name: KeyValuePair<string>,
    description: KeyValuePair<string>
}): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async dispatch => {
        dispatch({ type: ActionType.loadingStart });

        // this is set for loading
        setTimeout(async () => {
            const sendRequest = async () => {
                const res = await fetch("https://react-demo-17d32-default-rtdb.asia-southeast1.firebasedatabase.app/localization.json", { method: "PUT", body: JSON.stringify(paylod) });
                if (!res.ok) {
                    throw new Error("Something wrong here!");
                }
            }
            try {
                await sendRequest();
                dispatch({ type: ActionType.loadingSuccess, payload: { message: "Finished!" } });
            } catch (err) {
                dispatch({ type: ActionType.loadingFail, payload: { message: "Something wrong here!" } });

            }
        }, 1000);
    };
}