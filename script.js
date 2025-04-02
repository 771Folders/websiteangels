const slideshowImages = document.querySelectorAll(".intro-slideshow img");
const nextImageDelay = 3500;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;

  slideshowImages[currentImageCounter].style.opacity = 1;
};

document.getElementById("loading-screen").style.display = "flex";

setTimeout(function () {
  document.getElementById("loading-screen").style.display = "none";
}, 3500);

document.addEventListener("click", function (event) {
  var dropdownButton = event.target.closest(".dropbtn");
  if (!dropdownButton) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var dropdown = dropdowns[i];
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    }
  }
});

function myFunction(dropdownId) {
  var dropdownContent = document.getElementById(dropdownId);
  if (dropdownContent) {
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    } else {
      // Close all other open dropdowns
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var dropdown = dropdowns[i];
        if (dropdown.classList.contains("show") && dropdown.id !== dropdownId) {
          dropdown.classList.remove("show");
        }
      }
      dropdownContent.classList.add("show");
    }
  }
}

window.onclick = function (event) {
  var dropdownButtons = document.getElementsByClassName("dropbtn");
  var dropdownContents = document.getElementsByClassName("dropdown-content");
  
  var isDropdownButton = false;
  var isDropdownContent = false;
  
  for (var i = 0; i < dropdownButtons.length; i++) {
    if (dropdownButtons[i].contains(event.target)) {
      isDropdownButton = true;
      break;
    }
  }
  
  for (var i = 0; i < dropdownContents.length; i++) {
    if (dropdownContents[i].contains(event.target)) {
      isDropdownContent = true;
      break;
    }
  }
  
  if (!isDropdownButton && !isDropdownContent) {
    for (var i = 0; i < dropdownContents.length; i++) {
      dropdownContents[i].classList.remove("show");
    }
  }
};



const devs = querySelectorAll(".ictDevs");

devs.addEventListener("mouseover", function () {
  devs.style.backgroundColor = "#65a2e7";
})