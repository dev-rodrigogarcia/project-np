import { BrowserRouter, Switch, Router } from 'react-router-dom'
import React from 'react'
import View2 from '../Views/View2/view2.container'
import { PrivateRoute } from '../Guard/PrivateRoute'
import { history } from '../Store'

const routes = [
   {
      path: '/',
      exact: true,
      components: {
         top: View2,
         content: View2,
      },
   },
   {
      path: '/mesh1',
      components: {
         top: View2,
         content: View2,
      },
   },
   {
      path: '/mesh2',
      components: {
         top: View2,
         content: View2,
      },
   },
   {
      path: '/mesh3',
      components: {
         top: View2,
         content: View2,
      },
   },
   {
      path: '/mesh4',
      components: {
         top: View2,
         content: View2,
      },
   },
   {
      path: '/mesh5',
      components: {
         top: View2,
         content: View2,
      },
   },
   {
      path: '/mesh6',
      components: {
         top: View2,
         content: View2,
      },
   },
   {
      path: '/mesh7',
      components: {
         top: View2,
         content: View2,
      },
   },
   {
      path: '/mesh8',
      components: {
         top: View2,
         content: View2,
      },
   },
]

export default function Routes() {
   return (
      <BrowserRouter>
         <Switch>
            <Router history={history}>
               {routes.map(route => (
                  <PrivateRoute key={JSON.stringify(route)} {...route} />
               ))}
            </Router>
         </Switch>
      </BrowserRouter>
   )
}
