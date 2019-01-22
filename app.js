//  Simple Timer Solution

// Step 1:
// Use the following Audio file below:

const ebay = new Audio("ebay.mp3");
const excuse = new Audio("excuse.mp3");
const smell = new Audio("smell.mp3");

//  Step 2:
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

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
  }
});

/*$(".stop").on("click", event => {
  event.preventDefault();
  const { value } = event.target;
  switch (value) {
    case "ebays-top":
      ebay.pause();
      break;
    case "excuse-stop":
      excuse.play();
      break;
    case "smell":
      smell.play();
      break;
  }
});*/
