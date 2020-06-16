import styled, { css } from 'styled-components'
import { rgba } from 'polished'

enum VariantOptions {
   contained,
   outlined,
   text,
}

type Variant = keyof typeof VariantOptions

interface ButtonProps {
   variant: Variant
   active?:boolean
}

export const ContainedButton = (active?:boolean)=> css`
   background-color: ${({ theme }) => theme.colors.primary};
   color: ${({ theme }) => theme.colors.white};
   transition: all 250ms ease;
   box-shadow: 0px 3px 1px -2px rgba(82, 163, 122, 0.2),
      0px 2px 2px 0px rgba(82, 163, 122, 0.14),
      0px 1px 5px 0px rgba(82, 163, 122, 0.12);

   &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
      box-shadow: 0px 2px 4px -1px rgba(82, 163, 122, 0.2),
         0px 4px 5px 0px rgba(82, 163, 122, 0.14),
         0px 1px 10px 0px rgba(82, 163, 122, 0.12);
   };

   ${() =>
      active &&
      css`
      background-color: ${props => props.theme.colors.primaryActive};
      transition: all 100ms ease;
      box-shadow: 0px 1px 1px -2px rgba(82, 163, 122, 0.2),
         0px 2px 2px 0px rgba(82, 163, 122, 0.14),
         0px 1px 1px 0px rgba(82, 163, 122, 0.12);
   `}

   &:disabled {
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.colors.grayLight};
      box-shadow: none;
   };

`
export const OutlineButton = (active?:boolean)=> css`
   background-color: transparent;
   color: ${({ theme }) => theme.colors.primary};
   transition: all 250ms ease;
   border: 1px solid ${({ theme }) => theme.colors.grayMediumLight};

   &:hover {
      background-color: ${({ theme }) => rgba(theme.colors.primary, .16)};
      color: ${({ theme }) => theme.colors.primaryHover};
      border-color: ${({ theme }) => theme.colors.primaryHover};
   };

   ${() =>
      active &&
      css`
      background-color: ${props => rgba(props.theme.colors.primary, .16)};
      transition: all 100ms ease;

      color: ${({ theme }) => theme.colors.primaryActive};
      border-color:${({ theme }) => theme.colors.primaryActive};

   `}

   &:disabled {
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.colors.grayLight};
      box-shadow: none;
   };
`

export const TextButton = (active?:boolean)=> css`
   background-color: transparent;
   color: ${({ theme }) => theme.colors.primary};
   transition: all 250ms ease;

   &:hover {
      background-color: ${({ theme }) => rgba(theme.colors.grayLight, 0.4)};
      color: ${({ theme }) => theme.colors.primaryHover};
   };

   ${() =>
      active &&
      css`
      background-color: ${({ theme }) => theme.colors.grayLight};
      color: ${({ theme }) => theme.colors.primaryActive};
      transition: all 100ms ease;
   `}

   &:disabled {
      cursor: not-allowed;
      color: ${({ theme }) => theme.colors.grayLight};
      background-color: transparent;
   };
`

export const StyledButton = styled.button<ButtonProps>`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 42px;
   padding: 0 24px;
   min-width: 100px;
   border-radius: 22px;
   text-transform: uppercase;
   font-family: ${({ theme }) => theme.typography.fontFamily};
   font-weight: 500;
   font-size: 14px;
   letter-spacing: 1px;
   ${
   ({ variant, active }) => {
      switch (variant) {
         case "text":
            return TextButton(active)
         case 'outlined':
            return OutlineButton(active)
         default:
            return ContainedButton(active)
      }
   }
   };

   + button {
      margin-left: 10px;
   }
`;