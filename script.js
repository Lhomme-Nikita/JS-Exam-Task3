const ENDPOINT = "https://api.github.com/users";
const btnElement = document.getElementById("btn");
const outputElement = document.getElementById("output");

btnElement.addEventListener("click", async function () {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();

    outputElement.innerHTML = "";

    data.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");
      userCard.innerHTML = `
        <img src="${user.avatar_url}" alt="${user.login}" class="user-avatar">
        <p class="user-login">${user.login}</p>`;
      outputElement.appendChild(userCard);
    });
  } catch (error) {
    console.log("Error fetching users:", error);
  }
});
