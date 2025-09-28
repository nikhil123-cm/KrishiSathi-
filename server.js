const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '100mb' })); // Increase limit for image uploads
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(express.static('.')); // Serve static files from current directory

// API Keys (in production, use environment variables)
const GEMINI_API_KEY = 'AIzaSyAYPuw-D0Rn7LZU94HjcVTeVCNPZtzSUCs';
const OPENWEATHER_API_KEY = '83679e6e9b6655c07b8b70477a996437';

// Proxy endpoint for Gemini API
app.post('/api/gemini', async (req, res) => {
    try {
        // Extract model from request body or use default - use Pro Vision model for better image analysis
        const model = req.body.model || 'gemini-1.5-pro';
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

        // Remove model from request body before forwarding
        const requestBody = { ...req.body };
        delete requestBody.model;

        let response = await fetch(`${apiUrl}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        // If Pro model fails with image processing error, try Flash model
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error(`Gemini API Error Response: ${response.status} ${response.statusText} - server.js:38`, errorData);

            if (errorData.error?.message?.includes('Unable to process input image') && model === 'gemini-1.5-pro') {
                console.log('Retrying with Flash model for image processing... - server.js:41');
                const flashApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`;
                response = await fetch(`${flashApiUrl}?key=${GEMINI_API_KEY}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                });
            }
        }

        if (!response.ok) {
            // API key is invalid or other error, provide fallback
            const fallbackResponse = {
                candidates: [{
                    content: {
                        parts: [{
                            text: "🤖 I'm having trouble connecting to my AI brain right now. Let me give you some farming advice from my knowledge base instead!\n\nHowdy! I'm your Farm AI Assistant. I can help with questions about crops, livestock, farming techniques, pest control, irrigation, soil management, and more. What would you like to know about farming today? 🌾🚜"
                        }]
                    }
                }]
            };
            return res.json(fallbackResponse);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Gemini API error: - server.js:70', error);
        // Provide fallback response when API key is invalid
        const fallbackResponse = {
            candidates: [{
                content: {
                    parts: [{
                        text: "🤖 I'm having trouble connecting to my AI brain right now. Let me give you some farming advice from my knowledge base instead!\n\nHowdy! I'm your Farm AI Assistant. I can help with questions about crops, livestock, farming techniques, pest control, irrigation, soil management, and more. What would you like to know about farming today? 🌾🚜"
                    }]
                }
            }]
        };
        res.json(fallbackResponse);
    }
});

// List available models
app.get('/api/models', async (req, res) => {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_API_KEY}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching models: - server.js:92', error);
        res.status(500).json({ error: 'Failed to fetch models' });
    }
});

// Proxy endpoint for OpenWeather API
app.get('/api/weather', async (req, res) => {
    try {
        const { q, units } = req.query;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${OPENWEATHER_API_KEY}&units=${units || 'metric'}`);

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('OpenWeather API error: - server.js:106', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} - server.js:112`);
});