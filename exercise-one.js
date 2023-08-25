const laa = 'Angels';
const hou = 'Astros';
const nyy = 'Yankees';
const oak = 'Athletics';
const sea = 'Mariners';
const tex = 'Rangers';

let teams = [laa, hou, nyy, oak, sea];
console.log(teams);

teams.push(tex);
console.log(teams);

teams.splice(2, 1);
console.log(teams);

let alWest = teams.join(',');
console.log(alWest);