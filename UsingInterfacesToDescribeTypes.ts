// Using Interfaces to Describe Types

interface AttackFunction {
    (oppenent: { alias: string; health: number }, attackWith: number): number;
}

interface KrustyTheClown {
    alias: string;
    health: number;
    inebriationLevel: number;
    attack: AttackFunction;
}

interface OptionalAttributes {
    secretIdentity?: string;
    strenth?: number;
    insanity?: number;
    dexterity?: number;
    healingFactor?: number;
}

interface ComicBookCharactor extends OptionalAttributes{
    alias: string;
    health: number;
    attack: AttackFunction;
}

function attackFunc(oppenent, attackWith) {
    oppenent.health -= attackWith;
    console.log(`${this.alias} attacked ${oppenent.alias}, who's health = ${oppenent.health}`);
    return oppenent.health;
}
let superHero: ComicBookCharactor = { 
    alias: 'She-Hulk',
    health: 5000,
    strenth: 5000,
    attack: attackFunc
 };
 let superVillain: ComicBookCharactor = {
    secretIdentity: 'Jack Napier',
    alias: 'Joker',
     health: 75,
     insanity: 145,
     attack: attackFunc
 };

 function getSecretIdentity(character: ComicBookCharactor) {
     if (character) {
         console.log(`${character.alias} is ${character.secretIdentity}`);
     } else {
         console.log(`${character.alias} has no secret identity`);
     }
 }

superHero.attack(superVillain, superHero.strenth)