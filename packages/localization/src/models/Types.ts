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

export interface LocalizationState {
    language: string;
    languages: string[];
}

export enum LocalizationActionType {
    updateLanguage,
    populateLanguages
}

export type LocalizationAction = {
    type: LocalizationActionType;
    payload: {
        language?: string;
        languages?: string[];
    }
}