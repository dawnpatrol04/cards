import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 0rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem 1rem;

  > div {
    display: flex;
    justify-content: center;
  }
`;
