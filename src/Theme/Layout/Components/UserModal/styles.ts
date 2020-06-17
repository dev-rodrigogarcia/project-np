import styled from 'styled-components'
import { Box } from '../../../../Components/Grid'

export const UserImg = styled.img`
   width: 40px;
   border-radius: 50%;
`

export const UserName = styled.p`
   font-weight: 600;
   color: ${({ theme }) => theme.colors.grayMedium};
   font-size: 14px;
   margin-left: 10px;
`

export const ContainerInformation = styled(Box)`
   flex-wrap: wrap;
`

export const Avatar = styled(Box)`
   img {
      width: 83px;
      height: auto;
   }
`

export const Information = styled(Box)`
   flex-direction: column;
   letter-spacing: 0;

   h1 {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.grayDark};
      font-weight: 500;
   }

   h2 {
      color: ${({ theme }) => theme.colors.grayMedium};
      font-size: 14px;
      font-weight: 400;
   }

   p {
      color: ${({ theme }) => theme.colors.grayMediumLight};
      font-size: 12px;
      margin-top: 12px;
   }
`
