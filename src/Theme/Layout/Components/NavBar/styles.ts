import styled from 'styled-components'

export const Nav = styled.nav`
      height: 66px;
      background-color: ${({ theme }) => theme.colors.layerBase};
      position: sticky;
      top: 0;
      padding: 10px 40px;
      z-index: ${({ theme }) => theme.zIndex.fixed};
      flex-shrink: 0;
      box-shadow: 1px 1px 5px ${({ theme }) => theme.colors.grayLight};
   `

export const Container = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
   `

export const First = styled.div`
      width: auto;
      height: auto;
      display: flex;
      justify-content: start;
      align-items: center;

      button {
         margin-right: 10px;
      }
   `

export const Second = styled.div`
      width: auto;
      height: auto;
      display: flex;
      justify-content: end;
      align-items: center;

      & button:first-child {
         margin-right: 10px;
      }
   `

export const Separator = styled.div`
      float: left;
      padding: 0 10px;
      border-left: 2px ${({ theme }) => theme.colors.grayLight} solid;
      height: 46px;
      margin: 0 0 0 20px;
   `

