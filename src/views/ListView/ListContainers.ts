import styled from "styled-components";
import { StyleConstants } from "../../shared/constants";

export const PrimaryList = styled.li`
  margin: 8px 0px;
  padding: 15px 25px;
  border-radius: 6px;
  background: ${StyleConstants.colors.LIGHT_GREY};
  width: 100%;
  span {
    font-size: 14px;
    margin: 0;
    color: ${StyleConstants.colors.GRAPE};
    cursor: pointer;
  }
`;

export const PrimaryListHeader = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 18px;
  }
  button {
    background: ${StyleConstants.colors.SHELL};
    color: ${StyleConstants.colors.EGG_PLANT};
    border: 1px solid ${StyleConstants.colors.SAND};
    border-radius: 6px;
    padding: 8px 16px;
    cursor: pointer;
    height: 40px;
    &: hover {
      background: ${StyleConstants.colors.SAND};
      color: ${StyleConstants.colors.GRAPE};
    }
  }
`;

export const SecondaryList = styled.div`
  padding: 1px 30px;
  border-bottom: 1px solid #ccc;
  background: ${StyleConstants.colors.GREY};
  border-radius: 6px;
  margin: 8px 0px;
  h6 {
    margin: 4px 0;
  }
  p {
    font-size: 12px;
    margin: 0;
  }
  li {
    width: 100%;
    padding: 8px 0px;
    border-bottom: 2px solid ${StyleConstants.colors.LIGHT_GREY};
    &: last-child {
      border-bottom: none;
    }
  }
`;
