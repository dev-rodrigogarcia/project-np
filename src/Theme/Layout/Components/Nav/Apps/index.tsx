import React, { FunctionComponent } from 'react'
import usePubSub from 'pubsub-js'
import { BoxApps, ModalApps as Modal } from '../../ModalApps'
import { Row, Col } from '../../../../../Components/Grid'
import * as Colors from '../../../../Colors'

const ModalApps: FunctionComponent = () => {
   type colors = keyof typeof Colors

   const changeTheme = (color: colors) => {
      usePubSub.publish('ChangeTheme', Colors[color])
   }

   return (
      <Modal icon="apps" variant="gray">
         <Row size={100}>
            <Col xs={4} sm={4} md={4} lg={4}>
               <BoxApps
                  name="CoolBlue"
                  onClick={() => changeTheme('CoolBlue')}
               />
            </Col>

            <Col xs={4} sm={4} md={4} lg={4}>
               <BoxApps
                  name="RoyalBlue"
                  onClick={() => changeTheme('RoyalBlue')}
               />
            </Col>

            <Col xs={4} sm={4} md={4} lg={4}>
               <BoxApps
                  name="DarkBlue"
                  onClick={() => changeTheme('DarkBlue')}
               />
            </Col>
         </Row>

         <Row size={100}>
            <Col xs={4} sm={4} md={4} lg={4}>
               <BoxApps name="Green" onClick={() => changeTheme('Green')} />
            </Col>

            <Col xs={4} sm={4} md={4} lg={4}>
               <BoxApps
                  name="GradeGray"
                  onClick={() => changeTheme('GradeGray')}
               />
            </Col>

            <Col xs={4} sm={4} md={4} lg={4}>
               <BoxApps name="Dark" onClick={() => changeTheme('Dark')} />
            </Col>
         </Row>

         <Row size={100}>
            <Col xs={4} sm={4} md={4} lg={4}>
               <BoxApps
                  name="PiggyPink"
                  onClick={() => changeTheme('PiggyPink')}
               />
            </Col>

            <Col xs={4} sm={4} md={4} lg={4}>
               <BoxApps name="Pink" onClick={() => changeTheme('Pink')} />
            </Col>

            <Col xs={4} sm={4} md={4} lg={4}>
               <BoxApps name="Purple" onClick={() => changeTheme('Purple')} />
            </Col>
         </Row>
      </Modal>
   )
}

export { ModalApps, BoxApps }
