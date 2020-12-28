import React from 'react'

import { Container, Name, Delete } from './styles'

import { Cupons } from '../../App'

interface Props {
  cupom: Cupons
  handleDelete: (id: string) => {}
}

const Item: React.FC<Props> = ({ cupom, handleDelete }: Props) => {
  return (
    <Container>
      <Name>{cupom.cupom}</Name>
      <Delete onClick={() => handleDelete(cupom._id)}>Excluir</Delete>
    </Container>
  )
}

export default Item
