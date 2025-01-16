function handleUSSD(event) {
    event.preventDefault(); // Prevent form submission

    const amount = document.getElementById('amount').value;

    // Validate the amount input
    if (!amount || amount <= 0) {
        alert('Please enter a valid donation amount.');
        return;
    }

    // Constant MTN MoMo code (replace "12345" with your actual code)
    const momoCode = "173486";

    // Format the USSD code
    const ussdCode = `*182*8*1*${momoCode}*${amount}#`;

    // Generate a tel: link
    const ussdLink = document.getElementById('ussd-link');
    ussdLink.href = `tel:${encodeURIComponent(ussdCode)}`;
    ussdLink.click(); // Programmatically click the link
}
