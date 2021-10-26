import Cats from './Cats';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { cats } from '../../api/helper';

describe("test useCats hook", () => {
    const mockSetState = jest.fn();

    beforeEach(() => {
        jest.spyOn(React, 'useState').mockImplementation(() => [{ catList: cats, cat: null }, mockSetState])
        // render(<Cats />);
    })

    it('should render cats with given state', () => {
        const {container, getByText} = render(<Cats />)
        const wrapper = screen.queryByTestId(/wrapper/i);
        expect(wrapper).toBeInTheDocument();
        expect(container).toMatchSnapshot();

        // fireEvent.click()
    })

})