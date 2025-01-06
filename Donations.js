document.getElementById("donation-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const phone = document.getElementById("phone").value;
    const amount = document.getElementById("amount").value;
    const messageElement = document.getElementById("message");

    messageElement.classList.add("hidden");

    // Validate phone number (basic check for MTN Rwanda numbers)
    const phoneRegex = /^078\d{7}$/;
    if (!phone || !phoneRegex.test(phone)) {
        messageElement.textContent = "Please enter a valid MTN Rwanda phone number (e.g., 078XXXXXXX).";
        messageElement.classList.remove("hidden");
        return;
    }

    // Validate donation amount (ensure it’s a positive number)
    if (!amount || amount <= 0) {
        messageElement.textContent = "Please enter a valid donation amount.";
        messageElement.classList.remove("hidden");
        return;
    }

    try {
        // Mock API call (replace with actual MTN API integration)
        messageElement.textContent = "Processing your donation...";
        messageElement.classList.remove("hidden");

        // Simulate network call with a delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Mock success response
        messageElement.textContent = `Thank you for your donation of ${amount} RWF!`;
        messageElement.classList.add("success");
        messageElement.classList.remove("error", "processing");
    } catch (error) {
        messageElement.textContent = "An error occurred while processing your donation. Please try again.";
        messageElement.classList.add("error");
        messageElement.classList.remove("success", "processing");
    }
});
