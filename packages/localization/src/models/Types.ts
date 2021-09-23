import React from "react"

export type InputFormModel = {
    name: InputFormProps;
    description: InputFormProps;
}


export type InputFormProps = {
    label: string;
    placeholder: string;
    length: number;
    value: string;
    showFlyoutHandler: (field: string) => void;
    changeField: (field: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type InputFormWithLanguageProps = {
    language: string;
    placeholder: string;
    length: number;
    value: string;
    changeField: (lang: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LanguageState {
    readonly language: string;
    readonly languages: string[];
}

export enum ActionType {
    updateLanguage,
    populateLanguages,
    showFlyout,
    dissFlyout,
    updateName,
    updateFlyoutName,
    updateNameSet,
    updateDesc,
    updateFlyoutDesc,
    updateDescSet
}

export type LanguageAction = {
    type: ActionType;
    payload: {
        language?: string;
        languages?: string[];
    }
}

export interface LocalizationState {
    isShowFlyout: boolean,
    flyOutField: string,
    name: {
        length: number;
        tem: string;
        localization: { [key: string]: string }
    },
    description: {
        length: number;
        tem: string;
        localization: { [key: string]: string }
    }
}

export type LocalizationAction = {
    type: ActionType;
    payload: {
        flyOutField?: string;
        local?: string;
        field?: string;
        localization?: { [key: string]: string }
    }
}
