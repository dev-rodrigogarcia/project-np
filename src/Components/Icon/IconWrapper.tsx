import styled from 'styled-components'

export const IconWrapper = styled.div`
   height: 80px;

   & svg {
      height: 100%;
      width: auto;
   }
`

export const IconGallery = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
   grid-gap: 10px;

   & .gallerycell {
      display: flex;
      padding: 10px;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #d6d6d6;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);

      & svg {
         height: 32px;
         width: auto;
         fill: #989898;
         margin-bottom: 12px;
      }

      & p {
         font-family: sans-serif;
         color: #3d3d3d;
         font-weight: bold;
         font-size: 14px;
         margin: 0;
      }
   }
`
