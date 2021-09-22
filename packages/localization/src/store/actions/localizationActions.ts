import { ActionType } from "../../models/Types"

export const isShowFlyoutAction = (isShowFlyout: boolean, flyOutField: string) => {
    return { type: ActionType.isShowFlyout, payload: { isShowFlyout, flyOutField } }
}

export const updateName = (field: string, local: string) => {
    return { type: ActionType.updateName, payload: { field, local } }
}