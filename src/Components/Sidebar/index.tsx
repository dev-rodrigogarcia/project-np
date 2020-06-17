import React, { FunctionComponent } from 'react'
import { ContainerSidebar, Logo, LinkItemStyle, Text } from './styles'
import { Name, Icon } from '../Icon'

interface SidebarProps {
   open: boolean
   logo: string
   /**
    * Link React Router Dom
    */
   component: FunctionComponent<any>
}

interface LinkItemProps {
   to: string
   icon: Name
   text: string
   /*
    * NavLink React Router Dom
    */
   component: FunctionComponent<any>
}

const LinkItem: React.FunctionComponent<LinkItemProps> = ({
   to,
   icon,
   text,
   component: Component,
}) => {
   return (
      <LinkItemStyle>
         <Component to={to} activeClassName="active" data-testid={to}>
            <Text>
               <Icon name={icon} />
               {text}
            </Text>
         </Component>
      </LinkItemStyle>
   )
}

const Sidebar: React.FunctionComponent<SidebarProps> = ({
   open,
   children,
   logo,
   component: Component,
}) => {
   return (
      <ContainerSidebar open={open}>
         <Logo>
            <Component to="/">
               <img src={logo} alt="logo" />
            </Component>
         </Logo>
         {children}
      </ContainerSidebar>
   )
}

export { Sidebar, LinkItem }
export * from './styles'
