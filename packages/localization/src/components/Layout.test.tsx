import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Layout from './Layout';

const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
    // let store;
    // let component;
    // beforeEach(() => {
    //     store = mockStore({
    //         localization: {
    //             isShowFlyout: false,
    //             flyOutField: "",
    //             name: {
    //                 length: 20,
    //                 tem: "",
    //                 localization: {}
    //             },
    //             description: {
    //                 length: 50,
    //                 tem: "",
    //                 localization: {}
    //             }
    //         }
    //     });
    //     component = renderer.create(
    //         <Provider store={store}>
    //             <Layout />
    //         </Provider>
    //     );
    // });
    test('', () => {
        // const component = renderer.create(
        //     <Layout />
        // );

        // let tree = component.toJSON();
        // expect(tree).toMatchSnapshot();
    })
});