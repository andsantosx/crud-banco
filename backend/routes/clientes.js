const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all clientes
router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM clientes ORDER BY id_cliente ASC');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Create a cliente
router.post('/', async (req, res) => {
  try {
    const { nome, email, telefone, documento_identidade } = req.body;
    const newCliente = await db.query(
      'INSERT INTO clientes (nome, email, telefone, documento_identidade) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, email, telefone, documento_identidade]
    );
    res.json(newCliente.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update a cliente
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, telefone, documento_identidade } = req.body;
    const updateCliente = await db.query(
      'UPDATE clientes SET nome = $1, email = $2, telefone = $3, documento_identidade = $4 WHERE id_cliente = $5 RETURNING *',
      [nome, email, telefone, documento_identidade, id]
    );

    if (updateCliente.rows.length === 0) {
      return res.status(404).json({ msg: 'Cliente não encontrado' });
    }

    res.json(updateCliente.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Delete a cliente
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCliente = await db.query('DELETE FROM clientes WHERE id_cliente = $1 RETURNING *', [id]);

    if (deleteCliente.rows.length === 0) {
        return res.status(404).json({ msg: 'Cliente não encontrado' });
    }

    res.json({ msg: 'Cliente removido' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router; 