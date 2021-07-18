import React from "react";
import styled from "styled-components";
import { StyleConstants } from "../../shared/constants";

type Props = {
  title: string;
  className?: string;
};

const Tab: React.FC<Props> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default styled(Tab)`
  border: 1px solid ${StyleConstants.colors.EGG_PLANT};
  border-top: none;
  padding: 40px 80px;
  height: auto;
  overflow-y: auto;
  background: ${StyleConstants.colors.GRAPE};
  border-radius: 0px 0px 8px 8px;
`;
