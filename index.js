function generateResume() {
    document.getElementById("res-name").textContent =document.getElementById("name").ariaValueMax;
    document.getElementById("res-email").textContent = document.getElementById("email").ariaValueMax;
    document.getElementById("res-phone").textContent = document.getElementById("phone").ariaValueMax;
    document.getElementById("res-experience").textContent = document.getElementById("experience").ariaValueMax;
    document.getElementById("res-education").textContent = document.getElementById("education").ariaValueMax;
}

// Function to download resume as PDF
function downloadResume() {
    const element = document.getElementById("resume");
    html2pdf().from(element).save("resume.pdf");
}