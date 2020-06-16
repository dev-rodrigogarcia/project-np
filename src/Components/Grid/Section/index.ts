import styled from 'styled-components'

interface Section extends React.HtmlHTMLAttributes<HTMLDivElement> {
   padding?: number
}

export const Section = styled.div<Section>`
   width: 100%;
   padding: ${({ padding }) => (padding ? padding : '20')}px;
   display: flex;
   flex-direction: column;
   background-color: ${({ theme }) => theme.colors.white};
   color: ${({ theme }) => theme.colors.grayMedium};
   border: 1px solid ${({ theme }) => theme.colors.grayLight};
   border-radius: 6px;
   transition: all 250ms ease;
`
