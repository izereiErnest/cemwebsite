document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");
    const rejectButton = document.getElementById("reject-cookies");

    // Show the banner only if the user hasn't responded to cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.classList.remove("hidden");
    }

    // Handle Accept Cookies
    acceptButton.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.classList.add("hidden");
    });

    // Handle Reject Cookies
    rejectButton.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "false");
        cookieBanner.classList.add("hidden");
    });
});
