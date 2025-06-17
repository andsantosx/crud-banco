import React from 'react';

const ClienteList = ({ clientes, editCliente, deleteCliente }) => {
  return (
    <table>
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
            <td>{cliente.nome}</td>
            <td>{cliente.email}</td>
            <td>{cliente.telefone}</td>
            <td>{cliente.documento_identidade}</td>
            <td>
              <button onClick={() => editCliente(cliente)}>Editar</button>
              <button onClick={() => deleteCliente(cliente.id_cliente)}>Deletar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClienteList; 