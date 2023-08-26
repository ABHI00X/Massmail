document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", function () {
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
  
      // Simulate sending emails (frontend-only simulation)
      for (let i = 1; i <= 5; i++) {
        console.log(`Email ${i} sent with subject: ${subject}`);
      }
      alert("Emails sent successfully!");
    });
  });
  