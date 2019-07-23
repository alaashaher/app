import React from "react";

export default ({ dataSource = [], columns = [], Child }) => {
  const MAPComponent = columns.map((column, idx) => {
    const { title, style } = column;
    return <Child key={idx} style={style} children={title} />;
  });

  return <div>{MAPComponent}</div>;
};
