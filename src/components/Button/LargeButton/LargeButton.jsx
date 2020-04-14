import React from "react";
import Button from "../Button";

const largeButton = (props) => (
  <Button onButtonPress={props.onButtonPress} type="large">
    {props.children}
  </Button>
);
export default largeButton;
