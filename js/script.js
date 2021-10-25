let chooseBtn = document.getElementById("choose"),
    receiveBtn = document.getElementById("receive"),
    contactForm = document.getElementsByClassName("contactform_name")[0],
    text = document.getElementsByTagName("h2")[0],
    modal = document.querySelector(".modal"),
    telTitle = document.querySelectorAll(".main_tel_title")[0],
    telNumber = document.querySelector(".main_tel_phone"),
    closeBtn = document.querySelector(".close"),
    message = document.getElementsByName("message")[0],
    number = document.querySelector(".number"),
    tag = document.querySelector(".tag"),
    contactPhone = document.querySelector(".contactform_phone");

// first way
function hover() {
    text.textContent = "Oybek Mukhtorov";
}

// second way
// text.onmouseenter = hover;

// third way
text.addEventListener("mouseenter", hover);
text.addEventListener("mouseleave", () => {
    text.textContent = "Все включено";
});

// opening modal
receiveBtn.addEventListener("click", () => {
    modal.style.display = "block";
    contactPhone.textContent = "+998";
})
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
})

// other event
contactForm.addEventListener("input", () => {
    message.value = `Mening ismim ${contactForm.value} va men aytmoqchimanki: `
})

// function for change tel number
number.addEventListener("click", () => {
    telNumber.textContent = "+998 90 540 52 91";
    telTitle.textContent = "O'zbekistonga qo'ng'iroq bepul";
    tag.textContent = "Nomer Russian";
    number.addEventListener("click", () => {
        telNumber.textContent = "+7 (495) 539-24-42";
        telTitle.textContent = "Звонок по России бесплатно";
        tag.textContent = "Nomer Uzb";
    })
})