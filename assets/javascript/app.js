const ebay = new Audio("assets/clips/ebay.mp3");
const excuse = new Audio("assets/clips/excuse.mp3");
const smell = new Audio("assets/clips/smell.mp3");
const pee = new Audio("assets/clips/pee.mp3");
const smell2 = new Audio("assets/clips/smell2.mp3");
const steal = new Audio("assets/clips/steal.mp3");
const shutup = new Audio("assets/clips/shutup.mp3");
const asshole = new Audio("assets/clips/asshole.mp3");

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
  }
});
