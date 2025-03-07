document.addEventListener("DOMContentLoaded", function () {
    // Handle smooth scrolling when clicking on navigation links
    const anchors = document.querySelectorAll("nav ul li a");
    anchors.forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            // Scroll to target element smoothly
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Handle form submission for adding recommendations
    const recommendationForm = document.getElementById("recommendation-form");
    const recommendationList = document.querySelector(".reviews");

    recommendationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message").value.trim();

        if (message) {
            const newRecommendation = document.createElement("p");
            newRecommendation.textContent = message;

            if (name) {
                newRecommendation.textContent = `"${message}" - ${name}`;
            }

            recommendationList.appendChild(newRecommendation);

            // Clear the input fields
            recommendationForm.reset();

            // Provide feedback
            alert("Recommendation added successfully!");
        } else {
            alert("Please enter a valid recommendation message.");
        }
    });
});
