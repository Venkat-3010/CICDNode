const express = require('express');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({
        message: 'Test endpoint is working!',
        version: '1.0.0',
        success: true
    });
});

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})