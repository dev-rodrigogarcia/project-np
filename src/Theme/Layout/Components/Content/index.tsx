import React from 'react'
import { ContentContainer } from './styles'

interface ContentProps {
   setOpen: () => void
}

const Content: React.FunctionComponent<ContentProps> = ({
   setOpen,
   children,
}) => {
   return (
      <ContentContainer onClick={() => setOpen()}>{children}</ContentContainer>
   )
}

export default Content
