const ebay = new Audio("assets/clips/ebay.mp3");
const excuse = new Audio("assets/clips/excuse.mp3");
const smell = new Audio("assets/clips/smell.mp3");
const pee = new Audio("assets/clips/pee.mp3");
const smell2 = new Audio("assets/clips/smell2.mp3");
const steal = new Audio("assets/clips/steal.mp3");
const shutup = new Audio("assets/clips/shutup.mp3");
const asshole = new Audio("assets/clips/asshole.mp3");
const vampires = new Audio("assets/clips/vampires.mp3");
const badoozle = new Audio("assets/clips/badoozle.mp3");
const girls = new Audio("assets/clips/girls.mp3");

$("button").on("click", event => {
  event.preventDefault();
  const { value } = event.target;
  switch (value) {
    case "ebay":
      ebay.play();
      break;
    case "ebay-pause":
      ebay.pause();
      break;
    case "excuse":
      excuse.play();
      break;
    case "excuse-pause":
      excuse.pause();
      break;
    case "smell":
      smell.play();
      break;
    case "smell-pause":
      smell.pause();
      break;
    case "pee":
      pee.play();
      break;
    case "pee-pause":
      pee.pause();
    case "smell2":
      smell2.play();
      break;
    case "smell2-pause":
      smell2.pause();
      break;
    case "steal":
      steal.play();
      break;
    case "steal-pause":
      steal.pause();
      break;
    case "shutup":
      shutup.play();
      break;
    case "steal-pause":
      shutup.pause();
      break;
    case "asshole":
      asshole.play();
      break;
    case "asshole-pause":
      asshole.pause();
      break;
    case "aaron":
      scrollToAaron();
      break;
    case "momma":
      scrollToMomma();
      break;
    case "vampires":
      vampires.play();
      break;
    case "asshole-pause":
      vampires.pause();
      break;
    case "badoozle":
      badoozle.play();
      break;
    case "badoozle-pause":
      badoozle.pause();
      break;
    case "girls":
      girls.play();
      break;
    case "girls-pause":
      girls.pause();
      break;
  }
});

const scrollToAaron = () => {
  $("html, body").animate(
    {
      scrollTop: $(".aaron").offset().top
    },
    500
  );
};

const scrollToMomma = () => {
  $("html, body").animate(
    {
      scrollTop: $(".momma").offset().top
    },
    500
  );
};
