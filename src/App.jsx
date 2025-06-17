import { useState, useEffect } from 'react'
import axios from 'axios'
import ClienteList from './components/ClienteList'
import ClienteForm from './components/ClienteForm'
import './App.css'

const API_URL = 'http://localhost:3001/api/clientes'

function App() {
  const [clientes, setClientes] = useState([])
  const [currentCliente, setCurrentCliente] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getClientes()
  }, [])

  const getClientes = async () => {
    try {
      const response = await axios.get(API_URL)
      setClientes(response.data)
      setError(null)
    } catch (err) {
      console.error('Erro ao buscar clientes:', err)
      setError('Erro ao carregar clientes. Verifique se o servidor está rodando.')
    }
  }

  const addCliente = async (cliente) => {
    try {
      const response = await axios.post(API_URL, cliente)
      setClientes([...clientes, response.data])
      setError(null)
    } catch (err) {
      console.error('Erro ao adicionar cliente:', err)
      setError('Erro ao adicionar cliente. Verifique se todos os campos estão preenchidos corretamente.')
      throw err // Propaga o erro para o componente do formulário
    }
  }

  const updateCliente = async (cliente) => {
    try {
      const response = await axios.put(`${API_URL}/${cliente.id_cliente}`, cliente)
      setClientes(
        clientes.map((c) => (c.id_cliente === cliente.id_cliente ? response.data : c))
      )
      setError(null)
    } catch (err) {
      console.error('Erro ao atualizar cliente:', err)
      setError('Erro ao atualizar cliente. Verifique se todos os campos estão preenchidos corretamente.')
      throw err
    }
  }

  const deleteCliente = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`)
      setClientes(clientes.filter((c) => c.id_cliente !== id))
      setError(null)
    } catch (err) {
      console.error('Erro ao deletar cliente:', err)
      setError('Erro ao deletar cliente.')
    }
  }

  const editCliente = (cliente) => {
    setCurrentCliente(cliente)
  }

  return (
    <div className="App">
      <h1>Gerenciamento de Clientes</h1>
      {error && <div className="error-message" style={{ color: 'red', margin: '10px 0' }}>{error}</div>}
      <ClienteForm
        addCliente={addCliente}
        updateCliente={updateCliente}
        currentCliente={currentCliente}
        setCurrentCliente={setCurrentCliente}
      />
      <ClienteList
        clientes={clientes}
        editCliente={editCliente}
        deleteCliente={deleteCliente}
      />
    </div>
  )
}

export default App
