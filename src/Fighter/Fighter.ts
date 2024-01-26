import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number ;
  defense: number;
  energy?: Energy;
  strength: number;
  attack(enemy: Fighter) : void;
  receiveDamage(attackPoints: number) : number;
  special?(enemy: Fighter) : void;
  levelUp() : void;
}