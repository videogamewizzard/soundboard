const path = "assets/clips/";

//DECLARE ARRAY
const items = [];

//CLASS TO LAYOUT CLIP OBJECTS
class Clip {
  constructor(id, displayName, name, character, audio) {
    this.id = id;
    this.displayName = displayName;
    this.name = name;
    this.character = character;
    this.audio = audio;
  }
}

//DECLARE NEW CLIP CONSTRUCTORS
const clip1 = new Clip(
  1,
  "ebay",
  "ebay",
  "Momma K",
  new Audio(`${path}ebay.mp3`)
);
const clip2 = new Clip(
  2,
  "excuse",
  "excuse",
  "Momma K",
  new Audio(`${path}excuse.mp3`)
);
const clip3 = new Clip(
  3,
  "smell",
  "smell",
  "Momma K",
  new Audio(`${path}smell.mp3`)
);
const clip4 = new Clip(4, "pee", "pee", "Momma K", new Audio(`${path}pee.mp3`));
const clip5 = new Clip(
  5,
  "Smell(2)",
  "smell2",
  "Momma K",
  new Audio(`${path}smell2.mp3`)
);
const clip6 = new Clip(
  6,
  "steal",
  "steal",
  "Momma K",
  new Audio(`${path}steal.mp3`)
);
const clip7 = new Clip(
  7,
  "Shut Up",
  "shutup",
  "Momma K",
  new Audio(`${path}shutup.mp3`)
);
const clip8 = new Clip(
  8,
  "asshole",
  "asshole",
  "Momma K",
  new Audio(`${path}asshole.mp3`)
);
const clip9 = new Clip(
  9,
  "vampires",
  "vampires",
  "Wizzard",
  new Audio(`${path}vampires.mp3`)
);
const clip10 = new Clip(
  10,
  "badoozle",
  "badoozle",
  "Wizzard",
  new Audio(`${path}badoozle.mp3`)
);
const clip11 = new Clip(
  11,
  "girls",
  "girls",
  "Wizzard",
  new Audio(`${path}girls.mp3`)
);
const clip12 = new Clip(
  12,
  "job",
  "job",
  "Wizzard",
  new Audio(`${path}job.mp3`)
);
const clip13 = new Clip(
  13,
  "odds",
  "odds",
  "Wizzard",
  new Audio(`${path}odds.mp3`)
);
const clip14 = new Clip(
  14,
  "scam",
  "scam",
  "Wizzard",
  new Audio(`${path}scam.mp3`)
);
const clip15 = new Clip(
  15,
  "WTF",
  "wtf",
  "Momma K",
  new Audio(`${path}wtf.mp3`)
);
const clip16 = new Clip(
  16,
  "delusion",
  "delusion",
  "Wizzard",
  new Audio(`${path}delusion.mp3`)
);
const clip17 = new Clip(
  17,
  "droopy",
  "droopy",
  "Lotto King",
  new Audio(`${path}droopy.mp3`)
);
const clip18 = new Clip(
  18,
  "fuck",
  "fuck",
  "Wizzard",
  new Audio(`${path}fuck.mp3`)
);
const clip19 = new Clip(
  19,
  "I Mean",
  "mean",
  "Wizzard",
  new Audio(`${path}i-mean.mp3`)
);
const clip20 = new Clip(
  20,
  "Beat Off",
  "beatoff",
  "Momma K",
  new Audio(`${path}beatoff.mp3`)
);
const clip21 = new Clip(
  21,
  "hung",
  "hung",
  "Wizzard",
  new Audio(`${path}hung.mp3`)
);
const clip22 = new Clip(
  22,
  "Horse",
  "laurelhorse",
  "Laurel",
  new Audio(`${path}laurelhorse.mp3`)
);
const clip23 = new Clip(
  23,
  "retard",
  "retard",
  "Momma K",
  new Audio(`${path}retard.mp3`)
);
const clip24 = new Clip(
  24,
  "rotate",
  "rotate",
  "Momma K",
  new Audio(`${path}rotate.mp3`)
);
const clip25 = new Clip(
  25,
  "thief",
  "thief",
  "Momma K",
  new Audio(`${path}thief.mp3`)
);
const clip26 = new Clip(
  26,
  "grease",
  "grease",
  "Wizzard",
  new Audio(`${path}grease.mp3`)
);
const clip27 = new Clip(
  27,
  "negative",
  "negative",
  "Laurel",
  new Audio(`${path}negative.mp3`)
);
const clip28 = new Clip(
  28,
  "cunt",
  "cunt",
  "Laurel",
  new Audio(`${path}cunt.mp3`)
);
const clip29 = new Clip(
  29,
  "cats",
  "cats",
  "Momma K",
  new Audio(`${path}cats.mp3`)
);
const clip30 = new Clip(
  30,
  "siren",
  "siren",
  "Wizzard",
  new Audio(`${path}siren.mp3`)
);
const clip31 = new Clip(
  31,
  "swallows",
  "swallows",
  "Krazy K",
  new Audio(`${path}swallows.mp3`)
);
const clip32 = new Clip(
  32,
  "needs",
  "needs",
  "Wizzard",
  new Audio(`${path}needs.mp3`)
);
const clip33 = new Clip(
  33,
  "bastards",
  "bastards",
  "Wizzard",
  new Audio(`${path}bastards.mp3`)
);
const clip34 = new Clip(
  34,
  "lies",
  "lies",
  "Wizzard",
  new Audio(`${path}lies.mp3`)
);
const clip35 = new Clip(
  35,
  "ungrateful",
  "ungrateful",
  "Momma K",
  new Audio(`${path}ungrateful.mp3`)
);
const clip36 = new Clip(
  36,
  "broke",
  "broke",
  "Momma K",
  new Audio(`${path}broke.mp3`)
);
const clip37 = new Clip(
  37,
  "asian",
  "asian",
  "Lotto King",
  new Audio(`${path}asian.mp3`)
);
const clip38 = new Clip(
  38,
  "ride",
  "ride",
  "Momma K",
  new Audio(`${path}ride.mp3`)
);
const clip39 = new Clip(
  39,
  "Broke Ass",
  "brokeass",
  "Justin Payne Goebbels",
  new Audio(`${path}brokeass.mp3`)
);
const clip40 = new Clip(
  40,
  "Fuck!",
  "cuntsharsky",
  "Electrik Eevee",
  new Audio(`${path}cuntsharsky.mp3`)
);
const clip41 = new Clip(
  41,
  "Eat It",
  "eatit",
  "Blowhardish",
  new Audio(`${path}eatit.mp3`)
);
const clip42 = new Clip(
  42,
  "Suck It",
  "suckit",
  "Momma K",
  new Audio(`${path}suckit.mp3`)
);
const clip43 = new Clip(
  43,
  "gold",
  "gold",
  "Wizzard",
  new Audio(`${path}gold.mp3`)
);
const clip44 = new Clip(
  44,
  "Fart!",
  "blowfart",
  "Blowhardish",
  new Audio(`${path}blowfart.mp3`)
);
const clip45 = new Clip(
  45,
  "claw",
  "claw",
  "Laurel",
  new Audio(`${path}claw.mp3`)
);

