import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const Logo = styled.img`
  margin: 10px 0;
`
export const Form = styled.form`
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
export const Input = styled.input`
  background: none;
  color: #fff;
  font-size: 16px;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 1px;
`
export const Button = styled.button`
  background: var(--primary);
  border: none;
  border-radius: 4px;
  color: var(--text);
  padding: 13px 20px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 16px;
  background: rgb(230, 114, 75);
  cursor: pointer;
  background: -moz-linear-gradient(
    90deg,
    rgba(230, 114, 75, 1) 0%,
    rgba(254, 156, 123, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(230, 114, 75, 1) 0%,
    rgba(254, 156, 123, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(230, 114, 75, 1) 0%,
    rgba(254, 156, 123, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#e6724b",endColorstr="#fe9c7b",GradientType=1);
`
export const ListItems = styled.div``
