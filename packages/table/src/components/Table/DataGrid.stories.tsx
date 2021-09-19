import React, { ComponentProps } from 'react';

import { Story, Meta } from '@storybook/react';

import DataGrid from './DataGrid';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'DataGrid',
    component: DataGrid,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof DataGrid>> = (args) => <DataGrid {...args} ></DataGrid>;

export const FirstStory = Template.bind({});
FirstStory.args = {
    rows: [
        { "firstName": "firstName", "lastName": "lastName", "id": 1 },
        { "firstName": "firstName", "lastName": "lastName", "id": 2 },
        { "firstName": "firstName", "lastName": "lastName", "id": 3 },
        { "firstName": "firstName", "lastName": "lastName", "id": 4 },
        { "firstName": "firstName", "lastName": "lastName", "id": 5 },
        { "firstName": "firstName", "lastName": "lastName", "id": 6 },
        { "firstName": "firstName", "lastName": "lastName", "id": 7 },
        { "firstName": "firstName", "lastName": "lastName", "id": 8 },
        { "firstName": "firstName", "lastName": "lastName", "id": 9 },
        { "firstName": "firstName", "lastName": "lastName", "id": 10 },
        { "firstName": "firstName", "lastName": "lastName", "id": 11 },
        { age: 23, "firstName": "firstName", "lastName": "lastName", "id": 12 },
    ],
    columns: [
        { field: 'id', headerName: 'ID', width: 70, align: "left" },
        { field: 'firstName', headerName: 'First name', width: 140 },
        { field: 'lastName', headerName: 'Last name', width: 140 },
        { field: 'age', headerName: 'Age', width: 140, align: "left" },
        { field: 'gender', headerName: 'Gender', width: 140 },
    ],
    rowsPerPage: 5,
    width: 800,
    rowsPerPageOptions: [5, 10, 25]
};

export const EmptyStory = Template.bind({});
EmptyStory.args = {
    rows: [
    ],
    columns: [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 140 },
        { field: 'lastName', headerName: 'Last name', width: 140 }
    ],
    rowsPerPage: 5,
    width: 800,
    rowsPerPageOptions: [5, 10, 25]
};