import React from "react";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Message from "./Message";
import { Status } from "../models/Types";

const mockStore = configureStore([]);

describe('React-Redux Message Component', () => {
    let store;
    let component: renderer.ReactTestRenderer;


    test('should render with given init status state from Redux store', () => {
        const store = mockStore({
            message: {
                loading: false,
                status: Status.init,
                message: "",
            }
        });

        store.dispatch = jest.fn();

        const component = renderer.create(
            <Provider store={store}>
                <Message />
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('should render with given success status state from Redux store', () => {
        store = mockStore({
            message: {
                loading: false,
                status: Status.success,
                message: "success",
            }
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <Message />
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('should render with given fail status state from Redux store', () => {
        store = mockStore({
            message: {
                loading: false,
                status: Status.fail,
                message: "success",
            }
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <Message />
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
})
