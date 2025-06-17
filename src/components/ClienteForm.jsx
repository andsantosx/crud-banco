import React, { useState, useEffect } from 'react';

const ClienteForm = ({ addCliente, updateCliente, currentCliente, setCurrentCliente }) => {
  const [cliente, setCliente] = useState({ nome: '', email: '', telefone: '', documento_identidade: '' });
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (currentCliente) {
      setCliente(currentCliente);
    } else {
      setCliente({ nome: '', email: '', telefone: '', documento_identidade: '' });
    }
    setFormError('');
  }, [currentCliente]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
    setFormError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentCliente) {
        await updateCliente(cliente);
      } else {
        await addCliente(cliente);
      }
      setCliente({ nome: '', email: '', telefone: '', documento_identidade: '' });
      setCurrentCliente(null);
      setFormError('');
    } catch (err) {
      setFormError('Erro ao salvar cliente. Verifique se todos os campos estão preenchidos corretamente e se o email/documento não está duplicado.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formError && <div style={{ color: 'red', marginBottom: '10px' }}>{formError}</div>}
      <input type="text" name="nome" placeholder="Nome" value={cliente.nome} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={cliente.email} onChange={handleChange} required />
      <input type="text" name="telefone" placeholder="Telefone" value={cliente.telefone} onChange={handleChange} />
      <input type="text" name="documento_identidade" placeholder="Documento" value={cliente.documento_identidade} onChange={handleChange} />
      <button type="submit">{currentCliente ? 'Atualizar' : 'Adicionar'}</button>
      {currentCliente && <button type="button" onClick={() => setCurrentCliente(null)}>Cancelar</button>}
    </form>
  );
};

export default ClienteForm; 