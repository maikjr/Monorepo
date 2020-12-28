import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--sections);
  padding: 10px 20px;
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 15px;
`

export const Name = styled.span`
  flex: 1;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 1px;
  color: #8b8c8f;
`
export const Delete = styled.button`
  color: rgb(214, 56, 3);
  border-radius: 4px;
  padding: 5px 15px;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  background: none;
  border: 1px solid rgb(214, 56, 3);
  cursor: pointer;
`
