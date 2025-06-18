const chatbox = document.getElementById("chatbox");
const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage("🧑 Tú", userMessage);
  input.value = "";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();
    appendMessage("🤖 KronGPT", data.reply);
  } catch (error) {
    appendMessage("⚠️ Error", "No se pudo conectar con KronGPT.");
  }
});

function appendMessage(sender, message) {
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}
