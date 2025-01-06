// Example: Dynamic Team Member Addition
document.addEventListener("DOMContentLoaded", () => {
    const teamContainer = document.querySelector(".team-container");
  
    const newMembers = [
      { name: "Alice Johnson", role: "Designer" },
      { name: "Michael Lee", role: "Developer" },
    ];
  
    newMembers.forEach((member) => {
      const memberDiv = document.createElement("div");
      memberDiv.classList.add("team-member");
      memberDiv.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.role}</p>
      `;
      teamContainer.appendChild(memberDiv);
    });
  });
  