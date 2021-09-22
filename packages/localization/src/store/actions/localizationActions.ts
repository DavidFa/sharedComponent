import { ActionType } from "../../models/Types"

export const showFlyoutAction = (flyOutField: string) => {
    return { type: ActionType.showFlyout, payload: { flyOutField } }
}

export const dissFlyoutAction = (local: string) => {
    return { type: ActionType.dissFlyout, payload: { local } }
}

export const updateName = (field: string, local: string) => {
    return { type: ActionType.updateName, payload: { field, local } }
}

export const updateFlyoutName = (field: string) => {
    return { type: ActionType.updateFlyoutName, payload: { field } }
}

export const updateDesc = (field: string, local: string) => {
    return { type: ActionType.updateDesc, payload: { field, local } }
}