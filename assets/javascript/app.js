const path = "assets/clips/";
//START AUDIO VARIABLES
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
const retard = new Audio(`${path}retard.mp3`);
const rotate = new Audio(`${path}rotate.mp3`);
const thief = new Audio(`${path}thief.mp3`);
const grease = new Audio(`${path}grease.mp3`);
const negative = new Audio(`${path}negative.mp3`);
const cunt = new Audio(`${path}cunt.mp3`);
const cats = new Audio(`${path}cats.mp3`);
const siren = new Audio(`${path}siren.mp3`);
const swallows = new Audio(`${path}swallows.mp3`);
const needs = new Audio(`${path}needs.mp3`);
const bastards = new Audio(`${path}bastards.mp3`);
const lies = new Audio(`${path}lies.mp3`);
const ungrateful = new Audio(`${path}ungrateful.mp3`);
const broke = new Audio(`${path}broke.mp3`);
const asian = new Audio(`${path}asian.mp3`);
const ride = new Audio(`${path}ride.mp3`);
const brokeass = new Audio(`${path}brokeass.mp3`);
const cuntsharsky = new Audio(`${path}cuntsharsky.mp3`);
const eatIt = new Audio(`${path}eatit.mp3`);
const suckIt = new Audio(`${path}suckit.mp3`);
const gold = new Audio(`${path}gold.mp3`);
const claw = new Audio(`${path}claw.mp3`);
const blowfart = new Audio(`${path}blowfart.mp3`);

//DECLARE ARRAY
const items = [];

//CLASS TO LAYOUT CLIP OBJECTS
class Clip {
  constructor(id, file, name, character) {
    this.file = file;
    this.id = id;
    this.name = name;
    this.character = character;
  }
}

//DECLARE NEW CLIP CONSTRUCTORS
const clip1 = new Clip(1, ebay, "ebay", "Momma K");
const clip2 = new Clip(2, excuse, "excuse", "Momma K");
const clip3 = new Clip(3, smell, "smell", "Momma K");
const clip4 = new Clip(4, pee, "pee", "Momma K");
const clip5 = new Clip(5, smell2, "smell2", "Momma K");
const clip6 = new Clip(6, steal, "steal", "Momma K");
const clip7 = new Clip(7, shutup, "shutup", "Momma K");
const clip8 = new Clip(8, asshole, "asshole", "Momma K");
const clip9 = new Clip(9, vampires, "vampires", "Wizzard");
const clip10 = new Clip(10, badoozle, "badoozle", "Wizzard");
const clip11 = new Clip(11, girls, "girls", "Wizzard");
const clip12 = new Clip(12, job, "job", "Wizzard");
const clip13 = new Clip(13, odds, "odds", "Wizzard");
const clip14 = new Clip(14, scam, "scam", "Wizzard");
const clip15 = new Clip(15, wtf, "wtf", "Momma K");
const clip16 = new Clip(16, delusion, "delusion", "Wizzard");
const clip17 = new Clip(17, droopy, "droopy", "Lotto King");
const clip18 = new Clip(18, fuck, "fuck", "Wizzard");
const clip19 = new Clip(19, iMean, "mean", "Wizzard");
const clip20 = new Clip(20, beatoff, "beatoff", "Momma K");
const clip21 = new Clip(21, hung, "hung", "Wizzard");
const clip22 = new Clip(22, laurelhorse, "laurelhorse", "Laurel");
const clip23 = new Clip(23, retard, "retard", "Momma K");
const clip24 = new Clip(24, rotate, "rotate", "Momma K");
const clip25 = new Clip(25, thief, "thief", "Momma K");
const clip26 = new Clip(26, grease, "grease", "Wizzard");
const clip27 = new Clip(27, negative, "negative", "Laurel");
const clip28 = new Clip(28, cunt, "cunt", "Laurel");
const clip29 = new Clip(29, cats, "cats", "Momma K");
const clip30 = new Clip(30, siren, "siren", "Wizzard");
const clip31 = new Clip(31, swallows, "swallows", "Krazy K");
const clip32 = new Clip(32, needs, "needs", "Wizzard");
const clip33 = new Clip(33, bastards, "bastards", "Wizzard");
const clip34 = new Clip(34, lies, "lies", "Wizzard");
const clip35 = new Clip(35, ungrateful, "ungrateful", "Momma K");
const clip36 = new Clip(36, broke, "broke", "Momma K");
const clip37 = new Clip(37, asian, "asian", "Lotto King");
const clip38 = new Clip(38, ride, "ride", "Momma K");
const clip39 = new Clip(39, brokeass, "brokeass", "Justin Payne Goebbels");
const clip40 = new Clip(40, cuntsharsky, "cuntsharsky", "Electrik Eevee");
const clip41 = new Clip(41, eatIt, "eatit", "Blowhardish");
const clip42 = new Clip(42, suckIt, "suckit", "Momma K");
const clip43 = new Clip(43, gold, "gold", "Wizzard");
const clip44 = new Clip(44, blowfart, "blowfart", "Blowhardish");
const clip45 = new Clip(45, claw, "claw", "Laurel");

