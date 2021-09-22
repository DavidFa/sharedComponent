import { LocalizationAction, ActionType, LocalizationState } from "../../models/Types";

const initialSate: LocalizationState = {
    isShowFlyout: false,
    flyOutField: "",
    name: {
        length: 20,
        tem: "",
        localization: { "en-AU": "fdsfds" }
    },
    description: {
        length: 50,
        tem: "",
        localization: { "en-AU": "43242" }
    }
}


const localizationReducer = (state: LocalizationState = initialSate, action: LocalizationAction): LocalizationState => {
    switch (action.type) {
        case ActionType.isShowFlyout: {
            const { name, description } = state;
            const newNameLocalization = { ...name.localization };
            const newName = { ...name, localization: newNameLocalization };
            const newDescLocalization = { ...description.localization };
            const newDesc = { ...description, localization: newDescLocalization };
            return { name: newName, description: newDesc, isShowFlyout: action.payload.isShowFlyout!, flyOutField: action.payload.flyOutField! }
        }
        case ActionType.updateName: {
            const local = action.payload.local!;
            const field = action.payload.field!;
            const { isShowFlyout, flyOutField, name, description } = state;
            const newNameLocalization = { ...name.localization };
            newNameLocalization[local] = field;
            const newName = { ...name, localization: newNameLocalization };
            newName.tem = field;
            const newDescLocalization = { ...description.localization };
            const newDesc = { ...description, localization: newDescLocalization };
            return { isShowFlyout, flyOutField, name: newName, description: newDesc }
        }
    }
    return state;
}

export default localizationReducer;