import styled from "styled-components";
import {
  HiOutlineHeart,
  HiOutlineCheck,
  HiOutlineShieldCheck,
} from "react-icons/hi";

export const Container = styled.div`
  padding: 32px;

  display: flex;
  flex-direction: column;
`;

export const Condition = styled.div`
  font-size: 14px;
  color: var(--color-gray);

  margin-bottom: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    width: 100%;
    font-size: 26px;
    font-weight: 600;
  }
`;

export const HeartIcon = styled(HiOutlineHeart)`
  width: 28px;
  height: 28px;

  margin-left: 16px;
  color: var(--color-blue);

  flex-shrink: 0;
  cursor: pointer;
`;

export const DispatchTag = styled.div`
  width: fit-content;

  margin-top: 12px;
  padding: 6px 10px;
  border-radius: 4px;
  background-color: var(--color-blue);

  font-size: 14px;
  font-weight: 600;
  color: var(--color-white);
`;

export const PriceCard = styled.div`
  margin-top: 18px;

  display: flex;
  flex-direction: column;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: flex-start;

  font-size: 44px;
  font-weight: 300;

  .fraction {
    margin-left: 8.8px;
  }

  .cents {
    font-size: 20px;
    padding-top: 3px;
    margin-left: 1px;
  }
`;

export const InstallmentInfo = styled.div`
  font-size: 16px;
`;

export const StockStatus = styled.div`
  font-size: 18px;
  margin-top: 24px;
`;

export const MethodCard = styled.div`
  margin-top: 18px;

  display: flex;

  > div {
    margin-left: 8px;

    display: flex;
    flex-direction: column;

    .title {
      font-size: 16px;
      color: var(--color-green);
    }

    .details {
      font-size: 16px;
      margin-top: 5px;
      color: var(--color-gray);
    }

    .more {
      margin-top: 5px;

      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      color: var(--color-blue);
    }
  }
`;

export const CheckIcon = styled(HiOutlineCheck)`
  width: 28px;
  height: 28px;

  flex-shrink: 0;
  color: var(--color-green);
`;

export const Actions = styled.div`
  margin-top: 16px;

  display: flex;
  flex-direction: column;
`;

type ButtonProps = { solid?: boolean };

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
  padding: 12px 10px;

  font-size: 15px;
  border-radius: 4px;

  cursor: pointer;

  color: ${({ solid }) => (solid ? "var(--color-white)" : "var(--color-blue)")};
  border: ${({ solid }) => (solid ? "none" : "1px solid var(--color-blue)")};
  background-color: ${({ solid }) =>
    solid ? "var(--color-blue)" : "transparent"};
`;

export const Benefits = styled.ul`
  margin-top: 16px;
  list-style: none;

  display: flex;
  flex-direction: column;

  > li {
    display: flex;

    p {
      margin-left: 10px;

      font-size: 14px;
      color: var(--color-gray);
    }
  }
`;

export const ShieldIcon = styled(HiOutlineShieldCheck)`
  width: 20px;
  height: 20px;

  flex-shrink: 0;
  color: var(--color-gray);
`;
