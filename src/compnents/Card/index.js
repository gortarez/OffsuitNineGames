import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
`;

export const Card = ({ card }) => {
    console.log(card);
    return (
        <StyledCard>
            <img src={card} alt="card"/>
        </StyledCard>
    );
};