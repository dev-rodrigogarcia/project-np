import React, { FunctionComponent } from 'react'
import { HelpOption, HelpModal as Modal } from '../../ModalHelp'

const HelpModal: FunctionComponent = () => (
   <Modal icon="help" variant="gray">
      <HelpOption>Link 01</HelpOption>
      <HelpOption>Link 02</HelpOption>
      <HelpOption>Link 03</HelpOption>
   </Modal>
)

export { HelpModal }
