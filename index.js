
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const path = require('path');

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

// static uploads (local)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Routers
const authRouter = require('./routes/auth');
const restaurantsRouter = require('./routes/restaurants');

app.use('/api/auth', authRouter);
app.use('/api/restaurants', restaurantsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
