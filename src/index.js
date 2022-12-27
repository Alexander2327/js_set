/* eslint-disable linebreak-style */
import Team from './js/Team';
import Character from './js/Character';

const zombie = new Character('Nick', 'Zombie');
const spiderman = new Character('Piter', 'SuperHero');
const team = new Team();

team.add(zombie);
team.add(zombie);

team.addAll(zombie, spiderman);

team.toArray();
