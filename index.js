$(window).on('load', function() {
  $(this).scrollTop(0);

});

document.addEventListener("DOMContentLoaded", function(event) {

  //GLOBAL VARIABLES
  var projectTitle = document.getElementById('project-title');
  var projectBackground = document.getElementById('portfolio-left');
  var projectImg = document.getElementById("portfolioImage");
  var aboutli = document.getElementById('aboutli');
  var portfolioli = document.getElementById('portfolioli');
  var contactli = document.getElementById('contactli');
  var work = document.getElementById('work');
  var email = document.querySelector('.email');
  var lineBox = document.querySelector('.line');
  var $tabs = $('.tabs');
  var circle = $('.circle');
  var contactArrow = document.getElementById("toContact");
  const hoverable = document.querySelectorAll(".hoverable");
  var mouse = {
    x: null,
    y: null
  };
  //FUNCTIONS

  var onMouseMove = (e) => {
    TweenMax.to(".cursor", .4, {
      x: e.clientX - 15,
      y: e.clientY - 15
    })
  }

  // Hover an element
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

    scroll.fromTo(".contact-left p", {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.3

    });

    scroll.fromTo(".line", {
      width: 0
    }, {

      width: "60%",
      duration: 1
    });
  };

  var mainLinkAnim = () => {

    var aboutAnim = gsap.timeline({});
    aboutAnim.fromTo(".about-para p", {
      y: 200,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: .3
    });
    aboutAnim.fromTo('#canvas', {
      opacity: 0
    }, {
      opacity: 1,
      duration: .5
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

  mainLinkAnim();

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
          para: "Project sblakj labkjlhalf kkajlf;kd jaoej ;lkajdfl kajsdlkfj aowjelk;ajfalk;kjsfeoi j;alkwjefoiajskefoeijaslfje;aisejf;lk ja ljo ij ; lkjaf e;li je;oiankjdjj kryjficnah  ihcalke ncahencla h lanceo laknce oian oie joicneoi an oiia noiehry lalasndk i indncb;lal h lsl lh la  ",
          img: "codepen.png"
        }

        break;
      case 'circle2':
        project = {
          title: "Github Pages",
          para: "This project used ablkj abl;ak lkjasdf ;lkja sl;dhbl;kjasd ;laksjdf ",
          img: "github.png"
        }
        break;
      case 'circle3':
        project = {
          title: "Featured Project",
          para: "This project used ablkj abl;ak lkjasdf ;lkja sl;dhbl;kjasd ;laksjdf and it was very enjoyable blah ti blah ",
          img: "sailing.png"
        }
        break;
      default:
    }
    projectTitle.innerHTML = project.title;
    projectBackground.style.backgroundImage = "linear-gradient(to bottom, #47464a, #4b485d, #4e4a70, #4d4c84, #484f99)";
    projectImg.src = project.img;
    gsap.to(".cursorProject", {
      opacity: 1,
      duration: 1
    });
    var text = gsap.timeline({});
    text.fromTo('.portfolio-left', {
      clipPath: "circle(0%)"
    }, {
      x: 0,
      opacity: 1,
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
      transformOrigin: "100% 0%",
      clipPath: "circle(100%)"
    }, {
      opacity: 0,
      duration: 0.5,
      clipPath: "circle(0%)"
    });
    text.to('.circle', {
      opacity: 1
    }, "-=0.5");
  }

  var line = () => {
    var lineAnim = gsap.timeline({});
    lineAnim.to(lineBox, {
      marginTop: "-70px",
      height: "35px"
    });
  };

  var lineReverse = () => {
    var lineAnim2 = gsap.timeline({});
    lineAnim2.to(lineBox, {
      marginTop: "-40px",
      height: "5px"
    });
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

  //EVENT HANDLERS

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
  circle.on("mouseover", projectText);
  circle.on("mouseout", reverseText);
  circle.on("click", function(e) {
    var clicked = e.target.id;
    if (clicked === 'circle1') {
      window.open("https://codepen.io/tallulahh");
    }
    if (clicked === 'circle2') {
      window.open("https://www.github.com/tallulahh");
    }
    if (clicked === 'circle3') {
      window.open("https://tallulahh.github.io/sailing-barcelona/home.html");
    }
  });

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
  email.addEventListener("mouseover", line);
  email.addEventListener("mouseout", lineReverse);
  contactArrow.addEventListener("click", contactScroll);
});
