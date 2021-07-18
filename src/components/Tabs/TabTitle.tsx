import React, { useCallback } from "react";
import styled from "styled-components";
import { StyleConstants } from "../../shared/constants";

type Props = {
  title: string;
  index: number;
  active: boolean;
  setSelectedTab: (index: number) => void;
  className?: string;
};

const TabTitle: React.FC<Props> = ({
  title,
  setSelectedTab,
  index,
  className,
}) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <li className={className}>
      <button onClick={onClick}>{title}</button>
    </li>
  );
};

export default styled(TabTitle)`
  background: ${(props) =>
    props.active
      ? StyleConstants.colors.GRAPE
      : StyleConstants.colors.EGG_PLANT};
  padding: 20px;
  border-radius: 8px 8px 0px 0px;
  cursor: pointer;
  margin: 0px;
  flex-grow: 1;
  border: ${(props) =>
    props.active ? `1px solid ${StyleConstants.colors.EGG_PLANT}` : "none"};
  border-bottom: ${(props) =>
    !props.active ? `1px solid ${StyleConstants.colors.EGG_PLANT}` : "none"};

  button {
    width: 100%;
    background: none;
    border: none;
    padding: 10px;
    color: white;
    cursor: pointer;
    font-size: 16px;
  }
`;
