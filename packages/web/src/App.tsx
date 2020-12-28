import React, { useState, useEffect } from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import api from '@monorepo/axios-config'
import { confirmAlert } from 'react-confirm-alert'

import GlobalStyles from './styles/GlobalStyles'

import { Container, Form, Input, Button, ListItems } from './styles'
import Item from './components/Item'
import Loading from './components/Loading'

export interface Cupons {
  _id: string
  description: string
  cupom: string
  createdAt: string
  updatedAt: string
  __v: number
}

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [name, setName] = useState<string>()
  const [cupons, setCupons] = useState<Cupons[]>([])

  useEffect(() => {
    async function getCupons() {
      try {
        const response = await api.get('/descontos')
        const { descontos } = response.data
        setCupons(descontos)
        setLoading(false)
      } catch (err) {
        NotificationManager.error(
          'Detectamos uma instabilidade na rede, tente novamente em instantes.',
          'Ops!'
        )
      }
    }
    getCupons()
  }, [])

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name) {
      NotificationManager.error(
        'Preencha todos os campos para continuar!',
        'Ops!'
      )
    } else {
      setLoading(true)
      try {
        const create = await api.post('/descontos', {
          cupom: name,
          description: 'Utilize o cupom abaixo e ganhe desconto'
        })
        if (create) {
          const { desconto } = create.data

          setCupons([...cupons, { ...desconto }])

          NotificationManager.success(
            'Cupom adicionado com sucesso.',
            'Sucesso!'
          )
          setName()
        }
      } catch (err) {
        NotificationManager.error(
          'Detectamos uma instabilidade na rede, tente novamente em instantes.',
          'Ops!'
        )
      }
      setLoading(false)
    }
  }

  const confirmDelete = (id: string) => {
    confirmAlert({
      title: 'Deseja mesmo excluir isso?',
      message: 'essa ação não pode ser desfeita!',
      buttons: [
        {
          label: 'Sim',
          onClick: () => handleDelete(id)
        },
        {
          label: 'Não'
        }
      ]
    })
  }

  const handleDelete = async (id: string) => {
    setLoading(true)
    try {
      const remove = await api.delete(`/descontos/${id}`)
      if (remove) {
        setCupons(cupons.filter(el => el._id !== id))
        NotificationManager.success('Cupom removido com sucesso.', 'Sucesso!')
      }
    } catch (err) {
      NotificationManager.error(
        'Detectamos uma instabilidade na rede, tente novamente em instantes.',
        'Ops!'
      )
    }
    setLoading(false)
  }

  return (
    <>
      {loading}
      <Container>
        <Form onSubmit={handleFormSubmit}>
          <Input
            placeholder="Digite aqui o nome do cupom!"
            required
            onChange={event => setName(event.target.value)}
          />
          <Button type="submit">CADASTRAR</Button>
        </Form>
        <ListItems>
          {loading && <Loading />}
          {cupons.length > 0 &&
            cupons.map(cupom => (
              <Item
                key={cupom._id}
                cupom={cupom}
                handleDelete={confirmDelete}
              />
            ))}
        </ListItems>
      </Container>
      <GlobalStyles />
      <NotificationContainer />
    </>
  )
}

export default App
