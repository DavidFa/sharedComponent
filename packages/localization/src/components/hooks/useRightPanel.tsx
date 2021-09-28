import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";
import { FIELD_DESC, FIELD_NAME } from "../../models/Constants";
import { dissFlyoutAction, updateDescSet, updateFlyoutDesc, updateFlyoutName, updateNameSet } from "../../store/actions";
import InputFormWithLanguage from "../InputFormWithLanguage";

const useRightPanel = () => {
    const [fieldSet, setFieldSet] = useState<{ [key: string]: string }>({});
    const dispatch = useDispatch();
    // const language = useAppSelector(state => state.language.language);
    // const languages = useAppSelector(state => state.language.languages);
    const { language: { language, languages }, localization } = useAppSelector(state => state);
    // const flyOutField = useAppSelector(state => state.localization.flyOutField);
    // const localization = useAppSelector(state => state.localization);
    const { flyOutField, name, description } = localization;

    const field = useMemo(() => {
        return flyOutField === FIELD_NAME ? name : description;
    }, [flyOutField, name, description]);
    // let field: {
    //     length: number;
    //     tem: string;
    //     localization: { [key: string]: string }
    // } = {
    //     length: 20,
    //     tem: "",
    //     localization: {}
    // };

    // if (flyOutField === FIELD_NAME) {
    //     field = localization.name;
    // } else if (flyOutField === FIELD_DESC) {
    //     field = localization.description;
    // }

    useEffect(() => {
        const temp: { [key: string]: string } = {};
        for (let i in languages) {
            if (language !== languages[i]) {
                temp[languages[i]] = field.localization[languages[i]] || "";
            }
        }
        setFieldSet(temp);
    }, []);


    const dissFlyoutHandler = () => {
        dispatch(dissFlyoutAction(language));
    }


    const onChangeFieldHandler = (lang: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        if (lang === language) {

            switch (flyOutField) {
                case FIELD_NAME: {
                    dispatch(updateFlyoutName(val));
                    break;
                }
                case FIELD_DESC: {
                    dispatch(updateFlyoutDesc(val));
                    break;
                }
            }
        } else {
            const newFieldSet = { ...fieldSet };
            newFieldSet[lang] = val;
            setFieldSet(newFieldSet);
        }

    }

    const onSubmit = () => {
        switch (flyOutField) {
            case FIELD_NAME: {
                dispatch(updateNameSet(fieldSet, language));
                break;
            }
            case FIELD_DESC: {
                dispatch(updateDescSet(fieldSet, language));
                break;
            }
        }
    }

    const inputs = languages?.map((item: string, index: number) => {
        const value = item === language ? field.tem : fieldSet[item] || '';
        return <InputFormWithLanguage key={`${item}_${index}`} language={item} placeholder={item} length={field.length} value={value} changeField={onChangeFieldHandler} />
    });

    return { flyOutField, inputs, dissFlyoutHandler, onChangeFieldHandler, onSubmit, fieldSet, language, languages, name, description, field }
}

export default useRightPanel;