import React, { useState } from 'react';
import './ClienteList.css';

const ClienteList = ({ clientes, editCliente, deleteCliente }) => {
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    documento_identidade: ''
  });

  const handleEditClick = (cliente) => {
    setEditingId(cliente.id_cliente);
    setEditFormData(cliente);
  };

  const handleCancelClick = () => {
    setEditingId(null);
  };

  const handleEditFormChange = (event) => {
    const { name, value } = event.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    editCliente(editFormData);
    setEditingId(null);
  };

  return (
    <div className="cliente-list-container">
      <table className="cliente-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Documento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id_cliente}>
              {editingId === cliente.id_cliente ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="nome"
                      required
                      placeholder="Nome"
                      value={editFormData.nome}
                      onChange={handleEditFormChange}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      value={editFormData.email}
                      onChange={handleEditFormChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="telefone"
                      placeholder="Telefone"
                      value={editFormData.telefone}
                      onChange={handleEditFormChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="documento_identidade"
                      placeholder="Documento"
                      value={editFormData.documento_identidade}
                      onChange={handleEditFormChange}
                    />
                  </td>
                  <td>
                    <button className="save-btn" onClick={handleEditFormSubmit}>
                      Salvar
                    </button>
                    <button className="cancel-btn" onClick={handleCancelClick}>
                      Cancelar
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{cliente.nome}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.documento_identidade}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEditClick(cliente)}>
                      Editar
                    </button>
                    <button className="delete-btn" onClick={() => deleteCliente(cliente.id_cliente)}>
                      Deletar
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClienteList; 