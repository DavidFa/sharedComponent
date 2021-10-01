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

const TableCell: React.FC = (props) => {

    return (
        <Td>{props.children}</Td>
    )
}

export default TableCell;
