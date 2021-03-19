$(this).scrollTop(0);
let check = false;
var mobileCheck = function() {
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);

  return check;
};
mobileCheck();
if (check){
  $("body").addClass('mobile');
}

window.addEventListener("load", function(event) {

  $(".loading").css("display", "none");

  //GLOBAL VARIABLES
  var mouse = {
    x: null,
    y: null
  };
  var $tabs = $('.tabs');
  var hoverable = document.querySelectorAll(".hoverable");
  var burgerMenu = document.querySelector(".hamburger-menu");
  var burgerLink = document.querySelector(".hamburger-link");
  var burgerList = document.querySelector(".hamburger-list");
  var projectTitle = document.getElementById('project-title');
  var projectBackground = document.getElementById('portfolio-left');
  var projectImg = document.getElementById("portfolioImage");
  var work = document.getElementById('work');
  let clicked;
  var hoverOpen = false;
  var circle = $('.circle');
  var contactArrow = document.getElementById("toContact");

  //FUNCTIONS

  var onMouseMove = (e) => {
    TweenMax.to(".cursor", .4, {
      x: e.clientX - 15,
      y: e.clientY - 15
    })
  }

  // Hover any 'hoverable' element
  function onMouseHover() {

    TweenMax.to(".cursor", .3, {
      scale: 4,
      backgroundColor: "#8814c7"
    });
  }

  function onMouseHoverOut() {
    TweenMax.to(".cursor", .3, {
      scale: 1,
      backgroundColor: "#f046e4"
    })
  }

  function navBar(e) {
    if (e.target.id === "about") {
      $tabs.find(".active").removeClass("active");
      $("#aboutli").addClass("active");
    } else if (e.target.id === "portfolio" || e.target.id === "portfolio-left") {
      $tabs.find(".active").removeClass("active");
      $("#portfolioli").addClass("active");
    } else if (e.target.id === "contact") {
      $tabs.find(".active").removeClass("active");
      $("#contactli").addClass("active");
    }
  }

  //Animation for loading sections (after clicks)
  var mainLinkAnim = () => {

    var aboutAnim = gsap.timeline({});
    aboutAnim.to(".about", {
      opacity: 1,
      duration: 0.3,
      delay: 1
    });
    aboutAnim.fromTo('canvas', {
      opacity: 0,
      x: 100
    }, {
      opacity: 1,
      x: 0,
      zIndex: 100,
      duration: 1
    });
    aboutAnim.fromTo(".about-para p", {
      y: 200,
      opacity: 0
    }, {
      y: 0,
      zIndex: 1000,
      opacity: 1,
      duration: 1.5,
      stagger: 0.3
    });
    gsap.fromTo(".navlink", {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: .5
    })
  };

  var portfolioScroll = () => {
    $tabs.find(".active").removeClass("active");
    $("#portfolioli").addClass("active");
    var scroll = gsap.timeline({});
    scroll.to(window, {
      duration: 1.5,
      scrollTo: ".portfolio"
    });
    var balls = gsap.timeline({
      delay: 1
    });
    balls.fromTo('.circle', {
      x: 600,
      y: -50,
      opacity: 0
    }, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.5
    });
    let arrowAnimation = gsap.timeline({
      repeat: 1,
      delay: 3
    });
    arrowAnimation.fromTo(".toContact", {
      duration: 2,
      y: -50,
      autoAlpha: 0
    }, {
      y: 0,
      autoAlpha: 1
    });

  };

  var contactScroll = () => {
    $tabs.find(".active").removeClass("active");
    $("#contactli").addClass("active");
    var scroll = gsap.timeline({});
    scroll.to(window, {
      duration: 1.5,
      scrollTo: ".contact"
    });
    scroll.fromTo(".contact-box", {
      opacity: 0,
      y: 200
    }, {
      opacity: 1,
      y: 0,
      duration: 0.7
    });

    scroll.fromTo(".contact-banner", {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.7
    });

    scroll.fromTo(".contact-littleBox", {
      y: 100,
      opacity: 0
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3
    });
  };

  var projectText = (e) => {
    var projectId = e.target.id;
    let project;
    mouse = {
      x: e.clientX,
      y: e.clientY
    };
    switch (projectId) {
      case 'circle1':
        project = {
          title: "Codepen Projects",
          img: "images/codepen.png"
        }

        break;
      case 'circle2':
        project = {
          title: "Github Projects",
          img: "images/earthbnb.png"
        }
        break;
      case 'circle3':
        project = {
          title: "Featured Project: Arcade",
          img: "images/arcade.png"
        }
        break;
      case 'circle4':
        project = {
          title: "Featured Project: Sailing Barcelona",
          img: "images/sailing.png"
        }
        break;
      default:
    }
    projectTitle.innerHTML = project.title;
    projectBackground.style.backgroundImage = "url(" + project.img + ")";
    // projectImg.src = project.img;
    gsap.to(".cursorProject", {
      opacity: 1,
      duration: 1
    });
    var text = gsap.timeline({});
    text.fromTo('#portfolio-left', {
      clipPath: "circle(0%)",
      opacity: 0,
      zIndex: 0
    }, {
      x: 0,
      zIndex: 2000,
      opacity: 0.6,
      duration: 1,
      clipPath: "circle(100%)"

    });
    text.to('.circle', {
      opacity: 0.2,
      zIndex: 2800
    }, "-=0.9");
    // balls.play();
  }

  var reverseText = () => {
    gsap.to(".cursorProject", {
      opacity: 0,
      duration: 1
    });
    var text = gsap.timeline({});
    text.fromTo('#portfolio-left', {
      opacity: 1,
      zIndex: 2000,
      transformOrigin: "100% 0%",
      clipPath: "circle(100%)"
    }, {
      zIndex: 0,
      opacity: 0,
      duration: 0.5,
      clipPath: "circle(0%)"
    });
    text.to('.circle', {
      opacity: 1,
      zIndex: 2800
    }, "-=0.5");
  }

  function openLinks(clicked) {
    if (clicked === 'circle1') {
      window.open("https://codepen.io/tallulahh");
    }
    if (clicked === 'circle2') {
      window.open("https://www.github.com/tallulahh");
    }
    if (clicked === 'circle3') {
      window.open("https://tallulahh.github.io/arcade/index.html");
    }
    if (clicked === 'circle4') {
      window.open("https://tallulahh.github.io/sailing-barcelona/home.html");
    }
  };

  //ANIMATIONS

  // Circle Animations
  var circlesAnimation = gsap.timeline({
    repeat: -1,
    yoyo: true,
    duration: 0.5
  });

  circlesAnimation.fromTo(".circle", {
    x: 0
  }, {
    x: 3,
    stagger: .3
  });

  //EVENT LISTENERS

  //Open hamburger menu
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("open");
    burgerList.style.visibility = "visible";
    if ($(burgerMenu).hasClass("open") === true) {
      gsap.to(".circle", {
        zIndex: 0,
        duration: 0
      });
      gsap.to(".toContact", {
        zIndex: 0,
        duration: 0
      });
      gsap.to('.hamburger-list', {
        visibility: "visible",
        duration: 1,
        zIndex: 3000
      });
    } else {
      gsap.to(".circle", {
        zIndex: 2800,
        duration: 0
      });
      gsap.to(".toContact", {
        zIndex: 2000,
        duration: 0
      });
      gsap.to('.hamburger-list', {
        visibility: "hidden",
        duration: 1,
        zIndex: 0
      });
    }
  });

  //Select from hamburger menu
  $("li a.hamburger-link").on('click', function(e) {
    burgerList.style.visibility = "hidden";
    burgerMenu.classList.toggle("open");

    e.preventDefault();
    var id = $(this).attr('href');
    var scroll = gsap.timeline({});

    if (id === "#contact") {
      contactScroll();
      $tabs.find(".active").removeClass("active");
      $("#contactli").addClass("active");
    } else if (id === "#portfolio") {
      portfolioScroll();
      $tabs.find(".active").removeClass("active");
      $("#portfolioli").addClass("active");
    } else if (id === "#about") {
      $tabs.find(".active").removeClass("active");
      $("#aboutli").addClass("active");
    }
    scroll.to(window, {
      duration: 1.5,
      scrollTo: id
    });
  });

  //cursor
  document.body.addEventListener('mousemove', onMouseMove);
  for (let i = 0; i < hoverable.length; i++) {
    hoverable[i].addEventListener('mouseenter', onMouseHover);
    hoverable[i].addEventListener('mouseleave', onMouseHoverOut);
  }

  //Navbar changes based on mouse position
  window.addEventListener("mousemove", navBar);

  //Navbar changes on click
  $tabs.on('click', 'a', function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var scroll = gsap.timeline({});
    scroll.to(window, {
      duration: 1.5,
      scrollTo: id
    });
    if (id === "#contact") {
      contactScroll();
      $tabs.find(".active").removeClass("active");
      $("#contactli").addClass("active");
    } else if (id === "#portfolio") {
      portfolioScroll();
      $tabs.find(".active").removeClass("active");
      $("#portfolioli").addClass("active");
    } else if (id === "#about") {
      $tabs.find(".active").removeClass("active");
      $("#aboutli").addClass("active");
    }
  });

  //Portfolio Page Circles
  if (innerWidth < 800) {
    circle.on("touchstart", function(e) {
      if (hoverOpen) {
        reverseText(e);
        hoverOpen = false;
      } else {
        projectText(e);
        hoverOpen = true;
        clicked = e.target.id;
        if (hoverOpen) {
          $(projectBackground).on("touchstart touchend", function() {
            openLinks(clicked);
          })
        }
      }
    });
  } else {
    circle.on("mouseover", projectText);
    circle.on("mouseout", reverseText);
    circle.on("click", function(e) {
      openLinks(e.target.id);
    });
  }

  //Links
  $(work).on("mouseover", () => {
    gsap.to(".cursorWork", {
      opacity: 1,
      duration: 1
    });
  })
  $(work).on("mouseout", () => {
    gsap.to(".cursorWork", {
      opacity: 0,
      duration: 0.5
    });
  })
  work.addEventListener("click", () => {
    gsap.to(".cursorWork", {
      opacity: 0,
      duration: 0.5
    });
    portfolioScroll();
  });
  contactArrow.addEventListener("click", contactScroll);
  mainLinkAnim();
});
