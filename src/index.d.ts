declare module "react-clickoutside-component" {
  import React from "react";

  interface ClickOutsideProps {
    children: React.ReactNode;
    onClickOutside(e: any): void;
  }

  const ClickOutside: (props: ClickOutsideProps) => React.ReactElement;

  export default ClickOutside;
}
