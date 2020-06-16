import React from 'react'
import { Icon } from 'sensedia-ui-kit'
import { StyledBreadCrumb } from './styles'

const { Container, UL, LI, Link, LinkPage } = StyledBreadCrumb

const Breadcrumb: React.FunctionComponent = () => {
   return (
      <Container>
         <UL>
            <LinkPage>
               {' '}
               <em className="fas fa-apple-alt fa-2x" />&nbsp;&nbsp;Rótulos
            </LinkPage>
            <LI>
               {' '}
               <Icon name="arrow" />{' '}
            </LI>
            <Link >Rótulo Overview</Link>
         </UL>
      </Container>
   )
}

export default Breadcrumb
