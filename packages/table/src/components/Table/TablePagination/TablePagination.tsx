import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TableRow from "../TableRow/TableRow";
import TableCell from "../TableCell/TableCell";

type TablePaginationType = {
    colSpan: number;
    count: number;
    rowsPerPage: number;
    page: number;
    rowsPerPageOptions: number[];
    onPageChangeHandler: (page: number) => void;
    onRowsPerPageChangeHandler: (event: React.FormEvent<HTMLSelectElement>) => void;
}

const TableFoot = styled.tfoot`
`;

const Wrapper = styled.div`
text-align: right;
padding-right: 30px;
`;

const Select = styled.select`
margin: 0 50px 0 10px;
padding: 3px 6px;
`;

const Option = styled.option`
`;

const Button = styled.button.attrs<{ disabled: boolean }>(
    props => ({
        disabled: props.disabled
    })
)``;

const Label = styled.label`
    margin: 0 10px 0 10px;
`;

const TablePagination: React.FC<TablePaginationType> = (props) => {
    const [lastPage, setLastPage] = useState<number>(100);
    useEffect(() => {
        // console.log(props.page);
        let pageSize = Math.floor(props.count / props.rowsPerPage);
        pageSize += props.count % props.rowsPerPage > 0 ? 1 : 0;
        setLastPage(pageSize);
    }, [props.count, props.rowsPerPage]);

    return (
        <TableFoot>
            <TableRow>
                <TableCell colSpan={props.colSpan}>
                    <Wrapper>
                        <Label>Rows per page:</Label>
                        <Select onChange={(e) => props.onRowsPerPageChangeHandler(e)}>
                            {props.rowsPerPageOptions.map(item => <Option key={item} selected={item === props.rowsPerPage} value={item}>{item}</Option>)}
                        </Select>
                        <Button disabled={props.page <= 1} onClick={() => props.onPageChangeHandler(props.page - 1)}>Previous</Button>
                        <Label>{props.page}</Label>
                        <Button disabled={props.page >= lastPage} onClick={() => props.onPageChangeHandler(props.page + 1)}>Next</Button>
                    </Wrapper>
                </TableCell>
            </TableRow>
        </TableFoot>
    )
}

export default TablePagination;