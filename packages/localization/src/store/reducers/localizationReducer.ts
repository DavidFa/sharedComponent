import { createStore } from "redux";
import { LocalizationAction, LocalizationActionType, LocalizationState } from "../../models/Types";

const initialSate: LocalizationState = {
    language: "",
    languages: []
}

const localizationReducer = (state: LocalizationState = initialSate, action: LocalizationAction): LocalizationState => {
    switch (action.type) {
        case LocalizationActionType.updateLanguage: {
            // copy old array
            const languages = state.languages.slice();
            return { languages, language: action.payload.language! };
        }
        case LocalizationActionType.populateLanguages: {
            const { language } = state;
            return { language, languages: action.payload.languages! };
        }

    }
}

const store = createStore(localizationReducer);

export default store;