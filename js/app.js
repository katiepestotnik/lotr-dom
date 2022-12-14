console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  'The-Shire',
  'Rivendell',
  'Mordor'
];


// ============
// Chapter 1
// ============

function makeMiddleEarth() {
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
  const middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");
  // 2. use a for loop to iterate over the lands array that does the following:
  for (let index = 0; index < lands.length; index++) {
  //   2a. creates an article tag (there should be one for each land when the loop is done)
      const article = document.createElement("article");
   //   2b. gives each land article an `id` tag of the corresponding land name

      article.setAttribute("id", lands[index]);
   //   2c. includes an h1 with the name of the land inside each land article
      article.innerHTML = `<h1>${lands[index]}</h1>`
 //   2d. appends each land to the middle-earth section
      middleEarth.append(article);
  }

// 3. append the section to the body of the DOM.
document.body.append(middleEarth);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".
//makeMiddleEarth()
// ============
// Chapter 2
// ============
function makeHobbits() {
  console.log("2: makeHobbits");
    // display an `unordered list` of hobbits in the shire
    // hint: create a 'ul' outside the loop into which to append the 'li's
  const unordered = document.createElement('ul')
  for (let i = 0; i < hobbits.length; i++){
  // give each hobbit a class of `hobbit`
    const hobbitsli = document.createElement('li')
    hobbitsli.setAttribute('class', 'hobbit')
    hobbitsli.innerHTML = hobbits[i]
    unordered.append(hobbitsli)
  }
    // hint: get 'The-Shire' by using its id
  const shire = document.getElementById('The-Shire')
  shire.append(unordered)
}
//makeHobbits()
// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".


// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");
  const ring = document.createElement('div')
  // create a div with an id of `'the-ring'`
  ring.setAttribute('id', 'the-ring')
  // give the div a class of `'magic-imbued-jewelry'`
  ring.setAttribute('class','magic-imbued-jewelry')
  // add the ring as a child of `Frodo`
  const hobbits = document.querySelectorAll('.hobbit')
  const frodo = hobbits[0]
  frodo.appendChild(ring)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".


// ============
// Chapter 4
// ============

function makeBaddies() {
  console.log("4: makeBaddies");
  const unordered = document.createElement('ul')
  // display an unordered list of baddies in Mordor
  for (let i = 0; i < baddies.length; i++){
    const badGuys = document.createElement('li')
    badGuys.innerHTML = baddies[i]
    // give each of the baddies a class of "baddy"
    badGuys.setAttribute('class', 'baddy')
    unordered.append(badGuys)
  }
  // remember to append them to Mordor
  const mordor = document.querySelector('#Mordor')
  mordor.append(unordered)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..


// ============
// Chapter 5
// ============

function makeBuddies() {
  console.log("5: makeBuddies");
    // create an `aside` tag
  const aside = document.createElement('aside')
  // put an `unordered list` of the `'buddies'` in the aside
  const unordered = document.createElement('ul')
  for (let i = 0; i < buddies.length; i++){
    const buds = document.createElement('li')
    buds.setAttribute('class', 'fellows')
    buds.innerHTML = buddies[i]
    unordered.append(buds)
  }
  aside.append(unordered)
  // insert your aside as a child element of `rivendell`
  const rivendell = document.querySelector('#Rivendell')
  rivendell.append(aside)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".


// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log("6: leaveTheShire");
  // assemble the `hobbits` and move them to `rivendell`
  const hobbitsDOM = document.querySelectorAll('.hobbit')
  const rivendell = document.querySelector('aside > ul')
  for (let i = 0; i < hobbitsDOM.length; i++){
    rivendell.append(hobbitsDOM[i])
  }
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"


// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log("7: beautifulStranger");
  const strider = document.querySelectorAll('.fellows')
  // change the `'Strider'` text to `'Aragorn'`
  strider[3].innerHTML = 'Aragorn'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"


// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");
  const fellowship = document.createElement('div')
  fellowship.setAttribute('id', 'the-fellowship')
  const buds = document.querySelectorAll('.fellows')
  for (let i = 0; i < buds.length; i++){
    fellowship.append(buds[i])
  }
  const hobbits = document.querySelectorAll('.hobbit')
  for (let i = 0; i < hobbits.length; i++){
    fellowship.append(hobbits[i])
  }
  const rivendell = document.querySelector('#Rivendell')
  rivendell.append(fellowship)
  alert('Fellowship forged!')
  // create a new div called `'the-fellowship'` within `rivendell`
  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they // have joined your party

  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
  console.log("9: theBalrog");
  // change the `'Gandalf'` text to `'Gandalf the White'`
  const gandalf = document.querySelectorAll('.fellows')
  const newGandalf = gandalf[0]
  newGandalf.innerHTML = 'Gandalf the White'
  // apply the following style to the element, make the // background 'white', add a grey border
  newGandalf.style.backgroundColor = 'white'
  newGandalf.style.border = '4px solid grey'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"


// ============
// Chapter 10
// ============

function hornOfGondor() {
  console.log("10: hornOfGondor");
    // pop up an alert that the horn of gondor has been blown
  alert('Horn of Gonder has sounded!')
  // Boromir's been killed by the Uruk-hai!
  alert('Boromir has been killed by the Uruk-hai')
  // Remove `Boromir` from the Fellowship
  const buds = document.querySelectorAll('.fellows')
  const boromir = buds[4]
  boromir.remove()
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"


// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  const hobs = document.querySelectorAll('.hobbit')
  const frodo = hobs[0]
  const sam = hobs[1]
  const mordor = document.querySelector('#Mordor')
  mordor.append(frodo)
  mordor.append(sam)
  // add a div with an id of `'mount-doom'` to `Mordor`
  const mountDoom = document.createElement('div')
  mountDoom.setAttribute('id', 'mount-doom')
  mordor.append(mountDoom)
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"


// ============
// Chapter 12
// ============

function weWantsIt() {
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  const gollum = document.createElement('div')
  gollum.setAttribute('id', 'gollum')
  const mordor = document.querySelector('#Mordor')
  mordor.append(gollum)
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  const ring = document.querySelector('#the-ring')
  gollum.append(ring)
  // Move Gollum into Mount Doom
  const mountDoom = document.querySelector('#mount-doom')
  mountDoom.append(gollum)
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  const ring = document.querySelector('#the-ring')
  const gollum = document.querySelector('#gollum')
  ring.remove()
  gollum.remove()
  // Move all the `hobbits` back to `the shire`
  const shire = document.querySelector('#The-Shire')
  const hobs = document.querySelectorAll('.hobbit')
  for (let i = 0; i < hobs.length; i++){
    shire.append(hobs[i])
  }
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================


document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document.getElementById('chapter-3').addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', makeBaddies);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document.getElementById('chapter-7').addEventListener('click', beautifulStranger);
document.getElementById('chapter-8').addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document.getElementById('chapter-11').addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document.getElementById('chapter-13').addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
