import { useState, useEffect } from 'react'
import axios from 'axios'
import ClienteList from './components/ClienteList'
import ClienteForm from './components/ClienteForm'
import './App.css'

const API_URL = 'http://localhost:3001/api/clientes'

function App() {
  const [clientes, setClientes] = useState([])
  const [currentCliente, setCurrentCliente] = useState(null)

  useEffect(() => {
    getClientes()
  }, [])

  const getClientes = async () => {
    const response = await axios.get(API_URL)
    setClientes(response.data)
  }

  const addCliente = async (cliente) => {
    const response = await axios.post(API_URL, cliente)
    setClientes([...clientes, response.data])
  }

  const updateCliente = async (cliente) => {
    const response = await axios.put(`${API_URL}/${cliente.id_cliente}`, cliente)
    setClientes(
      clientes.map((c) => (c.id_cliente === cliente.id_cliente ? response.data : c))
    )
  }

  const deleteCliente = async (id) => {
    await axios.delete(`${API_URL}/${id}`)
    setClientes(clientes.filter((c) => c.id_cliente !== id))
  }

  const editCliente = (cliente) => {
    setCurrentCliente(cliente)
  }

  return (
    <div className="App">
      <h1>Gerenciamento de Clientes</h1>
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
