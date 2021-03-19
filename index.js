window.addEventListener("load", function(event) {
  $(this).scrollTop(0);
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
      opacity: 0.6,
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
    text.fromTo('.portfolio-left', {
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
      opacity: 0.2
    }, "-=0.9");
    // balls.play();
  }

  var reverseText = () => {
    gsap.to(".cursorProject", {
      opacity: 0,
      duration: 1
    });
    var text = gsap.timeline({});
    text.fromTo('.portfolio-left', {
      opacity: 1,
      zIndex: 2000,
      transformOrigin: "100% 0%",
      clipPath: "circle(100%)"
    }, {
      opacity: 0,
      zIndex: 0,
      duration: 0.5,
      clipPath: "circle(0%)"
    });
    text.to('.circle', {
      opacity: 1
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
      gsap.to('.hamburger-list', {
        visibility: "visible",
        duration: 1
      });
    } else {
      gsap.to('.hamburger-list', {
        visibility: "hidden",
        duration: 1
      });
    }

  });

  //Select from hamburger menu
  $("a.hamburger-link").on('click', function(e) {
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
