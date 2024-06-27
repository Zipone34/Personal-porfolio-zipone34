const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);

$(window).on("load", function() {
  $(".loader-wrapper").fadeOut(5000);
});
//pop up when a projects is clicked
document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project');
  
  projects.forEach(project => {
      project.addEventListener('click', () => {
          alert(`You clicked on ${project.querySelector('h3').innerText}`);
      });
  });
});
// scroll up

$(document).ready(function() {
  // Show or hide the button
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('#scrollTop').fadeIn();
      } else {
          $('#scrollTop').fadeOut();
      }
  });

  // Scroll to top when button is clicked
  $('#scrollTop').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
      return false;
  });
});

//nav
document.addEventListener("DOMContentLoaded", function() {
  const navbarToggler = document.getElementById('navbar-toggler');
  const navLinks = document.getElementById('nav-links');

  navbarToggler.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});

//dropdown
function toggleDropdown() {
  var dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//alert function
 function htmlfunction() {
  alert("You clicked html 5");
 }

 function Cssfunction() {
  alert("You clicked Css");
 }

 function Javascriptfunction() {
  alert("You clicked Javascript");  
 }

function Bootstrapfunction() {
  alert("You clicked Bootstrap");
}

function Reactfunction() {
  alert("You clicked React Js");
}

function Figmafunction() {
  alert("You clicked Figma");
}

function Sqlfunction() {
  alert("You clicked Sql");
}

function Javafunction() {
  alert("You clicked Java");
}

function Githubfunction() {
  alert("You clicked Github");  
}

function VisualStudiocode() {
  alert("You clicked Vscode");
}

function VisualStudio() {
  alert("You clicked VisualStudio");
}

function eclipesfunction() {
  alert("You clicked Eclipes");
}
//position 
function Designfunction() {
  alert("You  clicked IDE&Design");
}

function BackEndfunction() {
  alert("You clicked BackEnd");
}

function FrontEndfunction() {
  alert("You  clicked FrontEnd");
}


