import styled from 'styled-components'
import * as Colors from '../../../Colors';

export interface AppProps {
   BgColor: keyof typeof Colors
}

export const BoxAppsStyle = styled.div`
   width: 90px;
   height: 60px;
   justify-content: center;
   display: flex;
   flex-direction: column;
   text-align: center;
   cursor: pointer;

   h1 {
      letter-spacing: 0;
      color: ${({ theme }) => theme.colors.grayMediumLight};
      font-size: 12px;
      margin-top: 8px;
      font-weight: 500;
   }
`

export const BoxIcon = styled.div<AppProps>`
   width: 40px;
   height: 40px;
   margin: auto;
   border-radius: 100%;
   background: ${({ BgColor }) => Colors[BgColor].gradient};
   display: flex;
   justify-content: center;
   align-items: center;

   em {
      color: ${({ theme }) => theme.colors.white};
      display: none;
   }

   &:hover {
      em {
         display: block;
      }
   }
`
