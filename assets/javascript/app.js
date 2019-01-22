const path = "assets/clips/";

const ebay = new Audio(`${path}ebay.mp3`);
const excuse = new Audio(`${path}excuse.mp3`);
const smell = new Audio(`${path}smell.mp3`);
const pee = new Audio(`${path}pee.mp3`);
const smell2 = new Audio(`${path}smell2.mp3`);
const steal = new Audio(`${path}steal.mp3`);
const shutup = new Audio(`${path}shutup.mp3`);
const asshole = new Audio(`${path}asshole.mp3`);
const vampires = new Audio(`${path}vampires.mp3`);
const badoozle = new Audio(`${path}badoozle.mp3`);
const girls = new Audio(`${path}girls.mp3`);
const job = new Audio(`${path}job.mp3`);
const odds = new Audio(`${path}odds.mp3`);
const scam = new Audio(`${path}scam.mp3`);
const wtf = new Audio(`${path}wtf.mp3`);
const delusion = new Audio(`${path}delusion.mp3`);
const droopy = new Audio(`${path}droopy.mp3`);
const fuck = new Audio(`${path}fuck.mp3`);
const iMean = new Audio(`${path}i-mean.mp3`);
const beatoff = new Audio(`${path}beatoff.mp3`);
const hung = new Audio(`${path}hung.mp3`);
const laurelhorse = new Audio(`${path}laurelhorse.mp3`);

const items = [
  ebay,
  excuse,
  smell,
  pee,
  smell2,
  steal,
  shutup,
  asshole,
  vampires,
  badoozle,
  girls,
  job,
  odds,
  scam,
  wtf,
  delusion,
  droopy,
  fuck,
  iMean,
  beatoff,
  hung,
  laurelhorse
];

const random = () => {
  const item = items[Math.floor(Math.random() * items.length)];
  item.play();
};

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
    case "laurel":
      scrollToLaurel();
      break;
    case "lotto":
      scrollToLotto();
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
    case "job":
      job.play();
      break;
    case "job-pause":
      job.pause();
      break;
    case "odds":
      odds.play();
      break;
    case "odds-pause":
      odds.pause();
      break;
    case "scam":
      scam.play();
      break;
    case "scam-pause":
      scam.pause();
      break;
    case "girls":
      girls.play();
      break;
    case "girls-pause":
      girls.pause();
      break;
    case "wtf":
      wtf.play();
      break;
    case "wtf-pause":
      wtf.pause();
      break;
    case "delusion":
      delusion.play();
      break;
    case "delusion-pause":
      delusion.pause();
      break;
    case "droopy":
      droopy.play();
      break;
    case "droopy-pause":
      droopy.pause();
      break;
    case "fuck":
      fuck.play();
      break;
    case "fuck-pause":
      fuck.pause();
      break;
    case "i-mean":
      iMean.play();
      break;
    case "i-mean-pause":
      iMean.pause();
      break;
    case "beatoff":
      beatoff.play();
      break;
    case "beatoff-pause":
      beatoff.pause();
      break;
    case "hung":
      hung.play();
      break;
    case "hung-pause":
      hung.pause();
      break;
    case "laurelhorse":
      laurelhorse.play();
      break;
    case "laurelhorse-pause":
      laurelhorse.pause();
      break;
    case "random":
      random();
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
  $("#navbarNav").collapse("hide");
};

const scrollToMomma = () => {
  $("html, body").animate(
    {
      scrollTop: $(".momma").offset().top
    },
    500
  );
  $("#navbarNav").collapse("hide");
};

const scrollToLaurel = () => {
  $("html, body").animate(
    {
      scrollTop: $(".laurel").offset().top
    },
    500
  );
  $("#navbarNav").collapse("hide");
};

const scrollToLotto = () => {
  $("html, body").animate(
    {
      scrollTop: $(".lotto-king").offset().top
    },
    500
  );
  $("#navbarNav").collapse("hide");
};

//AARON hung.mp3
//LAUREL laurelhorse.mp3
