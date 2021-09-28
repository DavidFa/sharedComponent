import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import RightPanel from "./RightPanel";
import { ActionType } from "../models/Types";
// import { cleanup, fireEvent, render } from '@testing-library/react';
import { Store, AnyAction } from 'redux';
// import {screen, getByLabelText} from '@testing-library/dom'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

const mockStore = configureStore([]);

describe('RightPanel', () => {

    // Snapshot
    it('should render with given state from Redux store', () => {
        const store: Store<any, AnyAction> = mockStore({
            language: {
                language: "en-AU",
                languages: ["en-AU", "en-US", "en", "en-UK"]
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
            },
        });
        const component: renderer.ReactTestRenderer = renderer.create(
            <Provider store={store}>
                <RightPanel />
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });


    // afterEach(cleanup);
    // it('should display header', () => {
    //     const h4 = screen.getByRole("form");
    // })


    const store: Store<any, AnyAction> = mockStore({
        language: {
            language: "en-AU",
            languages: ["en-AU", "en-US", "en", "en-UK"]
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
        },
    });

    beforeEach(() => {

        store.dispatch = jest.fn();
        render(<Provider store={store}>
            <RightPanel />
        </Provider>)
    });

    it('should dispatch an action on Cancel button click', () => {

        // Dom
        const cancelBtn = screen.getByTestId("cancelBtn");
        expect(cancelBtn).toHaveTextContent("Cancel");

        // Event
        fireEvent.click(cancelBtn);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            { type: ActionType.dissFlyout, payload: { local: "en-AU" } }
        );
    });

    // afterEach(cleanup);

    it('should contain h4 elements', () => {

        const h4 = screen.getByRole('h4');
        expect(h4).toHaveTextContent("Name");

    });

    it('should contain 4 input elements', () => {

        const inputs = screen.queryAllByRole('textbox');
        expect(inputs).toHaveLength(4);

        const inputAu = screen.getByPlaceholderText("en-AU");
        expect(inputAu).toBeInTheDocument();

        const inputUs = screen.getByPlaceholderText("en-US");
        expect(inputUs).toBeInTheDocument();

        const inputUk = screen.getByPlaceholderText("en-UK");
        expect(inputUk).toBeInTheDocument();

        const inputEn = screen.getByPlaceholderText("en");
        expect(inputEn).toBeInTheDocument();
    });

    
    it('should dispatch an action on Save button click', () => {

        // Dom
        const saveBtn = screen.getByTestId("saveBtn");
        expect(saveBtn).toHaveTextContent("Save");

        // Event
        fireEvent.click(saveBtn);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            { type: ActionType.updateNameSet, payload: { local: "en-AU", localization: { "en": "", "en-UK": "", "en-US": "" } } }
        );
    });
})
