import Button from "@/components/common/Button";
import Form from "@/components/common/Form";
import styled from "styled-components";

export const Styled = {
  Root: styled.div`
    padding: 1rem;
  `,

  Form: styled(Form)`
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 40rem;
    height: 40rem;
  `,

  Title: styled.header`
    font-size: 2.5rem;

    text-align: center;
  `,

  Error: styled.div`
    height: 4rem;
    line-height: 4rem;

    font-size: 1.5rem;

    color: red;
  `,

  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 3rem;

    & > button:first-child {
      margin-bottom: 1rem;
    }
  `,

  Button: styled(Button)`
    width: 25rem;
    padding: 1rem 0;
  `,
};
