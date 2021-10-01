import React from 'react'
import TableCell from './TableCell';
import Row from './Row';
import styled from 'styled-components';
import { PostType } from '../../../models/Types';

const TBody = styled.tbody``;

type BodyProps = {
    data: PostType[];
    rowClickHandler: (postId: number) => void;
}

const Body: React.FC<BodyProps> = ({ data, rowClickHandler }) => {

    const rows = !!data.length && data.map((item, index) => {
        return (<Row key={`tr_${index}`} postId={item.id} rowClickHandler={rowClickHandler}>
            <TableCell key={`td_${item.id}`}>{item.id}</TableCell>
            <TableCell key={`td_${item.title}`}>{item.title}</TableCell>
            {/* <TableCell key={`td_${item.body}`}>{item.body}</TableCell> */}
        </Row>)
    })

    return <TBody>{rows}</TBody>
}

export default Body;
