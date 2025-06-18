document.getElementById("chat-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const userInput = document.getElementById("user-input").value;
  const chatbox = document.getElementById("chatbox");

  // Muestra la pregunta
  chatbox.innerHTML += `<p><strong>Tú:</strong> ${userInput}</p>`;

  // Llama a la API
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: userInput }),
  });

  const data = await response.json();

  // Muestra la respuesta
  chatbox.innerHTML += `<p><strong>KronGPT:</strong> ${data.result}</p>`;
  document.getElementById("user-input").value = "";
});
