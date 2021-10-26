import Users from './Users';
import { screen, render } from '@testing-library/react';
import * as ReactRedux from 'react-redux';
import React from 'react';
import renderer from 'react-test-renderer';

describe("Users Component", () => {
    const mockDispatch = jest.fn();
    const mockSetState = jest.fn();

    beforeEach(() => {
        jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(mockDispatch);
        jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({ 1: { id: 1, name: 'user 1', age: 1 } })
        jest.spyOn(React, 'useState').mockImplementation(() => [[{ id: 1, name: 'user 1', age: 1 }], mockSetState]);
    })

    it('should match snapshot', () => {
        const component = renderer.create(<Users />)

        expect(component.toJSON()).toMatchSnapshot();
    })

    // it('should render with given state', () => {
    //     render(<Users />);
    //     expect(screen.queryByTestId(/userTable/i)).toBeInTheDocument();
    // })
})