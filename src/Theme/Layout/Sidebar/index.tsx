import React, { FunctionComponent } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
   Sidebar as SidebarComponent,
   LinkItem,
   ListLinks,
   Divider,
} from '../../../Components/Sidebar'
import logo from '../../../assets/img/logo-nutri-pro.png'

interface SidebarProps {
   open: boolean
}

const Sidebar: FunctionComponent<SidebarProps> = ({ open }) => (
   <SidebarComponent open={open} logo={logo} component={Link as any}>
      <ListLinks>
         <LinkItem
            to="/mesh1"
            icon="fa-chart-pie"
            text="Dashboard"
            component={NavLink as any}
         />
         <LinkItem
            to="/mesh2"
            icon="fa-tags"
            text="Rótulos"
            component={NavLink as any}
         />
         <LinkItem
            to="/mesh3"
            icon="fa-hands-helping"
            text="Clientes"
            component={NavLink as any}
         />
         <LinkItem
            to="/mesh4"
            icon="fa-folder-open"
            text="Base de dados"
            component={NavLink as any}
         />

         <Divider />

         <LinkItem
            to="/mesh5"
            icon="fa-palette"
            text="Configurar Tema"
            component={NavLink as any}
         />
         <LinkItem
            to="/mesh6"
            icon="fa-question-circle"
            text="Dúvidas"
            component={NavLink as any}
         />
         <LinkItem
            to="/mesh7"
            icon="fa-user-shield"
            text="Segurança"
            component={NavLink as any}
         />
      </ListLinks>
   </SidebarComponent>
)

export { Sidebar }
