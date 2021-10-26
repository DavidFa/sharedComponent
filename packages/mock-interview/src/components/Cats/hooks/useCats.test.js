import { useCats } from './useCats';
import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { cats } from '../../../api/helper';

describe("test useCats hook", () => {
    const mockSetState = jest.fn();
    const mockPreventDefault = jest.fn();

    beforeEach(() => {
        // jest.spyOn(React, 'useState').mockImplementation(() => [{ catList: cats, cat: null }, mockSetState])
    })

    it('should render cats with given state', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useCats());

        await waitForNextUpdate();

        expect(result.current.cats.catList).toEqual(cats);

        act(() => {
            result.current.editCatHandler(2);
        })

        expect(result.current.cats.cat).toEqual({ id: 2, color: 'block', age: 2 });

        expect(result.current.state.loading).toBe(true);

        // act(() => {
        //     result.current.onEditSubmitHandler({ id: 1, color: 'grep', age: 3 }, { preventDefault: mockPreventDefault });
        // })

        // await waitForNextUpdate();
        // // await waitForValueToChange(() => { return result.current.cats });

        // expect(result.current.cats.catList).toBe([
        //     { id: 1, color: 'grep', age: 3 },
        //     { id: 2, color: 'block', age: 2 },
        //     { id: 3, color: 'white', age: 3 },
        // ]);
    })

})