// Bônus - Game Actions Simulator

//Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
  const danoMinimo = 15;
  const {strength} = dragon;
  const ataque = (Math.floor(Math.random() * (strength - danoMinimo)) + danoMinimo);
  return ataque;
};

const warriorAttack = (warrior) => {
  const danoMin = warrior.strength;
  const {weaponDmg} = warrior;
  const danoMax = danoMin * weaponDmg;
  const ataque = (Math.floor(Math.random() * (danoMax - danoMin)) + danoMin);
  return ataque;
};

const mageAttck = (mage) => {
  const danoMin = mage.intelligence;
  const danoMax = danoMin * 2
  const {mana} = mage;
  
  const statusTurno = {
    manaGasta: 0,
    dano: 'Não há mana suficiente...'
  };

  if (mana > 15) {
    const dmg = (Math.floor(Math.random() * danoMax - danoMin) + danoMin);
    statusTurno.manaGasta = 15;
    statusTurno.dano = dmg;
    return statusTurno;
  }
  return statusTurno;
};


const gameActions = {
  // Crie as HOFs neste objeto.
  turnoGuerrero: () => { 
    const ataqueGuerreiro = warriorAttack(warrior)
    dragon.healthPoints -= ataqueGuerreiro;
    warrior.damage = ataqueGuerreiro;
  },
  turnoMago: () => {
    const ataqueMago = mageAttck(mage);
    dragon.healthPoints -= ataqueMago.dano;
    mage.damage = ataqueMago.dano;
    mage.mana -= ataqueMago.manaGasta
  },
  turnoDragao: () => {
    const ataqueDragao = dragonAttack(dragon);
    mage.healthPoints -= ataqueDragao;
    warrior.healthPoints -= ataqueDragao;
    dragon.damage = ataqueDragao;
  },
  resultadoTurno: () => battleMembers,
};

gameActions.turnoGuerrero()
gameActions.turnoMago()
gameActions.turnoDragao()
console.log(gameActions.resultadoTurno());
