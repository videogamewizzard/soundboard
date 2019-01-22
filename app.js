const ebay = new Audio("ebay.mp3");
const excuse = new Audio("excuse.mp3");
const smell = new Audio("smell.mp3");
const pee = new Audio("pee.mp3");

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
      break;
  }
});
