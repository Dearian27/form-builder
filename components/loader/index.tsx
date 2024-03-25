import React from "react";
import "./styles.css";

type LoaderParams = {
  primary: string;
  secondary: string;
  size?: "small" | "medium" | "large";
  speed?: "slow" | "normal" | "fast";
};

const Loader = (props: LoaderParams) => {
  const { size = "medium", speed = "normal", primary, secondary } = props;
  const style = {
    "--size": size === "small" ? "25px" : size === "medium" ? "50px" : "100px",
    "--speed": speed === "slow" ? "4s" : speed === "normal" ? "2s" : "1s",
    "--primary": primary,
    "--secondary": secondary,
  } as React.CSSProperties;

  return <div style={style} className="custom-loader" />;
};

export default Loader;
