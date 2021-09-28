import * as actions from './languageActions';
import { ActionType } from '../../models/Types';

describe('languageAction', () => {
    it("should return an object when updateLanguage is invoked", () => {
        expect(actions.updateLanguage("en-AU")).toEqual({ type: ActionType.updateLanguage, payload: { language: "en-AU" } })
    })

    it("should return an object when populateLanguages is invoked", () => {
        expect(actions.populateLanguages(["en-AU", "en-UK", "en-US"])).toEqual({ type: ActionType.populateLanguages, payload: { languages: ["en-AU", "en-UK", "en-US"] } })
    })
})