import LeftPanel from "./LeftPanel";
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import { Status } from '../models/Types';
import { render, screen } from "@testing-library/react";

const mockStore = configureStore([]);

describe("LeftPanel", () => {
    it('should render with message', () => {
        const store = mockStore({
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
            message: {
                loading: false,
                status: Status.success,
                message: "success",
            }
        })

        const component = renderer.create(
            <Provider store={store}>
                <LeftPanel />
            </Provider>
        )

        expect(component.toJSON()).toMatchSnapshot();
    })

    it('should render with loading', () => {
        const store = mockStore({
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
            message: {
                loading: true,
                status: Status.init,
                message: "",
            }
        })

        const component = renderer.create(
            <Provider store={store}>
                <LeftPanel />
            </Provider>
        )

        expect(component.toJSON()).toMatchSnapshot();
    })

    it('should render without message and loading', () => {
        const store = mockStore({
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
            message: {
                loading: false,
                status: Status.init,
                message: "",
            }
        })

        const component = renderer.create(
            <Provider store={store}>
                <LeftPanel />
            </Provider>
        )

        expect(component.toJSON()).toMatchSnapshot();
    })

    describe('LeftPanel without message and loading', () => {
        let store;

        beforeEach(() => {
            store = mockStore({
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
                message: {
                    loading: false,
                    status: Status.init,
                    message: "",
                }
            })
            store.dispatch = jest.fn();
            render(
                <Provider store={store}>
                    <LeftPanel />
                </Provider>
            )
        })

        it('should contain a form element', () => {
            const form = screen.queryByTestId('leftPanelForm');
            expect(form).toBeInTheDocument();
        })

        it('should contain 2 input elements', () => {
            const inputs = screen.queryAllByRole('textbox');
            expect(inputs).toHaveLength(2);
        })

        it('should contain a button elements', () => {
            const inputs = screen.queryByText('Save')
            expect(inputs).toBeInTheDocument();
        })
    })
    
    describe('LeftPanel with message and loading', () => {
        let store;

        beforeEach(() => {
            store = mockStore({
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
                message: {
                    loading: true,
                    status: Status.init,
                    message: "success",
                }
            })
            store.dispatch = jest.fn();
            render(
                <Provider store={store}>
                    <LeftPanel />
                </Provider>
            )
        })

        it('should contain a message element', () => {
            const message = screen.queryByText('success');
            expect(message).toBeInTheDocument();
        })

        it('should contain a loading element', () => {
            const inputs = screen.queryByText('Loading', {exact: false});
            expect(inputs).toBeInTheDocument();
        })
    })
})