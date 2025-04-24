const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const supperPlanRoutes = require('./routes/supperPlanRoutes');

dotenv.config();
const app = express();

// ✅ Apply CORS middleware globally and simply
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// ✅ Handle JSON requests
app.use(express.json());

// ✅ Mount routes after middleware
app.use('/api/supper-plan', supperPlanRoutes);

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// ✅ Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
