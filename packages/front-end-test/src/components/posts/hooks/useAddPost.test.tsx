import React from 'react';
import useAddPost from './useAddPost';
import * as ReactRedux from 'react-redux';
import { renderHook, act } from "@testing-library/react-hooks";

describe('useAddPost', () => {
    const mockUseDispatch = jest.fn();
    const setState = jest.fn();
    // const useStateMock = (initState) => [initState = { title: "title", body: "body" }, setState];
    // const useStateMock: any = (initState: any) => [initState, setState];

    beforeEach(() => {
        jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(mockUseDispatch);
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should update "post" with new title when onTitleChangeHandler is fired', () => {
        const { result } = renderHook(() => useAddPost());
        const event = { target: { value: "new title", name: "title" } } as React.ChangeEvent<HTMLInputElement>;
        act(() => {
            result.current.onTitleChangeHandler(event);
        });

        expect(mockUseDispatch).not.toHaveBeenCalled();
        expect(result.current.post).toEqual({ "body": "", "title": "new title" });
    })

    it('should update "post" with body when onBodyhangeHandler is fired', () => {
        const { result } = renderHook(() => useAddPost());
        const event = { target: { value: "new body", name: "body" } } as React.ChangeEvent<HTMLInputElement>;
        act(() => {
            result.current.onBodyhangeHandler(event);
        });

        expect(mockUseDispatch).not.toHaveBeenCalled();
        expect(result.current.post).toEqual({ "body": "new body", "title": "" });
    })

    it('should dispatch an action when onCancelHandler is fired', () => {
        const { result } = renderHook(() => useAddPost());
        act(() => {
            result.current.onCancelHandler();
        });

        expect(mockUseDispatch).toHaveBeenCalled();
        expect(mockUseDispatch).toHaveBeenCalledTimes(1);
        expect(mockUseDispatch).toHaveBeenCalledWith({
            "payload": 0,
            "type": "Post/updateStatus",
        })
    })

    it('should not dispatch an action when post.title is empty', () => {
        const jsdomAlert = window.alert;
        window.alert = () => { };
        const { result } = renderHook(() => useAddPost());
        const formEvent = { preventDefault: () => { } } as React.FormEvent;
        act(() => {
            result.current.onSubmitHandler(formEvent);
        });

        expect(mockUseDispatch).not.toHaveBeenCalled();
        expect(mockUseDispatch).toHaveBeenCalledTimes(0);
        window.alert = jsdomAlert;
    })

    it('should dispatch an action when post.title is not empty', () => {
        jest.spyOn(React, 'useState').mockImplementation(() => [{ title: "title", body: "body" }, setState]);
        const formEvent = { preventDefault: () => { } } as React.FormEvent;
        const { result } = renderHook(() => useAddPost());
        act(() => {
            result.current.onSubmitHandler(formEvent);
        });

        expect(mockUseDispatch).toHaveBeenCalled();
        expect(mockUseDispatch).toHaveBeenCalledTimes(1);
    })
})