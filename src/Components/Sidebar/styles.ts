import styled, { css, keyframes } from 'styled-components'
import linkBefore from '../../assets/img/link-radius-top.svg'
import { scrollBar } from '../../Theme/scrollBar/scrollBar'

interface Sidebar extends React.HtmlHTMLAttributes<HTMLDivElement> {
   open: boolean
}

const rotateBefore = keyframes`
   from {
      width: 0px;
      height: 0px;
      margin-top: 0px;
   }

   to {
      width: 25px;
      height: 25px;
      margin-top: -25px;
   }
`

const rotateAfter = keyframes`
   from {
      width: 0px;
      height: 0px;
      margin-bottom: 0px;
   }

   to {
      width: 25px;
      height: 25px;
      margin-bottom: -25px;
   }
`

export const ContainerSidebar = styled.div<Sidebar>`
   position: fixed;
   width: 220px;
   margin-left: ${({ open }) => (!open ? '-220px' : '0')};
   height: 100%;
   background: ${({ theme }) => theme.colors.gradient};
   transition: all 0.5s ease-in-out;
   overflow: auto;
   overflow-x: hidden;

   ::-webkit-scrollbar {
      width: 0px;
   }

   ::-webkit-scrollbar-track {
      border-radius: 5px;
   }

   ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.layerBase};
      border-radius: 6px;
   }

   ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.grayMedium};
   }

   @media (max-width: 991px) {
      width: 220px;
      margin-left: -220px;
      ${({ open }) => open &&
      css`
            transform: translate(220px, 0);
         `}
   }
`

export const Logo = styled.div`
   display: flex;
   width: 220px;
   align-items: center;
   justify-content: center;
   height: 100px;
   margin: 40px 0;

   & a img {
      height: auto;
      width: 200px;
      cursor: pointer;
   }
`

export const ListLinks = styled.ul`
   padding-left: 20px;
   list-style-type: none;
`

export const Text = styled.span`
   margin-left: 25px;
   display: flex;
   align-items: center;

   em {
      font-size: 18px;
   }
`

export const LinkItemStyle = styled.li`
   padding-top: 4px;
   a {
      display: flex;
      align-items: center;
      justify-content: start;
      margin: 0;
      padding: 15px 0 15px 0;
      color: ${({ theme }) => theme.colors.white};
      line-height: 1.2;
      font-weight: 900;
      font-size: 14px;
      transition: all 0.2s ease-in-out;
      letter-spacing: 1px;
      position: relative;

      &:hover {
         background-color: rgba(255, 255, 255, 0.35);
         color: ${({ theme }) => theme.colors.grayDark};
         text-decoration: none;
         border-radius: 30px 0 0 30px;
      }

      &.active {
         background: ${({ theme }) => theme.colors.layerBase};
         color: ${({ theme }) => theme.colors.grayDark};
         text-decoration: none;
         border-radius: 30px 0 0 30px;
         width: 210px;

         em {
            color: ${({ theme }) => theme.colors.primary};
         }

         &:before {
            content: '';
            width: 25px;
            height: 25px;
            margin-top: -25px;
            transform: rotate(90deg) scale(1.04);
            background-size: 100%;
            background-image: url(${linkBefore});
            background-repeat: no-repeat;
            position: absolute;
            top: 0;
            right: 10px;
            animation: ${rotateBefore} 0.5s linear;
         }

         &:after {
            content: '';
            width: 25px;
            height: 25px;
            margin-bottom: -25px;
            transform: scale(1.04);
            background-size: 100%;
            background-image: url(${linkBefore});
            position: absolute;
            bottom: 0;
            right: 10px;
            animation: ${rotateAfter} 0.5s linear;
         }
      }
   }
`

export const Divider = styled.hr`
   width: 50%;
   margin: 15px auto 15px auto;
   opacity: 0.4;
`
