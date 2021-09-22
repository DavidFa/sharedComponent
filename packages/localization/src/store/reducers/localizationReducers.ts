import { LocalizationAction, ActionType, LocalizationState } from "../../models/Types";

const initialSate: LocalizationState = {
    isShowFlyout: false,
    flyOutField: "",
    name: {
        length: 20,
        tem: "",
        localization: {}
    },
    description: {
        length: 50,
        tem: "",
        localization: {}
    }
}


const localizationReducer = (state: LocalizationState = initialSate, action: LocalizationAction): LocalizationState => {
    switch (action.type) {
        case ActionType.showFlyout: {
            const { name, description } = state;
            const newNameLocalization = { ...name.localization };
            const newName = { ...name, localization: newNameLocalization };
            const newDescLocalization = { ...description.localization };
            const newDesc = { ...description, localization: newDescLocalization };
            return { name: newName, description: newDesc, isShowFlyout: true, flyOutField: action.payload.flyOutField! }
        }
        case ActionType.dissFlyout: {
            const localLanguage = action.payload.local!;
            const { name, description } = state;
            const newNameLocalization = { ...name.localization };
            const newName = { ...name, localization: newNameLocalization };
            newName.tem = newNameLocalization[localLanguage];
            const newDescLocalization = { ...description.localization };
            const newDesc = { ...description, localization: newDescLocalization };
            newDesc.tem = newDescLocalization[localLanguage];
            return { name: newName, description: newDesc, isShowFlyout: false, flyOutField: "" }
        }
        case ActionType.updateName: {
            const localLanguage = action.payload.local!;
            const field = action.payload.field!;
            const { isShowFlyout, flyOutField, name, description } = state;
            const newNameLocalization = { ...name.localization };
            newNameLocalization[localLanguage] = field;
            const newName = { ...name, localization: newNameLocalization };
            newName.tem = field;
            const newDescLocalization = { ...description.localization };
            const newDesc = { ...description, localization: newDescLocalization };
            return { isShowFlyout, flyOutField, name: newName, description: newDesc }
        }
        case ActionType.updateFlyoutName: {
            const field = action.payload.field!;
            const { isShowFlyout, flyOutField, name, description } = state;
            const newNameLocalization = { ...name.localization };
            const newName = { ...name, localization: newNameLocalization };
            newName.tem = field;
            const newDescLocalization = { ...description.localization };
            const newDesc = { ...description, localization: newDescLocalization };
            return { isShowFlyout, flyOutField, name: newName, description: newDesc }
        }
        case ActionType.updateDesc: {
            const localLanguage = action.payload.local!;
            const field = action.payload.field!;
            const { isShowFlyout, flyOutField, name, description } = state;
            const newNameLocalization = { ...name.localization };
            const newName = { ...name, localization: newNameLocalization };
            const newDescLocalization = { ...description.localization };
            newDescLocalization[localLanguage] = field;
            const newDesc = { ...description, localization: newDescLocalization };
            newDesc.tem = field;
            return { isShowFlyout, flyOutField, name: newName, description: newDesc }
        }
    }
    return state;
}

export default localizationReducer;