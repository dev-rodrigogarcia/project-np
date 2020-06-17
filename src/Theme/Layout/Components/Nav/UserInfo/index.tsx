import React, { FunctionComponent } from 'react'
import { UserModal } from '../../UserModal'
import userImg from '../../../../../assets/img/user-default.png'

const imgUser: string =
   'https://lh3.googleusercontent.com/-v_rGa3lR9BQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclqmSFMH9yszZCXTm9lwyEDFLvwBg.CMID/s83-c/photo.jpg'

const ModalUser: FunctionComponent = () => {
   return (
      <UserModal
         userProps={{
            userName: 'Rodrigo Garcia dos Santos',
            userPhoto: userImg || imgUser,
            userLevel: 'rodrigo.gsantos93@gmail.com',
            userEmail: '',
         }}
         editAccountLabel="Edit Account"
         logoutLabel="Logout"
         editAccount={() => {
            return ''
         }}
         logout={() => {
            return ''
         }}
      />
   )
}

export { ModalUser }
