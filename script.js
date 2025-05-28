
function showSecurityAlert() {
  alert("⚠️ Security Notice:\n\nPlease be aware of scammers and fake profiles. Never share personal, financial, or sensitive information with anyone you meet online.\n\nWe are committed to your safety.");
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (e) {
    const name = form.name.value.trim();
    const email = form.gmail.value.trim();
    const mobile = form.mobile.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !mobile) {
      alert("Please fill all required fields.");
      e.preventDefault();
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    }
  });
});


function previewPhoto() {
  const fileInput = document.getElementById("photo");
  const file = fileInput.files[0];
  const preview = document.getElementById("photoPreview");

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
    preview.style.display = "none";
  }
}