const clip46 = new Clip(
  46,
  "Baby Talk",
  "babytalk",
  "Wizzard",
  new Audio(`${path}babytalk.mp3`)
);

const clip47 = new Clip(
  47,
  "Bill Collector",
  "billcollector",
  "Momma K",
  new Audio(`${path}billcollector.mp3`)
);

const clip48 = new Clip(
  48,
  "Wizzard Math",
  "wizzardmath",
  "Wizzard",
  new Audio(`${path}wizzardmath.mp3`)
);

const clip49 = new Clip(
  49,
  "Fuck Off!",
  "fuckoff",
  "DJ Pam",
  new Audio(`${path}fuckoff.mp3`)
);

const clip50 = new Clip(
  50,
  "Look At Me",
  "lookatme",
  "Aussie Outlaw",
  new Audio(`${path}lookatme.mp3`)
);

const clip51 = new Clip(
  51,
  "Mom",
  "mom",
  "Blowhardish",
  new Audio(`${path}mom.mp3`)
);

const clip52 = new Clip(
  52,
  "$6 Combo",
  "combo",
  "DJ Pam",
  new Audio(`${path}combo.mp3`)
);

const clip53 = new Clip(
  53,
  "Weight",
  "weight",
  "Wizzard",
  new Audio(`${path}weight.mp3`)
);

