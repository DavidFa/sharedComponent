import AddPost from './AddPost';
import { render, screen, fireEvent } from '@testing-library/react';
import * as ReactRedux from 'react-redux';
import React from 'react';
import renderer from 'react-test-renderer';

describe('AddPost', () => {
    describe("Snapshot Test", () => {
        it("should render with given state", () => {
            const component = renderer.create(<AddPost />);
            expect(component.toJSON()).toMatchSnapshot();
        });

    });

    const mockUseDispatch = jest.fn();
    const setState = jest.fn();

    beforeEach(() => {
        jest.spyOn(ReactRedux, 'useDispatch').mockReturnValue(mockUseDispatch);

    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('', () => {
        it('should dispatch an action when click save button', () => {
            const useStateMock = (initState: { title: string, body: string }) => [initState = { title: "title", body: "body" }, setState];
            jest.spyOn(React, 'useState').mockImplementation(useStateMock);
            render(<AddPost />)
            // const jsdomAlert = window.alert;
            // window.alert = () => { };
            expect(screen.getByRole('form')).toBeInTheDocument();
            expect(screen.queryByText(/Add Post/i)).toBeInTheDocument();
            expect(screen.queryByText(/Title/i)).toBeInTheDocument();
            expect(screen.queryByText(/Body/i)).toBeInTheDocument();
            expect(screen.queryByText(/Body/i)).toBeInTheDocument();
            expect(screen.queryByTestId(/input-title/i)).toBeInTheDocument();
            expect(screen.queryByTestId(/input-body/i)).toBeInTheDocument();

            const cancel = screen.getByText(/Cancel/i);
            expect(cancel).toBeInTheDocument();

            fireEvent.click(cancel);
            expect(mockUseDispatch).toHaveBeenCalledTimes(1);

            const save = screen.getByText(/Save/i);
            expect(save).toBeInTheDocument();

            fireEvent.click(save);
            expect(mockUseDispatch).toHaveBeenCalledTimes(2);
            // window.alert = jsdomAlert;
        })
    })


    it('should not dispatch an action when click save button', () => {
        const useStateMock = (initState: { title: string, body: string }) => [initState = { title: "", body: "" }, setState];
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        render(<AddPost />)
        const jsdomAlert = window.alert;
        window.alert = () => { };

        const save = screen.getByText(/Save/i);
        expect(save).toBeInTheDocument();

        fireEvent.click(save);
        expect(mockUseDispatch).toHaveBeenCalledTimes(0);
        window.alert = jsdomAlert;
    })
})