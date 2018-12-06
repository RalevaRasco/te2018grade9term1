const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 10,
  intellect: 10,
  strength: 10,
  charm: 0,
  weapon: "fists",
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse === "y" || enterHouse === "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  // continue the story
console.log('There is Pennywise and Micheal Myers fighting.')
let enterDoor = READLINE.question(" Do you go in? (yes or no) ");
  if(enterDoor === "y" || enterDoor === "yes"){
  player.courage++;
  player.intellect--;
  console.log(`${player.name} decides to enter. However, they get eaten by Pennywise. HAHA LOSER!`);
    if else(enterDoor === "n" || enterDoor === "no") {
    player.intellect++;
      console.log(`${player.name} decides to be smart and doesn't go in.`);
      console.log(`${player.name} smells a terrible odor and goes to the kitchen. There is a Kitchen Knife.`);
      let recieveKnife = READLINE.question(" What do you do? a. Get Knife. b. Go to the front door. c. Not move. ");
        if (recieveKnife === "a" ||recieveKnife === "A"){
        player.strength++
        console.log(`${player.name} get decapitated by a knife, you dead. The other answers don't count. ;)`);
      }

    }
}

} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
console.log(`${player.name}, you very smart, you won!!!!`);

}
console.log("Thanks for playing!");
