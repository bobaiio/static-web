var string = "BOB AI is a natural language processing tool driven by artificial intelligence technology that allows you to have human-like conversations and much more with the chatbot. The language model can answer questions and assist you with tasks, essays, and code.";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
var running = setTimeout(animate, 90);
})();