const clip54 = new Clip(
  54,
  "Delete",
  "delete",
  "Wizzard",
  new Audio(`${path}delete.mp3`)
);

const clip55 = new Clip(
  55,
  "Just Wait...",
  "getyou",
  "Wizzard",
  new Audio(`${path}getyou.mp3`)
);

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
  clip45,
  clip46,
  clip47,
  clip48,
  clip49,
  clip50,
  clip51,
  clip52,
  clip53,
  clip54,
  clip55
);

//COMPARE FUNCTION FOR SORT
const compare = (a, b) => {
  if (a.character < b.character) return 1;
  if (a.character > b.character) return -1;
  return 0;
};

//SORT
items.sort(compare);

//PLAY RANDOM CLIP FUNCTION
const random = () => {
  const item = items[Math.floor(Math.random() * items.length)].audio;
  item.play();
};

//CLICK FUNCTION FOR RANDOM CLIP
$(".random").on("click", event => {
  event.preventDefault();
  random();
  $("#navbarNav").collapse("hide");
});

//CLICK FUNCTION TO SCROLL TO SECTIONS
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

//CLICK FUNCTION FOR THEME
$(".theme").on("click", event => {
  event.preventDefault();
  if ($("body").hasClass("bg-light")) {
    $("body").removeClass("bg-light");
    $(".navbar-brand").removeClass("text-dark");
    $(".navbar").removeClass(`bg-light navbar-light`);
    $(".card").removeClass("bg-light");
    $(".card-header").removeClass("text-dark");
    $(".hidden").removeClass("text-light");
    $("body").addClass("bg-dark");
    $(".navbar-brand").addClass("text-light");
    $(".navbar").addClass(`navbar-dark bg-dark`);
    $(".card").addClass(`bg-dark border-light`);
    $(".card-header").addClass("text-light");
    $(".hidden").addClass("text-dark");
  } else if ($("body").hasClass("bg-dark")) {
    $("body").removeClass("bg-dark");
    $(".navbar-brand").removeClass("text-light");
    $(".navbar").removeClass(`bg-dark navbar-dark`);
    $(".card").removeClass(`bg-dark border-light`);
    $(".card-header").removeClass("text-light");
    $(".hidden").removeClass("text-dark");
    $("body").addClass("bg-light");
    $(".navbar-brand").addClass("text-dark");
    $(".navbar").addClass(`bg-light navbar-light`);
    $(".card-header").addClass("text-dark");
    $(".hidden").addClass("text-light");
  }
});

//FUNCTION TO CAPITALIZE FIRST LETTER IN CLIP OBJECTS DISPLAYNAME BC I'M LAZY BUT NOT WIZZARD LAZY

const capitalizeFirst = string => {
  return string[0].toUpperCase() + string.slice(1);
};

