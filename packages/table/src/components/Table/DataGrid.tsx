import React from 'react';
import styled from "styled-components";
import TableContrainer from './TableContainer/TableContainer';
import Table from './Table/Table';
import TableHead from './TableHead/TableHead';
import TableRow from './TableRow/TableRow';
import TableCell from './TableCell/TableCell';
import TableBody from './TableBody/TableBody';
import TablePagination from "./TablePagination/TablePagination"
import { useReducer, useEffect, useState } from 'react';
import { DataGridColumns, DataGridRows } from '../../models/Types';


type DataGridProps = {
    width: number;
    rows: DataGridRows[];
    columns: DataGridColumns[];
    rowsPerPage?: number;
    rowsPerPageOptions: number[];
}

const DataGridDiv = styled.div<{ width: number }>`
    width:${props => props.width ? props.width + "px" : "70%"};
    position: relative;
    outline: 0px;
    margin: auto;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 12px;
    background-color: #eee;
    box-shadow: 0 4px 4px 4px  #ccc;
    border-radius: 4px;
    border: 1px solid #ddd;
    `;

// type StateType = {
//     currentPage: number;
//     rowsPerPage: number;
// }

// const paginationInitState: StateType = {
//     currentPage: 1,
//     rowsPerPage: 5
// }

// enum ActionType {
//     pageChange,
//     rowsPerPageChange
// }

// type Action = { type: ActionType, rowsPerPage?: number, page?: number };

// const paginationReducer = (state: StateType, action: Action): StateType => {
//     switch (action.type) {
//         case ActionType.rowsPerPageChange:
//             return { ...state, rowsPerPage: action.rowsPerPage! };
//         case ActionType.pageChange: console.log("ActionType.pageChange", action.page)
//             return { ...state, currentPage: action.page! };
//     }
// }

const DataGrid: React.FC<DataGridProps> = (props) => {

    // const DataGrid: React.FC<DataGridType> = ({ width,
    //     rows,
    //     columns,
    //     rowsPerPage,
    //     rowsPerPageOptions }) => {


    // const [paginationState, dispatchPagination] = useReducer(paginationReducer, paginationInitState);

    // useEffect(() => {
    //     dispatchPagination({ type: ActionType.rowsPerPageChange, rowsPerPage: props.rowsPerPage })
    // }, [])

    // const onPageChangeHandler = (page: number) => {
    //     dispatchPagination({ type: ActionType.pageChange, page: page })
    // }

    const defaultPage = 1;
    const [page, setPage] = useState<number>(defaultPage);
    const [rowsPerPage, setRowsPerPage] = useState<number>(props.rowsPerPage || 5);

    // useEffect(() => {
    //     setRowsPerPage(props.rowsPerPage);
    // }, [])

    const onPageChangeHandler = (page: number) => {
        setPage(page);
    }

    const onRowsPerPageChangeHandler = (event: React.FormEvent<HTMLSelectElement>) => {
        const rowsPerPage: string = event.currentTarget.value;
        setRowsPerPage(parseInt(rowsPerPage));
    }

    return <DataGridDiv width={props.width}>
        <TableContrainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {/* Check if column is empty */}
                        {props.columns.map(column => {
                            return <TableCell key={column.field} width={column.width} textAlign={column.align} borderBottom={true} sortable={column.sortable}>{column.headerName}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.length === 0?
                        <TableRow>
                            <TableCell borderBottom={true} colSpan={props.columns.length} textAlign={"center"}>Data is empty!</TableCell>
                        </TableRow>
                        : props.rows.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row, index) => {
                            return (
                                <TableRow key={`TableRow_${index}`}>
                                    {props.columns.map((column, i) => {
                                        return <TableCell key={`TableCell_${i}`} borderBottom={true} textAlign={column.align}>{row[column.field]}</TableCell>
                                    })}
                                </TableRow>
                            )
                        })}
                </TableBody>
                <TablePagination
                    colSpan={props.columns.length}
                    count={props.rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    rowsPerPageOptions={props.rowsPerPageOptions}
                    onPageChangeHandler={onPageChangeHandler}
                    onRowsPerPageChangeHandler={onRowsPerPageChangeHandler}
                />
            </Table>
        </TableContrainer>
    </DataGridDiv>
}

export default DataGrid;