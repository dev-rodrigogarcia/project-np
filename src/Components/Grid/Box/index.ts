import styled from 'styled-components'

enum JustifyOptions {
   'flex-start',
   'flex-end',
   'center',
   'space-around',
   'space-between',
}
type Justify = keyof typeof JustifyOptions

enum ItemsOptions {
   'flex-start',
   'flex-end',
   'center',
   'stretch',
   'baseline',
}
type Items = keyof typeof ItemsOptions

enum DirectionOptions {
   'column',
   'row',
}

type Directions = keyof typeof DirectionOptions

enum WrapOptions {
   'wrap',
   'nowrap',
}

type Wrap = keyof typeof WrapOptions

export interface BoxProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
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
   justify?: Justify
   items?: Items
   wrap?: Wrap
   noMediaScreen?: boolean
   direction?: Directions
}

export const Box = styled.div<BoxProps>`
    display:flex;
    justify-content: ${({ justify }) => justify || 'flex-start'};
    align-items: ${({ items }) => items || 'center'};  
    flex-direction: ${({ direction }) => direction || 'row'};
    flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
    ${p => p.m && `margin: ${p.m}px;`}
    ${p => p.ml && `margin-left: ${p.ml}px;`}
    ${p => p.mr && `margin-right: ${p.mr}px;`}
    ${p => p.mb && `margin-bottom: ${p.mb}px;`}
    ${p => p.mt && `margin-top: ${p.mt}px;`}

    ${p => p.p && `padding: ${p.p}px !important;`}
    ${p => p.pl && `padding-left: ${p.pl}px !important;`}
    ${p => p.pr && `padding-right: ${p.pr}px !important;`}
    ${p => p.pb && `padding-bottom: ${p.pb}px !important;`}
    ${p => p.pt && `padding-top: ${p.pt}px !important;`}

    @media only screen and (max-width: 768px) {
      justify-content: ${({ noMediaScreen }) =>
      noMediaScreen ? '' : 'center'};
    }
`
