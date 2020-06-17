import styled from 'styled-components'

export const StyledBreadCrumb = {
   Container: styled.div`
      display: flex;
      justify-content: space-around;
      align-items: center;
   `,
   UL: styled.ul`
      height: 32px;
      display: flex;
      align-items: center;
   `,
   LI: styled.li`
      list-style: none;
      width: 12px;
      svg {
         fill: ${({ theme }) => theme.colors.grayMediumLight};
      }
   `,
   Link: styled.a`
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 0;
      color: ${({ theme }) => theme.colors.grayMedium};
      margin-left: 10px;
      cursor: pointer;
      transition: all 250ms ease;
      &:hover {
         color: ${({ theme }) => theme.colors.secondary};
      }
   `,
   LinkPage: styled.a`
      display: flex;
      align-items: center;
      height: 42px;
      margin-right: 10px;
      background-color: transparent;
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.typography.fontFamily};
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 1px;
      color: ${({ theme }) => theme.colors.secondary};
      transition: all 250ms ease;
      cursor: pointer;

      svg {
         fill: ${({ theme }) => theme.colors.secondary};
         transition: all 250ms ease;
         height: 38px;
         width: 38px;
         margin-right: 6px;
         margin-left: -4px;
      }

      &:hover {
         background-color: transparent;
         color: ${({ theme }) => theme.colors.secondaryActive};

         svg {
            fill: ${({ theme }) => theme.colors.secondaryActive};
         }
      }

      &:active {
         transition: all 100ms ease;

         svg {
            fill: ${({ theme }) => theme.colors.secondary};
         }
      }
   `,
}
