import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';
import useCount from './useCount';

describe('useCount', () => {
    // const mockSetState = jest.fn();
    // beforeEach(() => {
    //     jest.spyOn(React, 'useState').mockImplementation(() => [0, mockSetState])
    // })

    it('should increment counter', () => {
        const { result } = renderHook(() => useCount());
        act(() => {
            result.current.increment();
        })

        expect(result.current.counter).toEqual(2);
    })
})
