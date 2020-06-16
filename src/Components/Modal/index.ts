import styled from 'styled-components'
import Tippy from '@tippy.js/react'

export const Modal = styled(Tippy)`
   border-radius: 12px;
   border: 1px solid ${({ theme }) => theme.colors.primary};
   box-shadow: 0px 4px 16px ${({ theme }) => theme.colors.grayLight};
   display: flex;
   height: auto;
   width: auto;
   margin: 10px;
   background-color: ${({ theme }) => theme.colors.white};
   color: ${({ theme }) => theme.colors.grayMedium};
`
