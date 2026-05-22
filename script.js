// Reserve Table Button Alert

const reserveButton = document.querySelector(".hero button");

reserveButton.addEventListener("click", function () {

    alert("Thank you for choosing Sakura Sushi!");

});


// Contact Form Message

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Message Sent Successfully!");

});