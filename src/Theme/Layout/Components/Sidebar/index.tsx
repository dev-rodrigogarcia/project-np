import React, { FunctionComponent } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
   Sidebar as SidebarComponent,
   LinkItem,
   ListLinks,
   Divider,
} from '../../../../Components/Sidebar'
import logo from '../../../../assets/img/logo-nutri-pro.png'

interface SidebarProps {
   open: boolean
}

const Sidebar: FunctionComponent<SidebarProps> = ({ open }) => (
   <SidebarComponent open={open} logo={logo} component={Link as any}>
      <ListLinks>
         <LinkItem
            to="/mesh1"
            icon="apps"
            text="Dashboard"
            component={NavLink as any}
         />
         <LinkItem
            to="/mesh2"
            icon="paper"
            text="Rótulos"
            component={NavLink as any}
         />
         <LinkItem
            to="/mesh3"
            icon="user"
            text="Clientes"
            component={NavLink as any}
         />
         <LinkItem
            to="/mesh4"
            icon="books"
            text="Base de Alimentos"
            component={NavLink as any}
         />

         <Divider />

         <LinkItem
            to="/mesh6"
            icon="help"
            text="Dúvidas"
            component={NavLink as any}
         />

         <LinkItem
            to="/mesh7"
            icon="auth"
            text="Auditoria"
            component={NavLink as any}
         />
      </ListLinks>
   </SidebarComponent>
)

export { Sidebar }
