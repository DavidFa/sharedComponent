export type InputFormModel = {
    name: InputFormProps;
    description: InputFormProps;
}


export type InputFormProps = {
    label: string;
    placeholder: string;
    length: number;
}

export type InputFormWithLanguageProps = {
    language: string;
    placeholder: string;
    length: number;
}

export interface LanguageState {
    language: string;
    languages: string[];
}

export enum LanguageActionType {
    updateLanguage,
    populateLanguages
}

export type LanguageAction = {
    type: LanguageActionType;
    payload: {
        language?: string;
        languages?: string[];
    }
}