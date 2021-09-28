import reducer from './languageReducer';
import { ActionType } from '../../models/Types';

describe('languangeReducer', () => {

    it('should handle "updateLanguage"', () => {
        expect(reducer({ language: "", languages: [] }, {
            type: ActionType.updateLanguage,
            payload: {
                language: "en-AU",
            }
        })).toEqual({ language: "en-AU", languages: [] });
    })

    it('should handle "populateLanguages"', () => {
        expect(reducer({ language: "", languages: [] }, {
            type: ActionType.populateLanguages,
            payload: {
                languages: ["en-Au", "en-Us", "en-Uk"],
            }
        })).toEqual({ language: "", languages: ["en-Au", "en-Us", "en-Uk"] });
    })


})