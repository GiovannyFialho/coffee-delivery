import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContentDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LocationContainer = styled.div`
  width: 8.9rem;
  height: 2.35rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.6rem 0.5rem;
  background: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;
`;

export const LocationText = styled.p`
  font-size: 0.8rem;
  line-height: 1rem;
  color: ${(props) => props.theme["purple-dark"]};
`;

export const CartContainer = styled.div`
  width: 2.3rem;
  height: 2.35rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme["yellow-light"]};
  border-radius: 6px;
`;
