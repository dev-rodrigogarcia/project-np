import styled from 'styled-components'
import { Box } from '../../../Components/Grid'
import { Option } from '../../../Components/Option'

export const ContainerApps = styled(Box)`
   flex-direction: column;
`

export const HelpOption = styled(Option)`
   width: 100%;

   &:first-child {
      border-radius: 9px 9px 0 0;
   }

   &:last-child {
      border-radius: 0 0 9px 9px;
   }
`
