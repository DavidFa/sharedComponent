import { ActionType } from "../../models/Types";

export const updateLanguage = (language: string) => {

    return { type: ActionType.updateLanguage, payload: { language: language } };
}

export const populateLanguages = (languages: readonly string[]) => {

    return {
        type: ActionType.populateLanguages, payload: { languages: languages }
    }
}