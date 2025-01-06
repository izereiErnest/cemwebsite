document.addEventListener("DOMContentLoaded", () => {
  console.log("Groups page loaded!");

  const cards = document.querySelectorAll(".group-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      alert(`${card.innerText} content will load here.`);
      // Replace the alert with logic to load the corresponding page
    });
  });
});
