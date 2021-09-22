import React from "react"

export type InputFormModel = {
    name: InputFormProps;
    description: InputFormProps;
}


export type InputFormProps = {
    label: string;
    placeholder: string;
    length: number;
    showFlyoutHandler: (field: string) => void;
    changeField: (evetn: React.ChangeEvent<HTMLInputElement>) => void;
}

export type InputFormWithLanguageProps = {
    language: string;
    placeholder: string;
    length: number;
    value: string;
}

export interface LanguageState {
    readonly language: string;
    readonly languages: string[];
}

export enum ActionType {
    updateLanguage,
    populateLanguages,
    isShowFlyout,
    updateName,
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
        isShowFlyout?: boolean;
        flyOutField?: string;
        local?: string;
        field?: string;
    }
}
