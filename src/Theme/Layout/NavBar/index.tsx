import React, { FunctionComponent } from 'react'
import { Container, Nav, First, Second, Separator } from './styles'

const NavFirst: FunctionComponent = ({ children }) => <First>{children}</First>

const NavSecond: FunctionComponent = ({ children }) => (
   <Second>{children}</Second>
)

const NavBar: React.FunctionComponent = ({ children }) => {
   return (
      <Nav>
         <Container>{children}</Container>
      </Nav>
   )
}

export { NavBar, NavFirst, NavSecond, Separator }
