import React, { FunctionComponent } from 'react'
import { BoxApps, ModalApps as Modal } from 'sensedia-ui-kit'

const ModalApps: FunctionComponent = () => {
   return (
      <Modal icon="apps" variant="gray">
         <BoxApps bgColor="API_PLATFORM" icon="platform" name="API Platform" />
         <BoxApps bgColor="SERVICE_MESH" icon="mesh" name="Service Mesh" />
         <BoxApps bgColor="EVENTS_HUB" icon="add" name="Events Hub" />
      </Modal>
   )
}

export { ModalApps, BoxApps }
