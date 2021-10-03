import usePost from './usePost';
import { PostStatus } from '../../../models/Types';
import * as ReactRedux from 'react-redux';
import * as useReduxState from '../../../hooks/hooks';
import { renderHook, act } from "@testing-library/react-hooks";

describe('usePost', () => {
    const mockUseDispatch = jest.fn();
    beforeEach(() => {
        jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(mockUseDispatch);
        jest.spyOn(useReduxState, 'useAppSelector').mockReturnValue({
            status: PostStatus.list,
            posts: [],
            post: { id: 0, title: "title", body: "body" },
            comparedPosts: []
        });
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should dispatch an action when onTitleChangeHandler is fired', () => {
        const { result } = renderHook(() => usePost());
        act(() => {
            result.current.onTitleChangeHandler({ target: { value: "new title" } });
        });

        expect(mockUseDispatch).toHaveBeenCalled();
        expect(mockUseDispatch).toHaveBeenCalledTimes(1);
        expect(mockUseDispatch).toHaveBeenCalledWith({
            "payload": "new title",
            "type": "Post/editTitle",
        });
    })

    it('should dispatch an action when onBodyhangeHandler is fired', () => {
        const { result } = renderHook(() => usePost());
        act(() => {
            result.current.onBodyhangeHandler({ target: { value: "new body" } });
        });

        expect(mockUseDispatch).toHaveBeenCalled();
        expect(mockUseDispatch).toHaveBeenCalledTimes(1);
        expect(mockUseDispatch).toHaveBeenCalledWith({
            "payload": "new body",
            "type": "Post/editBody",
        });
    })

    it('should dispatch an action when onCancelHandler', () => {
        const { result } = renderHook(() => usePost());
        act(() => {
            result.current.onCancelHandler();
        });

        expect(mockUseDispatch).toHaveBeenCalled();
        expect(mockUseDispatch).toHaveBeenCalledTimes(1);
        expect(mockUseDispatch).toHaveBeenCalledWith({
            "payload": 0,
            "type": "Post/updateStatus",
        });
    })

    it('should dispatch an action when onSubmitHandler', async () => {

        const { result } = renderHook(() => usePost());
        act(() => {
            result.current.onSubmitHandler({ preventDefault: () => { } });
        });

        expect(mockUseDispatch).toHaveBeenCalled();
        expect(mockUseDispatch).toHaveBeenCalledTimes(1);
        // expect(await mockUseDispatch).toHaveBeenCalledWith({
        //     "payload": 0,
        //     "type": "Post/updateStatus",
        // });
    })

    it('should not dispatch an action when onSubmitHandler', () => {
        jest.spyOn(useReduxState, 'useAppSelector').mockReturnValue({
            status: PostStatus.list,
            posts: [],
            post: { id: 0, title: "", body: "body" },
            comparedPosts: []
        });
        const jsdomAlert = window.alert;
        window.alert = () => { };
        const { result } = renderHook(() => usePost());
        act(() => {
            result.current.onSubmitHandler({ preventDefault: () => { } });
        });

        expect(mockUseDispatch).not.toHaveBeenCalled();
        expect(mockUseDispatch).toHaveBeenCalledTimes(0);
        window.alert = jsdomAlert;
    })
})