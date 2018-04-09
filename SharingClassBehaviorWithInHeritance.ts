// Sharing Class Behavior with Inheritance

class ComicBookCharacter {
    constructor(
        public alias: string,
        public health: number ,
        public strength: number,
        protected secretIdentity: string
    ) {}
}

// If you don't define a constructor, the derived class will use the base class's constructor.
class SuperHero extends ComicBookCharacter {
    traits = ["empathy", "strong moral code"];
}

// f you do define the constructor in a derived class, super must be called before anything else can happen.
class SuperVillain extends ComicBookCharacter {
    flaws = ["hubris", "always explains evil plan"];
    getSecretId() { console.log(this.secretIdentity); }

    constructor(a, b, c, d) {
        super(a, b, c, d);
        console.log('a', a);
        console.log('b', b);
        console.log('c', c);
        console.log('d', d);
        console.log(`${this.alias} eats kittens`);
    }
}

let jubilee = new SuperHero('Jubilee', 23, 233, 'Jubilation Lee');
let scarletWitch = new SuperVillain('Scarlet Witch', 233, 4444, 'Wanda mximoff');

// console.log(jubilee.getSecretId());
// console.log('//////');
//
// console.log(scarletWitch);
console.log(scarletWitch.getSecretId());