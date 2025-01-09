const navbarLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("main section");

// Smooth scrolling
navbarLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        const yOffset = -80;
        const y = target.getBoundingClientRect().top + window.scrollY + yOffset
        window.scrollTo({top: y, behavior: "smooth" });
    });
});

// Highlight active section
function highlightActiveLink() {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 90;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navbarLinks.forEach(link => link.classList.remove("active"));
            const activeLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
            activeLink.classList.add("active");
        }
    });
};

window.addEventListener("scroll", highlightActiveLink);
highlightActiveLink(); // Initial call


const header = document.querySelector("header");

// Function to enable or disable the scrolling animation
function handleBackgroundScroll(e) {
    if (e.matches) {
        // Add scrolling background animation when width >= 1000px
        window.addEventListener("scroll", scrollBackground);
    } else {
        // Remove the animation for widths < 1000px
        window.removeEventListener("scroll", scrollBackground);
        header.style.backgroundPositionY = ""; // Reset the background position
    }
};

// Scroll background function
const scrollBackground = () => {
    header.style.backgroundPositionY = `${-window.scrollY / 10}px`;
};

// Media query for minimum width of 1000px
const mediaQuery = window.matchMedia("(min-width: 1100px)");

// Initial check
handleBackgroundScroll(mediaQuery);

// Listen for changes in screen size
mediaQuery.addEventListener("change", handleBackgroundScroll);


// Modal elements
const projectImages = document.querySelectorAll(".project-img");
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("close")[0]; // Close button

// Function to open the modal
function openModal(image) {
    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = image.alt;
}

// Attach event listeners to all project images
document.querySelectorAll(".link-box").forEach(link => {
    link.addEventListener("click", (event) => {
        // Check if the clicked element is an <img>
        if (event.target.tagName === "IMG") {
            event.preventDefault(); // Prevent link navigation if image is clicked
            openModal(event.target); // Open the modal
        }
    });
});

// Close the modal when the user clicks the close button
span.onclick = () => {
    modal.style.display = "none";
};


