import React from 'react'
import styled from 'styled-components'
import Header from './Header';
import Body from './Body';
import { PostType } from '../../../models/Types';

const HtmlTable = styled.table`
display: table;
margin: auto;
border-color: grey;
border-radius: 10px;
border: 1px solid #ddd;
border-collapse: collapse;
`;

type TableProps = {
    headers: string[];
    data: PostType[];
    rowClickHandler: (postId: number) => void;
}

const Table: React.FC<TableProps> = React.memo(({ headers, data, rowClickHandler }) => {
    return (
        <HtmlTable>
            <Header headers={headers} />
            <Body data={data} rowClickHandler={rowClickHandler} />
        </HtmlTable>
    )
})

export default Table;
