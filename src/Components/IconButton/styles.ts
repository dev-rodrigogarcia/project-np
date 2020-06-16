import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { SizeVariant } from '../../types'

export const StyledIconButton = styled.button<{ size: SizeVariant, active?: boolean }>`
   display: flex;
   align-items: center;
   justify-content: center;
   height: ${({ size }) => (size === 'lg' ? '42px' : '25px')};
   width: ${({ size }) => (size === 'lg' ? '42px' : '25px')};
   border-radius: 19px;
   background-color: transparent;
   color: ${({ theme }) => theme.colors.primary};
   transition: all 250ms ease;
   margin: 0 5px;

   svg {
      height: ${({ size }) => (size === 'lg' ? '22px' : '18px')};
      width: ${({ size }) => (size === 'lg' ? '22px' : '18px')};
      margin: ${({ size }) => (size === 'lg' ? '10px' : '0px')};
      fill: ${({ theme }) => theme.colors.primary};
      transition: all 250ms ease;
   }

   &:hover {
      background-color: ${({ theme }) => rgba(theme.colors.grayLight, 0.4)};
      svg {
         fill: ${({ theme }) => theme.colors.primaryHover};
      }
   }

  svg {
    height: ${({ size }) => (size === "lg" ? "22px" : "18px")};
    width: ${({ size }) => (size === "lg" ? "22px" : "18px")};
    margin: ${({ size }) => (size === "lg" ? "10px" : "0px")};
    fill: ${({ theme }) => theme.colors.primary};
    transition: all 250ms ease;
  }

  &:hover {
    background-color: ${({ theme }) => rgba(theme.colors.grayLight, 0.4)};
    svg {
      fill: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.grayLight};

      svg {
        fill: ${({ theme }) => theme.colors.primaryActive};
      }
    `}

  &.gray-button {
    svg {
      fill: ${({ theme }) => theme.colors.grayMedium};
    }

    &:active {
      svg {
        fill: ${({ theme }) => theme.colors.grayDark};
      }
    }
  }

  &.gray-button:disabled,
  &.color-button:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.grayLight};
    svg {
      fill: ${({ theme }) => theme.colors.grayLight};
    }
    background-color: transparent;
  }
`;
