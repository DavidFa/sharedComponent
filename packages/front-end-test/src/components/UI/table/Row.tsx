import React from 'react'
import styled from 'styled-components';

const Tr = styled.tr`
color: inherit;
display: table-row;
vertical-align: middle;
outline: 0px;
`

// type RowProps = {
//     postId?: number;
//     rowClickHandler?: (postId: number) => void;
// }

const Row: React.FC = ({ children }) => {

    // let row;
    // if (postId && rowClickHandler) {
    //     row = <Tr onClick={() => rowClickHandler(postId)}>{children}</Tr>
    // } else {
    //     row = <Tr>{children}</Tr>;
    // }
    return <Tr>{children}</Tr>;
}

export default Row;
