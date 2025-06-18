document.getElementById("chat-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const userInput = document.getElementById("user-input").value;
  const chatBox = document.getElementById("chatbox");

  chatBox.innerHTML += `<p><strong>Tú:</strong> ${userInput}</p>`;
  document.getElementById("user-input").value = "";

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: userInput })
  });

  const data = await response.json();
  chatBox.innerHTML += `<p><strong>KronGPT:</strong> ${data.reply}</p>`;
});
