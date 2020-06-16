import styled, { css } from 'styled-components'

const hoverOption = () =>
   css`
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primaryHover};
   `

const activeOption = () =>
   css`
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primaryActive};
   `

export interface OptionProps {
   hover?: boolean
   active?: boolean
}

export const Option = styled.a<OptionProps>`
   color: ${({ theme }) => theme.colors.grayDark};
   ${({ hover }) => hover && hoverOption()}
   ${({ active }) => active && activeOption()}
   padding: 12px 16px;
   text-decoration: none;
   display: flex;
   align-items: center;
   overflow:hidden;
   width:100%;
   cursor: pointer;
   word-break: break-word;
   &:hover {
      ${hoverOption()}
   }

   & img {
      width: 26px;
      height: 26px;
      border-radius: 26px;
      margin-right: 6px;
   }
`
