import React from 'react'
import { Route } from 'react-router'
import Layout from '../Theme/Layout'

const PrivateRoute = ({ components: Components, ...rest }: any) => (
   <Route
      {...rest}
      render={props => (
         <Layout
            components={{
               top: <Components.top {...props} />,
               content: <Components.content {...props} />,
            }}
         />
      )}
   />
)
export { PrivateRoute }
