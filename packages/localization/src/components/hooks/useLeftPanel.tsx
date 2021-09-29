import { useAppSelector } from "../../hooks/hooks";
import { showFlyoutAction, updateName, updateDesc, syncDataToFirebase } from '../../store/actions';
import { useDispatch } from "react-redux";
import { FIELD_NAME, FIELD_DESC } from '../../models/Constants';

const useLeftPanel = () => {
    // const language = useAppSelector(state => state.language.language);

    // const localization = useAppSelector(state => state.localization);

    const { language: { language }, localization } = useAppSelector(state => state);

    const dispatch = useDispatch();

    const onShowFlyoutHandler = (field: string) => {
        dispatch(showFlyoutAction(field));
    }

    const onChangeFieldHandler = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {

        const val = event.target.value;
        switch (field) {
            case FIELD_NAME: {
                dispatch(updateName(val, language));
                break;
            }
            case FIELD_DESC: {
                dispatch(updateDesc(val, language));
                break;
            }
        }
    }

    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const paylod = {
            name: localization.name.localization,
            description: localization.description.localization
        }
        dispatch(syncDataToFirebase(paylod));
    }

    return { language, localization, onShowFlyoutHandler, onChangeFieldHandler, onSubmitHandler }
}

export default useLeftPanel;