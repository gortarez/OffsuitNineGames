import React from 'react';
import styled from 'styled-components';
import TableBackground from '../../assets/images/table/background.png';

const StyledTable = styled.div`
    display:block;
    max-width:500px;
    max-height:283px;
    background-image: url(${ TableBackground })
`;

export const Table = () => {
    return (
        <StyledTable>
        Hi
        </StyledTable>
    );
};