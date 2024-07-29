function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (message !== '') {
        const chatboxBody = document.getElementById('chatbox-body');
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message';
        messageElement.textContent = message;
        chatboxBody.appendChild(messageElement);
        
        chatInput.value = '';
        chatboxBody.scrollTop = chatboxBody.scrollHeight;
    }
}
function recieved(){
    const inputs = document.querySelectorAll("input");
    const texts = document.querySelectorAll("textarea");
    inputs.forEach(input => {
        input.value = "";
    });

    texts.forEach(text =>{
        text.value = "";
    });
    alert("Feedback recieved Thanks!!!!")
}

const click = document.querySelectorAll(".buy");
click.forEach(clicks =>{
    clicks.addEventListener("click", function(){
    window.location.href = "hello.html";
    });
});

function purchased(){
    const inputs = document.querySelectorAll("input");
    const texts = document.querySelectorAll("textarea");
    inputs.forEach(input => {
        input.value = "";
    });

    texts.forEach(text =>{
        text.value = "";
    });
    alert("Thanks for purchasing!!!!")
}

const clic = document.querySelectorAll(".buy");
clic.forEach(clicks =>{
    clicks.addEventListener("click", function(){
    window.location.href = "hello.html";
    });
});