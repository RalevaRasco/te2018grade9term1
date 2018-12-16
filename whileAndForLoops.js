// While loops
let gnomeNome = {name:'Gnome',
            number:'123 123 1234',
      email:'Gnome123@hotmail.com'}

let tyrone = {name:'Tyrone',
        number:'098 098 0987',
      email:'TYR0N3@yahoo.com'}

let tony = {name:'Anthony',
        number:'510 123 0457',
    email:'T0nyBAl0n3y@gmail.com'}

let broTater = {name:'Henry Yam',
            number:'746 647 7437',
    email:'BROTATER12345@csedge.org'}

let bella = {name:'Bella',
          number:'100 100 1000',
          email:'bella@csedge.org'

}

let contacts = [gnomeNome,tyrone,tony,broTater];

contacts.push(bella);
console.log(contacts);

for(let i=0; i<contacts.length; i++;){
  contacts[i].number = '000 000 0000';
}

console.log(contacts);
// while(i=<100); {
// i++;
//  console.log(i);
// }

// // For loops
// for(let i=0; i=<100; i++;){
//   console.log(i);
// }
