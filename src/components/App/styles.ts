import { styled } from 'styled-components';

export const Container = styled.div`
    max-width: 1248px;
    height: 100%;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        padding: 0 32px;
    }
`;
