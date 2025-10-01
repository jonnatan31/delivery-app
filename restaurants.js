
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const list = await prisma.restaurant.findMany({ include: { menus: true } });
  res.json(list);
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const r = await prisma.restaurant.findUnique({ where: { id }, include: { menus: true } });
  if (!r) return res.status(404).json({ error: 'Not found' });
  res.json(r);
});

module.exports = router;