//PRINT HTML
const layout = () => {
  items.forEach(item => {
    const { name, displayName, character } = item;
    const columnDiv = $("<div>").addClass("col-md-3 col-12");
    const cardDiv = $("<div>");
    cardDiv.addClass("card shadow m-2").appendTo(columnDiv);
    const cardHeader = $("<div>");
    cardHeader
      .addClass("card-header")
      .text(character)
      .appendTo(cardDiv);
    const cardBody = $("<div>");
    cardBody.addClass("card-body").appendTo(cardDiv);
    const playButton = $("<button>");
    playButton
      .addClass("btn btn-primary animated btn-lg btn-block play")
      .val(name)

      .html(
        `<i class="fas fa-play-circle ml-2"></i> ${capitalizeFirst(
          displayName
        )}`
      )
      .appendTo(cardBody);
    const pauseButton = $("<button>");
    pauseButton
      .addClass("btn btn-danger animated btn-lg btn-block stop")
      .val(name)
      .html(`<i class="far fa-pause-circle ml-2"></i> Pause`)
      .appendTo(cardBody);
    $(".start").append(columnDiv);
    doExtra(item, cardDiv, cardHeader);
  });
};

layout();

//CLICK FUNCTION TO PLAY CLIPS
$(".play").on("click", event => {
  event.preventDefault();
  $(event.target).addClass("rubberBand");
  const { value } = event.target;
  items.forEach(clip => {
    const { name, audio } = clip;
    if (name === value) {
      audio.play();
    } else {
      audio.pause();
    }
  });
  window.setTimeout(() => {
    $(event.target).removeClass("rubberBand");
  }, 2000);
});

//CLICK FUNCTION TO PAUSE CLIPS
$(".stop").on("click", event => {
  event.preventDefault();
  $(event.target).addClass("rubberBand");
  const { value } = event.target;
  items.forEach(clip => {
    const { name, audio } = clip;
    if (name === value) {
      audio.pause();
    }
  });
  window.setTimeout(() => {
    $(event.target).removeClass("rubberBand");
  }, 2000);
});

//ADD LINKS TO HEADERS AND APPLY SCROLL CLASSES
function doExtra(item, cardDiv, cardHeader) {
  const { name } = item;
  if (name === "vampires") {
    $(cardDiv).addClass("aaron");
  } else if (name === "negative") {
    $(cardDiv).addClass("laurel");
  } else if (name === "ebay") {
    $(cardDiv).addClass("momma");
  } else if (name === "droopy") {
    $(cardDiv).addClass("lotto");
    const youTubeLink = $("<a>");
    youTubeLink.text("Lotto King").attr({
      href: "https://youtube.com/lotteryking",
      target: "_blank"
    });
    $(cardHeader).html(youTubeLink);
  } else if (name === "swallows") {
    $(cardDiv).addClass("other");
  } else if (name === "eatit") {
    const youTubeLink = $("<a>");
    youTubeLink.text("Blowhardish").attr({
      href: "https://youtube.com/blowhardish",
      target: "_blank"
    });
    $(cardHeader).html(youTubeLink);
  } else if (name === "cuntsharsky") {
    const youTubeLink = $("<a>");
    youTubeLink.text("Electrik Eevee").attr({
      href: "https://youtube.com/electrikeevee",
      target: "_blank"
    });
    $(cardHeader).html(youTubeLink);
  } else if (name === "badoozle") {
    const youTubeLink = $("<a>");
    youTubeLink.text("Wizzard").attr({
      href: "https://youtube.com/aaronkosharsky",
      target: "_blank"
    });
    $(cardHeader).html(youTubeLink);
  } else if (name === "lookatme") {
    const youTubeLink = $("<a>");
    youTubeLink.text("Aussie Outlaw").attr({
      href: "https://youtube.com/user/OutlawMCC",
      target: "_blank"
    });
    $(cardHeader).html(youTubeLink);
  }
}

const kkeys = [],
  konami = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {
  kkeys.push(e.keyCode);

  if (kkeys.toString().indexOf(konami) >= 0) {
    $(document).unbind("keydown", arguments.callee);
    $("#myModal").modal();
    typeWriter();
    scam.play();
  }
});

const scam = new Audio(`${path}hahaha.mp3`);

var i = 0;
var txt = `SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM
  SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM
  SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM SCAM`;
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
