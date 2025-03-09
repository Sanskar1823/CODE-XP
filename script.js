/* General Styling */
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #4e54c8, #8f94fb);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Containers */
.container {
    text-align: center;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    animation: fadeIn 1s ease-in-out;
}

/* Logo */
.logo {
    width: 150px;
    margin-bottom: 20px;
}

/* Hidden Elements */
.hidden {
    display: none;
}

/* Inputs and Buttons */
input, button {
    padding: 10px 20px;
    margin: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
}

button {
    background: #ff7eb3;
    color: white;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: #ff6b9e;
}

/* Chatbox */
#chat-box {
    height: 200px;
    overflow-y: auto;
    margin-bottom: 10px;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
