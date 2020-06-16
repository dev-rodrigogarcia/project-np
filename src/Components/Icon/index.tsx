import React from 'react'

import Glyph from './Glyph'

export enum NameOptions {
   add,
   analytics,
   apps,
   arrow,
   auth,
   canary,
   calendar,
   'card-view',
   clock,
   delete,
   edit,
   'events-hub',
   graph,
   healthy,
   help,
   'list-view',
   mesh,
   metrics,
   platform,
   pod,
   policy,
   refresh,
   release,
   remove,
   rest,
   service,
   shadow,
   sidebar,
   sources,
   trace,
   traffic,
   unhealthy,
   fullscreen,
   topology,
   'zoom-in',
   'zoom-out',
   'more',
   'center-view',
   user,
   notifications,
   warn,
   alerts,
   'alerts-cfg',
   info,
   filter,
   'legend',
   'topology-1',
   'topology-2',
   'chevron-left',
   'chevron-right',
   'chevron-top',
   'chevron-bottom',
   'send'
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
