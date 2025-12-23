const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Node is running on port ' + process.env.PORT);
});

app.get('/health', (req, res) => {
    res.json({
        message: 'Test endpoint is started!',
        version: '1.0.0',
        success: true
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
})