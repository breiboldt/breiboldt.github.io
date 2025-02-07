// app.js
document.getElementById("resume-upload").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onload = function (e) {
        const resumeLink = document.getElementById("resume-link");
        resumeLink.href = e.target.result;
        resumeLink.textContent = "View Uploaded Resume";
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  });