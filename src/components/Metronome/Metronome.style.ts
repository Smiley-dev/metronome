import styled from "styled-components";

export const Wrapper = styled.div``;

export const Tabs = styled.div`
      display: flex;
      flex-wrap: wrap;
      width: 700px;

      label {
            padding: 25px;
            background-color: #e2e2e2;
            font-weight: bold;
            width: 50%;
            text-align: center;
      }
`;

export const Content = styled.div`
      width: 100%;
      padding: 20px;
      background-color: white;
      order: 1;
      display: none;
`;

export const Tab = styled.input.attrs({
      type: "radio",
})`
      display: none;
      &:checked + label + ${Content} {
            display: block;
      }

      &:checked + label {
            background: white;
      }
`;
