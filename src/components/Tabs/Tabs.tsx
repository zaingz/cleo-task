import React, { ReactElement, useState } from "react";
import TabTitle from "./TabTitle";
import styled from "styled-components";

type Props = {
  children: ReactElement[];
  className?: string;
};

const Tabs: React.FC<Props> = ({ children, className }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={className}>
      <ul>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            active={index === selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  );
};

export default styled(Tabs)`
  ul {
    display: flex;
    list-style: none;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
  }
`;
