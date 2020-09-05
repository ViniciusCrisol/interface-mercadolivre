import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  padding: 16px 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  > a {
    font-size: 14px;
    text-decoration: none;
    color: var(--color-blue);

    padding: 2.5px 0;

    & + a {
      margin-left: 10px;
      padding-left: 10px;
      border-left: 1px solid var(--color-border);
    }
  }
`;

export const Panel = styled.div`
  background-color: var(--color-white);
  box-shadow: var(--panel-shadow);

  display: grid;
  grid-template-columns: 65fr 35fr;
`;

export const Column = styled.div`
  &:first-child {
    border-right: 1px solid var(--color-border);
  }
`;

export const Galery = styled.div`
  height: 530px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 73%;
  }
`;

export const Section = styled.div`
  padding: 48px 32px;
  border-top: 1px solid var(--color-border);

  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 18px;
    margin-bottom: 40px;
  }

  > div {
    display: flex;
    flex-direction: column;

    > span + span {
      margin-top: 16px;
    }

    .title {
      font-size: 16px;
      color: var(--color-black);
    }

    .description {
      margin-top: 5px;

      font-size: 14px;
      line-height: 19px;
      color: var(--color-gray);
    }
  }

  > a {
    margin-top: 20px;
    width: max-content;

    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: var(--color-blue);
  }
`;

export const Description = styled.div`
  padding: 44px 32px;
  border-top: 1px solid var(--color-border);

  > h2 {
    font-size: 24px;
    margin-bottom: 32px;
  }

  p {
    font-size: 20px;
    color: var(--color-gray);
    line-height: 27px;
  }
`;
