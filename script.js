// EmailJS Initialize
(function () {
    emailjs.init("xXCWRQ0XCSvy2YFTl"); // yaha apna Public Key daalo
})();

// Form Submit Event
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = this;
    const messageBox = document.getElementById("formMessage");

    // ✅ Current Time Set (Submit ke time)
    document.getElementById("timeField").value = new Date().toLocaleString();

    // ✅ Send Email
    emailjs.sendForm("service_a2phewe", "template_kf27eky", form)
        .then(function () {

            // Success Message (Bootstrap Style)
            messageBox.innerHTML = `
                <div class="alert alert-success mt-3">
                    ✅ Message Sent Successfully!
                </div>
            `;

            form.reset();

        }, function (error) {

            // Error Message
            messageBox.innerHTML = `
                <div class="alert alert-danger mt-3">
                    ❌ Failed to send message. Try again!
                </div>
            `;

            console.log("EmailJS Error:", error);
        });
});