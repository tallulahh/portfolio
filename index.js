var mainLink = document.getElementById("mainLink");
var title = document.getElementById('project-title');
var para = document.getElementById('project-para');
var projectImg = document.getElementById('portfolio-left');
var portfolio = document.getElementById('portfolio');
var circle1 = document.getElementById('circle1');
var circle2 = document.getElementById('circle2');
var circle3 = document.getElementById('circle3');
var aboutli = document.getElementById('aboutli');
var portfolioli = document.getElementById('portfolioli');
var contactli = document.getElementById('contactli');
var work = document.getElementById('work');
var email = document.querySelector('.contact-box');
var $tabs = $('.tabs');
var $panels = $('.panel');
var $title = $('.title');
var video = document.querySelector('video');

var t7 = gsap.timeline({
  paused: true
});
t7.fromTo(".about-para p", {
  y: 200,
  opacity: 0
}, {
  y: 0,
  opacity: 1,
  duration: 1.5,
  stagger: .3
});

window.addEventListener("scroll", () => {
  var scrollable = document.documentElement.scrollHeight - window.innerHeight;
  var scrolled = window.scrollY;

  if (Math.ceil(scrolled) >= 700 && Math.ceil(scrolled) < 1470) {
    t7.play();
    $tabs.find('.active').removeClass('active');
    $('#aboutli').addClass("active");
  } else if (Math.ceil(scrolled) >= 1470 && Math.ceil(scrolled) < 2230) {
    $tabs.find('.active').removeClass('active');
    $('#portfolioli').addClass("active");
  } else if (Math.ceil(scrolled) >= 2230) {
    $tabs.find('.active').removeClass('active');
    $('#contactli').addClass("active");
  }

});

$tabs.on('click', 'a', function(e) {
  e.preventDefault();
  var id = $(this).attr('href');
  console.log(id);
  var scroll = gsap.timeline({});
  scroll.to(window, {
    duration: 1.5,
    scrollTo: id
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
    stagger: 0.3
  });
  balls.play();

});

var t4 = gsap.timeline({
  repeat: -1,
  yoyo: true,
  duration: 1
});
var t5 = gsap.timeline({
  repeat: -1,
  yoyo: true,
  duration: 1,
  delay: 0.1
});
var t6 = gsap.timeline({
  repeat: -1,
  yoyo: true,
  duration: 1,
  delay: 0.1
});

t4.to(circle1, {
    x: 3
  })
  .to(circle1, {
    x: 0
  });
t5.to(circle2, {
    x: -3
  })
  .to(circle2, {
    x: 0
  });
t6.to(circle3, {
    x: 3
  })
  .to(circle3, {
    x: 0
  });


var scroll = () => {
  // button1.classList.add('squared');
  var scroll = gsap.timeline({});
  scroll.to(window, {
    duration: 1,
    scrollTo: "#portfolio"
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
    stagger: 0.3
  });



}

// var aboutScroll = () => {
//   var scroll = gsap.timeline({});
//   scroll.to(window, {
//     duration: 1.5,
//     scrollTo: ".about"
//   });
// }
var contactScroll = () => {
  var scroll = gsap.timeline({});
  scroll.to(window, {
    duration: 1.5,
    scrollTo: ".contact"
  });
  scroll.fromTo("#contact-title", {
    x: -300
  }, {
    x: 0,
    duration: 1
  });
  scroll.fromTo(".left", {
    x: 900,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 1.5
  });
  scroll.fromTo(".right", {
    x: -500,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 1
  });
  scroll.fromTo(".titles", {
    x: 40,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: .5
  })
}

var projectText = () => {
  var text = gsap.timeline({});
  // text.fromTo(video, {
  //   scale: 1,
  //   transformOrigin: "100% 0%"
  // }, {
  //   x: 0,
  //   opacity: 0.4,
  //   duration: 0.5
  // });
  text.fromTo('.portfolio-left', {
    scale: 1,
    transformOrigin: "100% 0%"
  }, {
    x: 0,
    opacity: 1,
    duration: 1
  });
  text.to('.circle', {
    opacity: 0.2
  }, "-=0.9");

  // balls.play();
}

