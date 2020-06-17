import React, { FunctionComponent } from 'react'
import { Modal } from '../../../../Components/Modal'
import { Box } from '../../../../Components/Grid'

import { UserImg, ContainerInformation, Avatar, Information } from './styles'
import { HelpOption } from '../ModalHelp'
import { Divider } from '../../../../Components/Sidebar/styles'

interface UserProps {
   userPhoto: string
   userName: string
   userLevel: string
   userEmail: string
}

interface UserInfoProps {
   userProps: UserProps
   editAccount: () => void
   logout: () => void
   editAccountLabel: string
   logoutLabel: string
}

const renderModal = ({ userProps }: UserInfoProps) => {
   return (
      <ContainerInformation direction="column" style={{ minWidth: '300px' }}>
         <Box p={16}>
            <Avatar justify="center" items="flex-end">
               <UserImg src={userProps.userPhoto} />
            </Avatar>
         </Box>

         <Box>
            <Information items="flex-start">
               <h1>{userProps.userName}</h1>
               <h2>{userProps.userLevel}</h2>
               <p>{userProps.userEmail}</p>
            </Information>
         </Box>

         <Divider />

         <HelpOption>
            <em className="fas fa-user-edit" />
            &nbsp; Alterar Cadastro
         </HelpOption>
         <HelpOption>
            <em className="fas fa-key" />
            &nbsp; Alterar Senha
         </HelpOption>
         <HelpOption>
            <em className="fas fa-id-card" />
            &nbsp; Planos
         </HelpOption>

         <Divider />

         <HelpOption>
            <em className="fas fa-sign-out-alt" />
            &nbsp; Sair
         </HelpOption>
      </ContainerInformation>
   )
}

/**
 * Layout Component to show information's user
 */
const UserModal: FunctionComponent<UserInfoProps> = props => {
   const { userProps } = props
   return (
      <Modal
         content={renderModal(props)}
         trigger="click"
         placement="bottom"
         animation="scale"
         interactive
      >
         <UserImg style={{ cursor: 'pointer' }} src={userProps.userPhoto} />
      </Modal>
   )
}

export { UserModal }
