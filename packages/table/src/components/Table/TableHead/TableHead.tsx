import React from 'react';
import styled from 'styled-components';

const StyledTableHead = styled.thead`
display: table-header-group;
vertical-align: middle;
border-color: inherit;
`;

const TableHead: React.FC = (props) => {

  return (<StyledTableHead>{props.children}</StyledTableHead>)
}

export default TableHead;