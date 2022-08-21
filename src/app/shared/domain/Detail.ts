export class Detail {
  moves: Array<String>;
  skills: Array<String>;
  img: string;
  types: Array<String>;
  attack: number;
  defense: number
  specialAttack: number;
  specialDefense: number;
  speed: number;
  weight: string;
  height: string;

  constructor(data) {
    this.moves = data.moves.map(item => item.move.name.toUpperCase());
    this.skills = data.abilities.map(item => item.ability.name.toUpperCase());
    this.img = data.sprites.other.dream_world.front_default;
    this.attack = data.stats[1].base_stat || 0;
    this.defense = data.stats[2].base_stat || 0;
    this.specialAttack = data.stats[3].base_stat || 0;
    this.specialDefense = data.stats[4].base_stat || 0;
    this.speed = data.stats[5].base_stat || 0;
    this.types = data.types.map(item => item.type.name.toUpperCase());
    this.weight = data.weight;
    this.height = data.height;
  }
}