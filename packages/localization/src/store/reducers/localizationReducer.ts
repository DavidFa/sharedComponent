import { createStore } from "redux";
import { LanguageAction, LanguageActionType, LanguageState } from "../../models/Types";

const initialSate: LanguageState = {
    language: "",
    languages: []
}

const languageReducer = (state: LanguageState = initialSate, action: LanguageAction): LanguageState => {
    switch (action.type) {
        case LanguageActionType.updateLanguage: {
            // copy old array
            const languages = state.languages.slice();
            return { languages, language: action.payload.language! };
        }
        case LanguageActionType.populateLanguages: {
            const { language } = state;
            return { language, languages: action.payload.languages! };
        }

    }
}

const store = createStore(languageReducer);

export default store;