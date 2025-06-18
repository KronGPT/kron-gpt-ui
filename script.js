document.getElementById("chat-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const input = document.getElementById("user-input");
  const chatbox = document.getElementById("chatbox");
  const userText = input.value;
  chatbox.innerHTML += `<div><strong>Tú:</strong> ${userText}</div>`;
  input.value = "";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer TU_API_KEY_AQUI"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userText }]
    })
  });

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || "Error al obtener respuesta.";
  chatbox.innerHTML += `<div><strong>KronGPT:</strong> ${reply}</div>`;
});
