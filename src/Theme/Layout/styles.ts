import styled, { css } from 'styled-components'

interface Translate extends React.HtmlHTMLAttributes<HTMLDivElement> {
   open: boolean
}

interface StickyProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
   display?: string
}

export const DashboardWrapper = styled.div`
   height: 100vh;
   background: ${({ theme }) => theme.colors.gradient};
   display: flex;
`

export const ContentWrapper = styled.div<Translate>`
   width: ${({ open }) => (open ? css`calc(100% - 230px)` : '100%')};
   height: 100%;
   background-color: ${({ theme }) => theme.colors.layerBase};
   overflow: hidden;
   float: left;
   left: ${({ open }) => (open ? '230px' : '0px')};
   position: relative;
   transition: all 0.5s ease-in-out;
   display: flex;
   flex-direction: column;
   ${({ open }) =>
      open &&
      css`
         border-radius: 30px 0 0 0px;
      `}

   @media (max-width: 991px) {
      width: 100%;
      left: 0px;
      ${({ open }) =>
      open &&
      css`
         transform: translate(230px, 0);
      `}
   }
`

export const Sticky = styled.div<StickyProps>`
   width: 100%;
   max-width: 1600px;
   padding: 30px 40px;
   margin: 0 auto;
   background-color: ${({ theme }) => theme.colors.layerBase};
   position: sticky;
   top: 0px;
   z-index: ${({ theme }) => theme.zIndex.sticky};

   @media (max-height: 670px) {
      padding-bottom: 20px;
   }

   @media (max-height: 600px) {
      position: relative;
   }
`
