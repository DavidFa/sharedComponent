import React from 'react'
import styled from 'styled-components';

const Td = styled.td`
width:300px;
font-family: Roboto, Helvetica, Arial, sans-serif;
font-weight: 500;
font-size: 0.875rem;
line-height: 1.5rem;
letter-spacing: 0em;
display: table-cell;
vertical-align: inherit;
`;

const CheckBox = styled.input``

type TableCellType = {
    selectable?: boolean;
    postId?: number;
    onSelectedHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TableCell: React.FC<TableCellType> = ({ selectable = false, postId, onSelectedHandler, children }) => {

    return (
        <Td>{selectable ? <CheckBox type="checkbox" value={postId} onChange={onSelectedHandler} /> : children}</Td>
    )
}

export default TableCell;
