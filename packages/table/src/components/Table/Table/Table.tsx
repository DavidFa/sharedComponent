import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
display: table;
width: 100%;
min-width: 650px;
background: white;
border-color: grey;
border-radius: 10px;
border: 1px solid #ddd;
border-collapse: collapse;
`;

const Table: React.FC = (props) => {

  return (<StyledTable>{props.children}</StyledTable>)
}

export default Table;