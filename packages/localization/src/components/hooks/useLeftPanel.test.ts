import { renderHook, act } from '@testing-library/react-hooks';
import useLeftPanel from './useLeftPanel';
import * as ReactRedux from 'react-redux';
import * as useReduxState from '../../hooks/hooks';
import { ActionType } from '../../models/Types';

describe('useLeftPanel', () => {

    const mockUseDispatch = jest.fn();
    beforeEach(() => {
        jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(mockUseDispatch);

        jest.spyOn(useReduxState, 'useAppSelector').mockReturnValue({
            language: {
                language: "en-AU",
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
        });
    })

    it("should set string to language when the component is created", () => {
        const { result } = renderHook(() => useLeftPanel());

        expect(result.current.language).toEqual("en-AU");
    })

    it("should set string to localization when the component is created", () => {
        const { result } = renderHook(() => useLeftPanel());

        expect(result.current.localization).toEqual({
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
        });
    })

    it('should dispatch an action when onShowFlyoutHandler is fired', () => {
        const { result } = renderHook(() => useLeftPanel());

        act(() => {
            result.current.onShowFlyoutHandler("Name");
        })

        expect(mockUseDispatch).toBeCalled();
        expect(mockUseDispatch).toBeCalledTimes(1);
        expect(mockUseDispatch).toBeCalledWith({ "payload": { "flyOutField": "Name" }, "type": ActionType.showFlyout });
    })

    it('should dispatch an action to update name when onChangeFieldHandler is fired', () => {
        const { result } = renderHook(() => useLeftPanel());

        act(() => {
            result.current.onChangeFieldHandler("Name", { target: { value: "test name" } });
        })

        expect(mockUseDispatch).toBeCalled();
        expect(mockUseDispatch).toBeCalledTimes(1);
        expect(mockUseDispatch).toBeCalledWith({ "payload": { "field": "test name", local: "en-AU" }, "type": ActionType.updateName });
    })

    it('should dispatch an action to update description when onChangeFieldHandler is fired', () => {
        const { result } = renderHook(() => useLeftPanel());

        act(() => {
            result.current.onChangeFieldHandler("Description", { target: { value: "test desc" } });
        })

        expect(mockUseDispatch).toBeCalled();
        expect(mockUseDispatch).toBeCalledTimes(1);
        expect(mockUseDispatch).toBeCalledWith({ "payload": { "field": "test desc", local: "en-AU" }, "type": ActionType.updateDesc });
    })


    // it('should dispatch an action to when onSubmitHandler is fired', () => {
    //     const { result } = renderHook(() => useLeftPanel());

    //     act(() => {
    //         result.current.onSubmitHandler({ preventDefault: () => { } });
    //     })

    //     expect(mockUseDispatch).toBeCalled();
    //     expect(mockUseDispatch).toBeCalledTimes(1);
    //     expect(mockUseDispatch).toBeCalledWith({ "payload": { "field": "Name", local: "en-AU" }, "type": ActionType.updateName });
    // })

})