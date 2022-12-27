import React from "react";
import "./Button.scss";
export interface ButtonProps {
  children?: React.ReactNode; // ReactNode is a type that can be a string, number, boolean, null, undefined, or a React element
  color?:
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "teal"
    | "cyan"
    | "blue"
    | "indigo"
    | "purple"
    | "pink"
    | "gray"
    | "dark"
    | "light"; // blue is default
  size?: "sm" | "md" | "lg"; // md is default
  variant?: "solid" | "outline" | "ghost"; // solid is default
  block?: boolean;
  icon?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    color,
    size,
    variant,
    block,
    icon,
    disabled,
    onClick,
    className
  } = props;

  const classes = ["btn"];
  color ? classes.push(`btn-${color}`) : classes.push("btn-blue");
  size ? classes.push(`btn-${size}`) : "";
  variant ? classes.push(`btn-${variant}-${color}`) : "";
  block ? classes.push("btn-block") : "";
  icon ? classes.push("btn-icon") : "";
  disabled ? classes.push("btn-disabled") : "";
  className ? className.split(" ").map((c: string) => classes.push(c)) : "";

  
  return (
    <button
      className={classes.join(" ")}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
