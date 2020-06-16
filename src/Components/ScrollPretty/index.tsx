import styled from 'styled-components'

export const ScrollPretty = styled.div`
   overflow: scroll;
   padding-bottom: 10px;

   ::-webkit-scrollbar {
      width: 7px;
   }

   ::-webkit-scrollbar-track {
      border-radius: 5px;
   }

   ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.grayMediumLight};
      border-radius: 6px;
   }

   ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.grayMedium};
   }
`
