import React, { FunctionComponent } from 'react'
import { NavBar, NavFirst, NavSecond, Separator } from '../NavBar'
import { IconButton } from '../../../Components/IconButton'
import { ModalUser } from './UserInfo'
import { HelpModal } from './Help'

interface SidebarProps {
   open: boolean
   setOpen: (Show: boolean) => void
   breadcrumb: React.ReactNode
}

const Nav: FunctionComponent<SidebarProps> = ({ open, setOpen }) => {
   return (
      <NavBar>
         <NavFirst>
            <IconButton
               onClick={() => setOpen(!open)}
               icon="sidebar"
               variant="gray"
            />
         </NavFirst>
         <NavSecond>
            <HelpModal />
            <Separator />
            <ModalUser />
         </NavSecond>
      </NavBar>
   )
}

export { Nav }
