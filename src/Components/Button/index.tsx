import React, { FunctionComponent, forwardRef } from "react";

import { StyledButton } from "./styles";

enum VariantOptions {
  contained,
  outlined,
  text
}

type Variant = keyof typeof VariantOptions;

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  /**
    If true displays the button in disabled state.
    */
  disabled?: boolean;
  /**
    Defines the button type.
    */
  variant: Variant;
  /**
    If true show the button in active state.
    */
  active?: boolean;
}

const Button: FunctionComponent<ButtonProps> = forwardRef(
  (
    { disabled, variant, children, ...props },
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <StyledButton {...props} ref={ref} disabled={disabled} variant={variant}>
        {children}
      </StyledButton>
    );
  }
);

export { Button };