var mainLinkAnim = () => {
  var aboutAnim = gsap.timeline({});
  aboutAnim.to('#canvas2', {
    opacity: 0,
    duration: 0.5
  });
  aboutAnim.to('#name', {
    opacity: 0,
    duration: 0.5
  });
  aboutAnim.to(window, {
    duration: 1.5,
    scrollTo: ".about"
  });
  aboutAnim.to('#canvas2', {
    opacity: 1
  });
  aboutAnim.to('#name', {
    opacity: 1
  });

};

var reverseText = () => {
  var text = gsap.timeline({});
  text.fromTo('.portfolio-left', {
    opacity: 1,
    transformOrigin: "100% 0%"
  }, {
    opacity: 0,
    duration: 0.5
  });
  text.to('.circle', {
    opacity: 1
  }, "-=0.5");
}

var project1Text = () => {
  var project1 = {
    title: "My Projects on CodePen.io",
    para: "Project sblakj labkjlhalf kkajlf;kd jaoej ;lkajdfl kajsdlkfj aowjelk;ajfalk;kjsfeoi j;alkwjefoiajskefoeijaslfje;aisejf;lk ja ljo ij ; lkjaf e;li je;oiankjdjj kryjficnah  ihcalke ncahencla h lanceo laknce oian oie joicneoi an oiia noiehry lalasndk i indncb;lal h lsl lh la  ",
    // video: "SailingBarcelona.mp4"
  };
  title.innerHTML = project1.title;
  // para.innerHTML = project1.para;
  projectImg.style.backgroundImage = "linear-gradient(to right bottom, #0f1133, #111339, #131640, #151846, #171a4d)";
  // video.src = project1.video;

  projectText();
}

var project2Text = () => {
  var project2 = {
    title: "My Github Pages",
    para: "This project used ablkj abl;ak lkjasdf ;lkja sl;dhbl;kjasd ;laksjdf ",
    // video: "Todolist.mp4"
  };

  title.innerHTML = project2.title;
  // para.innerHTML = project2.para;
  projectImg.style.backgroundImage = "linear-gradient(to bottom, #47464a, #4b485d, #4e4a70, #4d4c84, #484f99)";
  // video.src = project2.video;
  projectText();
}

var project3Text = () => {
  var project3 = {
    title: "Featured Project | Sailing Barcelona",
    para: "This project used ablkj abl;ak lkjasdf ;lkja sl;dhbl;kjasd ;laksjdf and it was very enjoyable blah ti blah ",
    // video: "nieve1.mp4"
  };
  title.innerHTML = project3.title;
  // para.innerHTML = project3.para;
  projectImg.style.backgroundImage = "linear-gradient(to right bottom, #0f1133, #111339, #131640, #151846, #171a4d)";
  // video.src = project3.video;
  projectText();
}

var line = () => {
  var lineAnim = gsap.timeline({});
  lineAnim.to(email, {
    top: "60%",
    height: "100px"
  });
};

var lineReverse = () => {
  var lineAnim2 = gsap.timeline({});
  lineAnim2.to(email, {
    top: "78%",
    height: "10px"
  });
};

circle1.addEventListener("mouseover", project1Text);
circle1.addEventListener("mouseout", reverseText);
circle1.addEventListener("click", () => {
  window.open("https://codepen.io/tallulahh");
});
circle2.addEventListener("mouseover", project2Text);
circle2.addEventListener("mouseout", reverseText);
circle2.addEventListener("click", () => {
  window.open("https://www.github.com/tallulahh");
});
circle3.addEventListener("mouseover", project3Text);
circle3.addEventListener("mouseout", reverseText);
circle3.addEventListener("click", () => {
  window.open("https://tallulahh.github.io/sailing-barcelona/home.html");
});
work.addEventListener("click", scroll);
email.addEventListener("mouseover", line);
email.addEventListener("mouseout", lineReverse);
mainLink.addEventListener("click", mainLinkAnim);
