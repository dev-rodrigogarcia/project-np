import React, { FunctionComponent, forwardRef, Ref } from 'react'

import { StyledIconButton } from './styles'
import { Name, Icon } from '../Icon'
import { SizeVariant, SizeButton } from '../../Theme/types'

enum VariantOptions {
  color,
  gray,
}

type Variant = keyof typeof VariantOptions

interface IconButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  /**
   If true displays the button in disabled state.
   */
  disabled?: boolean
  /**
   Specifies if icon will be in primary color or gray.
   */
  variant?: Variant
  /**
   Specifies an icon to be rendered.
   */
  icon: Name
  /**
   Specifies the size of the button.
   */
  size?: SizeVariant
  /**
   If true displays the button in active state.
   */
  active?: boolean
}

const IconButton: FunctionComponent<IconButtonProps> = forwardRef(
  (
    { disabled, icon, variant = 'color', size = SizeButton.lg, ...props },
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <StyledIconButton
        disabled={disabled}
        className={`${variant}-button`}
        size={size}
        {...props}
        ref={ref}
      >
        <Icon name={icon} />
      </StyledIconButton>
    )
  },
)

export { IconButton }
