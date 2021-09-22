import { LanguageAction, ActionType, LanguageState } from "../../models/Types";

const initialSate: LanguageState = {
    language: "",
    languages: []
}

const languageReducer = (state: LanguageState = initialSate, action: LanguageAction): LanguageState => {
    switch (action.type) {
        case ActionType.updateLanguage: {
            // copy old array
            const languages = state.languages.slice();
            return { languages, language: action.payload.language! };
        }
        case ActionType.populateLanguages: {
            const { language } = state;
            return { language, languages: action.payload.languages! };
        }

    }
    return state;
}

export default languageReducer;