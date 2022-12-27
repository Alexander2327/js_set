/* eslint-disable linebreak-style */
import Team from '../js/Team';
import Character from '../js/Character';

test('Test Team method add', () => {
  const zombie = new Character('Nick', 'Zombie');
  const team = new Team();
  team.add(zombie);
  const result = {
    members: new Set([{
      name: 'Nick',
      type: 'Zombie',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('Test Team method add error', () => {
  const zombie = new Character('Nick', 'Zombie');
  const team = new Team();
  team.add(zombie);
  expect(() => team.add(zombie)).toThrow(new Error('obj exists'));
});

test('Test Team method addAll', () => {
  const zombie = new Character('Nick', 'Zombie');
  const spiderman = new Character('Piter', 'SuperHero');
  const team = new Team();
  team.addAll(zombie, spiderman);
  const result = {
    members: new Set([{
      name: 'Nick',
      type: 'Zombie',
      level: 1,
      health: 100,
    }, {
      name: 'Piter',
      type: 'SuperHero',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('Test Team method toArray', () => {
  const zombie = new Character('Nick', 'Zombie');
  const spiderman = new Character('Piter', 'SuperHero');
  const team = new Team();
  team.addAll(zombie, spiderman);

  const result = [{
    name: 'Nick',
    type: 'Zombie',
    level: 1,
    health: 100,
  },
  {
    name: 'Piter',
    type: 'SuperHero',
    level: 1,
    health: 100,
  }];
  const res = team.toArray();
  expect(res).toEqual(result);
});
