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
  { file: ebay, name: "ebay" },
  { file: excuse, name: "excuse" },
  { file: smell, name: "smell" },
  { file: pee, name: "pee" },
  { file: smell2, name: "smell2" },
  { file: steal, name: "steal" },
  { file: shutup, name: "shutup" },
  { file: asshole, name: "asshole" },
  { file: vampires, name: "vampires" },
  { file: badoozle, name: "badoozle" },
  { file: girls, name: "girls" },
  { file: job, name: "job" },
  { file: odds, name: "odds" },
  { file: scam, name: "scam" },
  { file: wtf, name: "wtf" },
  { file: delusion, name: "delusion" },
  { file: droopy, name: "droopy" },
  { file: fuck, name: "fuck" },
  { file: iMean, name: "mean" },
  { file: beatoff, name: "beatoff" },
  { file: hung, name: "hung" },
  { file: laurelhorse, name: "laurelhorse" }
];

const random = () => {
  const item = items[Math.floor(Math.random() * items.length)].file;
  item.play();
};

$(".random").on("click", event => {
  event.preventDefault();
  random();
});

$(".play").on("click", event => {
  event.preventDefault();
  const { value } = event.target;
  items.forEach(clip => {
    if (clip.name === value) {
      clip.file.play();
    } else {
      clip.file.pause();
    }
  });
});

$(".stop").on("click", event => {
  event.preventDefault();
  const { value } = event.target;
  items.forEach(clip => {
    if (clip.name === value) {
      clip.file.pause();
    }
  });
});

$(".name").on("click", event => {
  event.preventDefault();
  const { value } = event.target;
  const className = `.${value}`;
  $("html, body").animate(
    {
      scrollTop: $(className).offset().top
    },
    500
  );
  $("#navbarNav").collapse("hide");
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
