require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(bodyParser.json());

app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;

        const additionalMessage = {
            role: 'system',
            content: 'You are a chatbot named ChatGPT created by AI Insight Channel, your responsibility is to answer all user questions in a humorous way, if user need to find more information, you will introduce them to visit: https://vietaiacademy.com/'
        };

        const completion = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [additionalMessage, ...messages],
        });
        res.json(completion.data.choices[0].message);
    } catch (error) {
        console.error('Error in /api/chat:', error);
        res.status(500).json({ error: 'An error occurred while processing the request' });
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening on port ${port}`));
