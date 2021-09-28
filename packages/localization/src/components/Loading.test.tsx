import Loading from "./Loading";
import configureStore from 'redux-mock-store';
import { Status } from '../models/Types';
import { AnyAction, Store } from "redux";
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

const mockStore = configureStore([]);

describe('Loading Component', () => {
    it('should render with given state from Redux State', () => {
        const store: Store<any, AnyAction> = mockStore({
            message: {
                loading: true,
                status: Status.init,
                message: "",
            }
        })

        const component = renderer.create(
            <Provider store={store}>
                <Loading />
            </Provider>
        )

        expect(component.toJSON()).toMatchSnapshot();
    })

    it('should render without Loading', () => {
        const store = mockStore({
            message: {
                loading: false,
                status: Status.init,
                message: "",
            }
        })

        const component = renderer.create(
            <Provider store={store}>
                <Loading />
            </Provider>
        )

        expect(component.toJSON()).toMatchSnapshot();
    })


    it('should contain a loading message', () => {
        const store = mockStore({
            message: {
                loading: true,
                message: "",
                status: Status.init
            }
        })

        render(<Provider store={store}>
            <Loading />
        </Provider>)

        const div = screen.queryByText("Loading", { exact: false });
        expect(div).toBeInTheDocument();
    })

    it('should not contain a loading message', () => {
        const store = mockStore({
            message: {
                loading: false,
                message: "",
                status: Status.init
            }
        })

        render(<Provider store={store}>
            <Loading />
        </Provider>)

        const div = screen.queryByText("Loading", { exact: false });
        expect(div).not.toBeInTheDocument();
    })
})

