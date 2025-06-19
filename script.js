document.getElementById("chat-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const input = document.getElementById("user-input");
  const message = input.value;
  if (!message) return;

  const chatbox = document.getElementById("chatbox");
  chatbox.innerHTML += `<p><strong>Tú:</strong> ${message}</p>`;
  input.value = "";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: message })
    });

    const data = await response.json();
    chatbox.innerHTML += `<p><strong>KronGPT:</strong> ${data.result}</p>`;
  } catch (error) {
    chatbox.innerHTML += `<p><strong>Error:</strong> No se pudo procesar tu mensaje.</p>`;
  }
});
