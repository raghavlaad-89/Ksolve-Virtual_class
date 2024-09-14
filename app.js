const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the connection file

// Importing routes
const classRoutes = require('./routes/classRoutes');   // Routes for Classes
const unitRoutes = require('./routes/unitRoutes');     // Routes for Units
const sessionRoutes = require('./routes/sessionRoutes'); // Routes for Sessions and Reviews

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Middleware for parsing JSON data

// Define routes
app.use('/api/classes', classRoutes);   // Routes for Classes
app.use('/api/units', unitRoutes);      // Routes for Units
app.use('/api/sessions', sessionRoutes); // Routes for Sessions and Reviews

// Root endpoint
app.get('/', (req, res) => {
    res.send('Virtual Classroom Backend API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