//PUSH INTO ARRAY
items.push(
  clip1,
  clip2,
  clip3,
  clip4,
  clip5,
  clip6,
  clip7,
  clip8,
  clip9,
  clip10,
  clip11,
  clip12,
  clip13,
  clip14,
  clip15,
  clip16,
  clip17,
  clip18,
  clip19,
  clip20,
  clip21,
  clip22,
  clip23,
  clip24,
  clip25,
  clip26,
  clip27,
  clip28,
  clip29,
  clip30,
  clip31,
  clip32,
  clip33,
  clip34,
  clip35,
  clip36,
  clip37,
  clip38,
  clip39,
  clip40,
  clip41,
  clip42,
  clip43,
  clip44,
  clip45
);

const compare = (a, b) => {
  if (a.character < b.character) return 1;
  if (a.character > b.character) return -1;
  return 0;
};

items.sort(compare);

const random = () => {
  const item = items[Math.floor(Math.random() * items.length)].file;
  item.play();
};

$(".random").on("click", event => {
  event.preventDefault();
  random();
  $("#navbarNav").collapse("hide");
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

$(".theme").on("click", event => {
  event.preventDefault();
  if ($("body").hasClass("bg-light")) {
    $("body").removeClass("bg-light");
    $(".navbar-brand").removeClass("text-dark");
    $(".navbar").removeClass(`bg-light navbar-light`);
    $(".card").removeClass("bg-light");
    $(".card-header").removeClass("text-dark");
    $("body").addClass("bg-dark");
    $(".navbar-brand").addClass("text-light");
    $(".navbar").addClass(`navbar-dark bg-dark`);
    $(".card").addClass(`bg-dark border-light`);
    $(".card-header").addClass("text-light");
  } else if ($("body").hasClass("bg-dark")) {
    $("body").removeClass("bg-dark");
    $(".navbar-brand").removeClass("text-light");
    $(".navbar").removeClass(`bg-dark navbar-dark`);
    $(".card").removeClass(`bg-dark border-light`);
    $(".card-header").removeClass("text-light");
    $("body").addClass("bg-light");
    $(".navbar-brand").addClass("text-dark");
    $(".navbar").addClass(`bg-light navbar-light`);
    $(".card-header").addClass("text-dark");
  }
});

const capitalizeFirst = string => {
  return string[0].toUpperCase() + string.slice(1);
};

const layout = () => {
  items.forEach(item => {
    console.log(item.name);
    columnDiv = $("<div>").addClass("col-md-3 col-12");
    cardDiv = $("<div>");
    cardDiv.addClass("card shadow m-2").appendTo(columnDiv);
    cardHeader = $("<div>");
    cardHeader
      .addClass("card-header")
      .text(item.character)
      .appendTo(cardDiv);
    cardBody = $("<div>");
    cardBody.addClass("card-body").appendTo(cardDiv);
    playButton = $("<button>");
    playButton
      .addClass("btn btn-primary animated btn-lg btn-block play")
      .val(item.name)

      .html(
        `<i class="fas fa-play-circle ml-2"></i> ${capitalizeFirst(item.name)}`
      )
      .appendTo(cardBody);
    pauseButton = $("<button>");
    pauseButton
      .addClass("btn btn-danger animated btn-lg btn-block stop")
      .val(item.name)
      .html(`<i class="far fa-pause-circle ml-2"></i> Pause`)
      .appendTo(cardBody);
    $(".start").append(columnDiv);
    if (item.character === "Wizzard") {
      $(cardDiv).addClass("aaron");
    } else if (item.character === "Laurel") {
      $(cardDiv).addClass("laurel");
    } else if (item.character === "Momma K") {
      $(cardDiv).addClass("momma");
    } else if (item.character === "Lotto King") {
      $(cardDiv).addClass("lotto");
    } else if (item.character === "Blowhardish") {
      $(cardDiv).addClass("other");
    }
  });
};

layout();

$(".play").on("click", event => {
  event.preventDefault();
  console.log(event.target);
  $(event.target).addClass("rubberBand");
  const { value } = event.target;
  items.forEach(clip => {
    const { name, file } = clip;
    if (name === value) {
      file.play();
    } else {
      file.pause();
    }
  });
  window.setTimeout(() => {
    $(event.target).removeClass("rubberBand");
  }, 2000);
});

$(".stop").on("click", event => {
  event.preventDefault();
  $(event.target).addClass("rubberBand");
  const { value } = event.target;
  items.forEach(clip => {
    const { name, file } = clip;
    if (name === value) {
      file.pause();
    }
  });
  window.setTimeout(() => {
    $(event.target).removeClass("rubberBand");
  }, 2000);
});
