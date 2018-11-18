import * as React from "react";
import AbsolutePathComponent from "@/AbsolutePathComponent";

type Props = {};

const NestedComponent: React.SFC<Props> = ({ children }) => {
  return (
    <span>
      <AbsolutePathComponent>{children}</AbsolutePathComponent>
    </span>
  );
};

export default NestedComponent;
