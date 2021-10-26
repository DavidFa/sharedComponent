import useUser from './useUsers';
import { act, renderHook } from '@testing-library/react-hooks';
import * as ReactRedux from 'react-redux';
import React from 'react';

describe('useUser Hook test', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(mockDispatch);
        jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({ 1: { id: 1, name: 'user 1', age: 1 } })
    })

    it('should render with given state', async () => {
        const { result } = renderHook(() => useUser());
        // act(()=>{
        //     setTimeout(() => {

        //     }, 3000);
        // })
        // await waitForValueToChange(() => { return result.current.userList });
        expect(result.current.userList).toEqual([{ id: 1, name: 'user 1', age: 1 }])

        // expect(result.current.users).toEqual({ 1: { id: 1, name: 'user 1', age: 1 } })
        // expect(typeof result.current.editHandler).toBe('function');
        // expect(result.current.userList).toEqual([])
        // expect(mockDispatch).toHaveBeenCalledTimes(1);

        // expect(result).toMatchSnapshot();
    })

    it('should dispatch an action when editHandler', async () => {
        const { result } = renderHook(() => useUser());
        act(() => {
            result.current.editHandler(1);
        })

        expect(mockDispatch).toHaveBeenCalledTimes(2);
    })

    it('should rerender', async () => {
        const mockSetState = jest.fn();
        jest.spyOn(React, 'useState').mockImplementation(() => [[{ id: 1, name: 'user 1', age: 1 }], mockSetState])

        const { result } = renderHook(() => useUser());

        expect(result.current.userList).toEqual([{ id: 1, name: 'user 1', age: 1 }])
    })

})