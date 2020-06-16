import styled, { css } from 'styled-components'

interface ColProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
   p?: number
   pl?: number
   pr?: number
   pb?: number
   pt?: number

   m?: number
   ml?: number
   mr?: number
   mb?: number
   mt?: number

   xs?: number
   sm?: number
   md?: number
   lg?: number
   xl?: number
}

const makeColumns = (size = 12) => css`
   max-width: ${100 / (12 / size) + '%'};
   flex: 0 0 ${100 / (12 / size) + '%'};
`

export const Col = styled.div<ColProps>`
  flex-basis: 0;
  flex-grow: 1;
  width: 100%;
  min-height: 1px;
  box-sizing: border-box;
  
  ${p => p.m && `margin: ${p.m}px`}
  ${p => p.ml && `margin-left: ${p.ml}px`}
  ${p => p.mr && `margin-right: ${p.mr}px`}
  ${p => p.mb && `margin-bottom: ${p.mb}px`}
  ${p => p.mt && `margin-top: ${p.mt}px`}


  ${p => p.p && `padding: ${p.p}px !important;`}
  ${p => p.pl && `padding-left: ${p.pl}px !important;`}
  ${p => p.pr && `padding-right: ${p.pr}px !important;`}
  ${p => p.pb && `padding-bottom: ${p.pb}px !important;`}
  ${p => p.pt && `padding-top: ${p.pt}px !important;`}

  ${({ xs }) => makeColumns(xs)}

  @media only screen and (min-width : 576px) {
    ${({ sm }) => sm && makeColumns(sm)}
  }

  @media only screen and (min-width: 768px) {
    ${({ md }) => md && makeColumns(md)}
  }

  @media only screen and (min-width: 992px) {
    ${({ lg }) => lg && makeColumns(lg)}
  }

  @media only screen and (min-width: 1200px) {
    ${({ xl }) => xl && makeColumns(xl)}
  }
`
