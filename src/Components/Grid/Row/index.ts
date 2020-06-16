import styled, { css } from 'styled-components'

import { Col } from '../Col'

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

enum ContentOptions {
   'flex-start',
   'flex-end',
   'center',
   'stretch',
   'space-between',
   'space-around',
}
type Content = keyof typeof ContentOptions

interface RowProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
   noGutter?: boolean
   gutterSize?: number
   justify?: Justify
   items?: Items
   content?: Content
   size?: number
}

const createMargins = ({ noGutter = false, gutterSize = 30 }) => css`
   margin: ${noGutter ? '0' : `0 ${-Math.abs(gutterSize / 2)}px`};
`

const createPadding = ({ noGutter = false, gutterSize = 30 }) => css`
   padding: ${noGutter ? '0' : `0 ${gutterSize / 2}px`};
`

export const Row = styled.div<RowProps>`
   width: ${({ size }) => `${size}%` || '100%'};
   display: flex;
   flex-wrap: wrap;
   justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
   align-items: ${({ items }) => (items ? items : 'stretch')};
   align-content: ${({ content }) => (content ? content : 'stretch')};


   ${props => createMargins(props)}

   & ${Col} {
      ${props => createPadding(props)}
   }
`
