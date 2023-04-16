const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');

function appendMessage(message, className, author, avatarSrc) {
    const messageDiv = document.createElement('div');
    messageDiv.className = className + ' message';

    const avatarImg = document.createElement('img');
    avatarImg.src = avatarSrc;
    avatarImg.alt = author + ' Avatar';
    avatarImg.className = 'avatar';

    const messageContentDiv = document.createElement('div');
    messageContentDiv.className = 'message-content';

    const messageAuthorDiv = document.createElement('div');
    messageAuthorDiv.className = 'message-author';
    messageAuthorDiv.textContent = author;

    const messageTextDiv = document.createElement('div');
    messageTextDiv.className = 'message-text';
    messageTextDiv.textContent = message;

    messageContentDiv.appendChild(messageAuthorDiv);
    messageContentDiv.appendChild(messageTextDiv);
    messageDiv.appendChild(avatarImg);
    messageDiv.appendChild(messageContentDiv);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function fetchChatGptResponse(messages) {
    const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
    });

    if (response.ok) {
        const chatGptResponse = await response.json();
        return chatGptResponse.content;
    } else {
        throw new Error('Error fetching ChatGPT response');
    }
}

sendBtn.addEventListener('click', async () => {
    const message = userInput.value.trim();
    if (message) {
        appendMessage(message, 'user-message', 'AI Insight', 'img/user.jpg');
        userInput.value = '';

        try {
            const chatGptResponse = await fetchChatGptResponse([{ role: 'user', content: message }]);
            appendMessage(chatGptResponse, 'gpt-message', 'ChatGPT', 'img/robot.png');
        } catch (error) {
            console.error('Error in sendBtn event listener:', error);
            alert('An error occurred while fetching the ChatGPT response');
        }
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});
