import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;
`

const opacitychange = keyframes`
  0%, 100%{
      opacity: 0;
  }
  60%{
      opacity: 1;
  }
`

export const Dot = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(--primary);
  margin: 35px 5px;
  opacity: 0;
  :nth-child(1) {
    animation: ${opacitychange} 1s ease-in-out infinite;
  }
  :nth-child(2) {
    animation: ${opacitychange} 1s ease-in-out 0.33s infinite;
  }
  :nth-child(3) {
    animation: ${opacitychange} 1s ease-in-out 0.66s infinite;
  }
`
