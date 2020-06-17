import React from 'react'

import Glyph from './Glyph'

export enum NameOptions {
   'apps',
   'books',
   'auth',
   'cog',
   'edit',
   'help',
   'info',
   'list',
   'paper',
   'sidebar',
   'user',
}

export type Name = keyof typeof NameOptions

export interface IconProps {
   /**
    Define the icon svg file to be rendered.
    */
   name: Name
}

const Icon = ({ name }: IconProps) => {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
         <Glyph name={name} />
      </svg>
   )
}

export { Icon }
