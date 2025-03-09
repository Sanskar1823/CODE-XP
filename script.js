const validUser = { username: 'admin', password: 'password' };
let userPoints = 0;

// Programming Quiz Data
const programmingQuestions = [
    {
        question: "What does 'cout' do in C++?",
        options: ["Outputs data", "Inputs data", "Loops data"],
        answer: "Outputs data"
    },
    {
        question: "What keyword is used to define a function in Python?",
        options: ["func", "def", "lambda"],
        answer: "def"
    },
    {
        question: "Which Java keyword is used to inherit a class?",
        options: ["import", "inherit", "extends"],
        answer: "extends"
    },
    {
        question: "What will '5 == '5'' return in JavaScript?",
        options: ["true", "false", "undefined"],
        answer: "false"
    }
];

// Navigation Helpers
function showLogin() {
    document.getElementById('welcome-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
}

function backToDashboard() {
    document.querySelectorAll('.container').forEach(container => {
        container.classList.add('hidden');
    });
    document.getElementById('dashboard-container').classList.remove('hidden');
    updatePoints();
}

// Login System
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === validUser.username && password === validUser.password) {
        document.getElementById('userName').textContent = username;
        backToDashboard();
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password!';
    }
});

function logout() {
    location.reload();
}

// Programming Quiz
let currentQuestion = 0;

function startProgrammingQuiz() {
    backToDashboard();
    document.getElementById('programming-container').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const questionData = programmingQuestions[currentQuestion];
    document.getElementById('prog-question').textContent = questionData.question;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = "";
    questionData.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(option) {
    if (option === programmingQuestions[currentQuestion].answer) {
        alert('✅ Correct!');
        userPoints += 20;
    } else {
        alert('❌ Wrong!');
    }
    currentQuestion++;
    if (currentQuestion < programmingQuestions.length) {
        loadQuestion();
    } else {
        backToDashboard();
    }
    updatePoints();
}

// AI Chatbot
function startChatbot() {
    backToDashboard();
    document.getElementById('chatbot-container').classList.remove('hidden');
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<p>User: ${userInput}</p>`;
    chatBox.innerHTML += `<p>Bot: I'm learning! Ask something else.</p>`;
    document.getElementById('user-input').value = '';
}

// Update Points
function updatePoints() {
    document.getElementById('user-points').textContent = userPoints;
}
