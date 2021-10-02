import React from 'react'
import TableCell from './TableCell';
import Row from './Row';
import styled from 'styled-components'

const THead = styled.thead`
display: table-header-group;
vertical-align: middle;
border-color: inherit;
`;

type HeaderProps = {
    headers: string[];
}

const Header: React.FC<HeaderProps> = ({ headers }) => {

    const fields = !!headers.length && <Row>{headers.map((item, index) => {
        return <TableCell key={`${item}_${index}`}>{item}</TableCell>
    })}</Row>;

    return (
        <THead>
            {fields}
        </THead>
    )
}

export default Header;
