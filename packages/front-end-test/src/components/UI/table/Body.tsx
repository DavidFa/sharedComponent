import React from 'react'
import TableCell from './TableCell';
import Row from './Row';
import styled from 'styled-components';
import { PostType } from '../../../models/Types';

const TBody = styled.tbody``;
const Button = styled.button`
width:100px;
padding: 3px 6px;
margin:20px auto;
background: #abc;
border-radius: 6px;
`;

type BodyProps = {
    data: PostType[];
    rowClickHandler: (postId: number) => void;
    onSelectedHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Body: React.FC<BodyProps> = ({ data, rowClickHandler, onSelectedHandler }) => {

    const rows = !!data.length && data.map((item, index) => {
        return (<Row key={`tr_${index}`} >
            <TableCell selectable={true} postId={item.id} key={`td_${item.id}`} onSelectedHandler={onSelectedHandler} >{item.id}</TableCell>
            <TableCell key={`td_${item.title}`}>{item.title}</TableCell>
            <TableCell key={`td_${item.body}`}><Button onClick={() => rowClickHandler(item.id)}>Edit</Button></TableCell>
        </Row>)
    })

    return <TBody>{rows}</TBody>
}

export default Body;
