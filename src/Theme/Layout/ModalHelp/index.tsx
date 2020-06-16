import React, { FunctionComponent } from 'react'
import { ContainerApps } from './styles'
import { Modal } from '../../../Components/Modal'
import { IconButton } from '../../../Components/IconButton'
import { Content } from '../../types'

const renderModal = (content: Content) => (
   <ContainerApps justify="space-between">{content}</ContainerApps>
)

interface HelpButtonProps {
   icon: string
   variant: string
}
const HelpModal: FunctionComponent<HelpButtonProps> = ({ children }) => (
   <Modal
      content={renderModal(children as Content)}
      trigger="click"
      placement="bottom-end"
      animation="scale"
      interactive
   >
      <IconButton
         style={{ marginRight: '0px' }}
         icon="help"
         variant="gray"
         data-testid="help-button"
      />
   </Modal>
)

export { HelpModal }
export * from './styles'
