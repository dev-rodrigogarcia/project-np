import React from 'react'
import { Route } from 'react-router'
import Layout from '../Theme/Layout'

const PrivateRoute = ({ components: Components, ...rest }: any) => (
   <Route
      {...rest}
      render={props => (
         <Layout
            components={{
               // eslint-disable-next-line react/jsx-pascal-case
               top: <Components.top {...props} />,
               // eslint-disable-next-line react/jsx-pascal-case
               content: <Components.content {...props} />,
            }}
         />
      )}
   />
)
export { PrivateRoute }
