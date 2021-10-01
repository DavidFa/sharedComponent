import { renderHook, act } from "@testing-library/react-hooks";
import useRightPanel from "./useRightPanel";
import * as ReactRedux from 'react-redux';
import * as useReduxState from "../../hooks/hooks";
import { ActionType } from "../../models/Types";

describe('useRightPanel', () => {

    describe("test when the flyOutField is Name", () => {
        const mockUseDispatchFn = jest.fn();
        beforeEach(() => {
            jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(mockUseDispatchFn)

            jest.spyOn(useReduxState, 'useAppSelector')
                .mockReturnValue({
                    language: {
                        language: "en-Au",
                        languages: ["en-Au", "en-Us", "en-Uk"]
                    },
                    localization: {
                        isShowFlyout: false,
                        flyOutField: "Name",
                        name: {
                            length: 20,
                            tem: "",
                            localization: {}
                        },
                        description: {
                            length: 50,
                            tem: "",
                            localization: {}
                        }
                    }
                })

        })

        it("should set object to FieldSet when the component is created", () => {


            const { result } = renderHook(() => useRightPanel());

            expect(result.current.fieldSet).toEqual({ "en-Uk": "", "en-Us": "", });
        })

        it("should set string to language when the component is created", () => {

            const { result } = renderHook(() => useRightPanel());
            expect(result.current.language).toEqual("en-Au");
        })

        it("should set an array to languages when the component is created", () => {

            const { result } = renderHook(() => useRightPanel());
            expect(result.current.languages).toEqual(["en-Au", "en-Us", "en-Uk"]);
        })

        it('should set string to "flyOutField" when the component is created', () => {
            const { result } = renderHook(() => useRightPanel());
            expect(result.current.flyOutField).toEqual("Name");
        })

        it('should set an object to "name" when the component is created', () => {
            const { result } = renderHook(() => useRightPanel());
            expect(result.current.name).toEqual({
                length: 20,
                tem: "",
                localization: {}
            })
        })

        it('should set an object to "description" when the component is created', () => {
            const { result } = renderHook(() => useRightPanel());
            expect(result.current.description).toEqual({
                length: 50,
                tem: "",
                localization: {}
            })
        })

        it('should set an object to "field" when the component is created', () => {
            const { result } = renderHook(() => useRightPanel());
            expect(result.current.field).toEqual({
                length: 20,
                tem: "",
                localization: {}
            })
        })

        it('should set an array to "inputs"', () => {
            const { result } = renderHook(() => useRightPanel());
            expect(result.current.inputs).toHaveLength(3);
            // expect(result.current.inputs).toContainElement("div");
        });

        it('should dispatch an action when local language is changed', () => {
            const { result } = renderHook(() => useRightPanel());
            act(() => {
                result.current.onChangeFieldHandler("en-Au", { target: { value: "David" } });
            })

            expect(mockUseDispatchFn).toBeCalled();
            expect(mockUseDispatchFn).toBeCalledTimes(1);
            expect(mockUseDispatchFn).toBeCalledWith({ "payload": { "field": "David" }, "type": ActionType.updateFlyoutName });
        })

        it('should dispatch an action when dissFlyoutHandler is fired', () => {
            const { result } = renderHook(() => useRightPanel());

            act(() => {
                result.current.dissFlyoutHandler();
            })
            expect(mockUseDispatchFn).toHaveBeenCalled();
            expect(mockUseDispatchFn).toHaveBeenCalledTimes(1);
            expect(mockUseDispatchFn).toHaveBeenCalledWith({ "payload": { "local": "en-Au" }, "type": ActionType.dissFlyout });
        });

        it('it should dispatch an action when onSubmit is fired for "name"', () => {

            const { result } = renderHook(() => useRightPanel());

            act(() => {
                result.current.onSubmit();
            });

            expect(mockUseDispatchFn).toHaveBeenCalled();
            expect(mockUseDispatchFn).toHaveBeenCalledTimes(1);
            expect(mockUseDispatchFn).toHaveBeenCalledWith({ "payload": { "local": "en-Au", "localization": { "en-Uk": "", "en-Us": "" } }, "type": ActionType.updateNameSet });
        })
    });


    // afterEach(cleanup);
    describe("test when the flyOutField is Description", () => {
        const mockUseDispatchFn = jest.fn();
        beforeEach(() => {
            jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(mockUseDispatchFn)

            jest.spyOn(useReduxState, 'useAppSelector')
                .mockReturnValue({
                    language: {
                        language: "en-Au",
                        languages: ["en-Au", "en-Us", "en-Uk"]
                    },
                    localization: {
                        isShowFlyout: false,
                        flyOutField: "Description",
                        name: {
                            length: 20,
                            tem: "",
                            localization: {}
                        },
                        description: {
                            length: 50,
                            tem: "",
                            localization: {}
                        }
                    }
                })

        })

        it('it should dispatch an action when onSubmit is fired for "description"', () => {

            const { result } = renderHook(() => useRightPanel());

            act(() => {
                result.current.onSubmit();
            });

            expect(mockUseDispatchFn).toHaveBeenCalled();
            expect(mockUseDispatchFn).toHaveBeenCalledTimes(1);
            expect(mockUseDispatchFn).toHaveBeenCalledWith({ "payload": { "local": "en-Au", "localization": { "en-Uk": "", "en-Us": "" } }, "type": ActionType.updateDescSet });
        })

        it('should update FieldSet when onChangeFieldHandler', () => {
            const { result } = renderHook(() => useRightPanel());

            act(() => {
                result.current.onChangeFieldHandler('en', { target: { value: "test" } });
            })

            expect(mockUseDispatchFn).not.toHaveBeenCalled();
            expect(result.current.fieldSet).toEqual({"en": "test", "en-Uk": "", "en-Us": ""});
        })
    });

});