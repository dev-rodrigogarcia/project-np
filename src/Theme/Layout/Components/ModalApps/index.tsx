import React, { FunctionComponent } from 'react'
import { Icon } from '../../../../Components/Icon'
import { IconButton } from '../../../../Components/IconButton'
import { Modal } from '../../../../Components/Modal'
import { BoxIcon, BoxAppsStyle } from './styles'
import { Content } from '../../../types'
import { Box } from '../../../../Components/Grid'
import * as Colors from '../../../Colors'

interface ButtonApps {
   icon: string
   variant: string
}

const renderModal = (content: Content): Content => (
   <Box p={20} justify="space-between" wrap="wrap">
      {content}
   </Box>
)

interface BoxAppsProps {
   name: keyof typeof Colors
   onClick?: () => void
}

const BoxApps: FunctionComponent<BoxAppsProps> = ({ name, onClick }) => {
   return (
      <BoxAppsStyle onClick={onClick}>
         <BoxIcon BgColor={name}>
            <em className="fas fa-paint-brush" />
         </BoxIcon>
      </BoxAppsStyle>
   )
}

const ModalApps: FunctionComponent<ButtonApps> = ({ children }) => {
   return (
      <Modal
         content={renderModal(children as Content)}
         trigger="click"
         placement="bottom-end"
         animation="scale"
         interactive
      >
         <IconButton icon="cog" variant="gray" data-testid="button-apps" />
      </Modal>
   )
}

export { ModalApps, BoxApps }
