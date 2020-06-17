import React, { FunctionComponent, useState, useEffect } from 'react'
import { DashboardWrapper, ContentWrapper, Sticky } from './styles'
import { Nav } from './Components/Nav'
import Content from './Components/Content'
import { Sidebar } from './Components/Sidebar'
import { history } from '../../Store'
import { ScrollPretty } from '../../Components/ScrollPretty'

type Components = {
   top: React.ReactNode
   content: React.ReactNode
}

interface LayoutProps {
   components: Components
}

const Layout: FunctionComponent<LayoutProps> = ({ components }) => {
   const [open, setOpen] = useState(true)

   const resize = () => setOpen(window.innerWidth > 992)

   useEffect(() => {
      window.addEventListener('resize', resize)
      resize()
      history.listen(resize)
   }, [])

   return (
      <DashboardWrapper>
         <Sidebar open={open} />
         <ContentWrapper open={open}>
            <Nav
               open={open}
               setOpen={setOpen}
               breadcrumb={components.content}
            />

            <ScrollPretty>
               <Sticky>{components.top}</Sticky>
               <Content setOpen={resize}>{components.content}</Content>
            </ScrollPretty>
         </ContentWrapper>
      </DashboardWrapper>
   )
}

export default Layout
