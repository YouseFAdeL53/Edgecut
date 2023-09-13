// Selector

let theToggle = document.querySelector(".toggle");

let theUl = document.querySelector(".links");

let theLinks = document.querySelectorAll(".links li a");

theToggle.addEventListener("click", (e) => {
  theToggle.classList.toggle("fa-x");

  theUl.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (e.target != theUl && e.target != theToggle) {
    theToggle.classList.remove("fa-x");
    theUl.classList.remove("show");
  }
});

theUl.addEventListener("click", (e) => {
  e.stopPropagation();
});

theLinks.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth"
    });

    theLinks.forEach((ele) => {
      ele.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});


// Navbar

let theNavbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 100) {
    theNavbar.classList.add("fixed")
  } else {
    theNavbar.classList.remove("fixed")
  }


})

// Start Slider

let allBoxes = document.querySelectorAll(".landing .box");

// Get Length

let theLength = allBoxes.length;

// Set Option

let currentSlide = 1;

// Create Ul

let newUl = document.createElement("ul");

newUl.className = "incad";

for (let i = 1; i <= theLength; i++) {
  let theLi = document.createElement("li");
  theLi.setAttribute("data-id", i);
  newUl.appendChild(theLi);
}

document.querySelector(".landing .content").appendChild(newUl);

let theLi = Array.from(document.querySelectorAll(".incad li"));

for (let i = 0; i < theLi.length; i++) {
  theLi[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-id"));
    Checker();
  };
}

function Checker() {
  handleClass();

  allBoxes[currentSlide - 1].classList.add("active");

  newUl.children[currentSlide - 1].classList.add("active");
}

Checker();

// Handle active Class On Box And Ul

function handleClass() {
  allBoxes.forEach((ele) => {
    ele.classList.remove("active");
  });
  theLi.forEach((li) => {
    li.classList.remove("active");
  });
}

// Start Testmonials

let theContent = document.querySelector(".testmonials .content");

let theCard = document.querySelector(".testmonials .content .box").offsetWidth;


let theArrowsBtn = document.querySelectorAll(".arrows i");



theArrowsBtn.forEach(ele => {

  ele.addEventListener("click", () => {

    theContent.scrollLeft = ele.id == "left" ? -theCard : theCard;

  })


});


// Set Option

let isDraggig = false;

let handlepgX, handleScrollLeft;

const draggingStart = (e) => {
  isDraggig = true;

  theContent.classList.add("dragging");

  handlepgX = e.pageX;

  handleScrollLeft = theContent.scrollLeft;
};

const dragging = (e) => {
  if (!isDraggig) return;

  theContent.scrollLeft = e.pageX;
};

const draggingStop = () => {
  isDraggig = false;
  theContent.classList.remove("dragging");
};

theContent.addEventListener("mousedown", draggingStart);
theContent.addEventListener("mousemove", dragging);
theContent.addEventListener("mouseup", draggingStop);
