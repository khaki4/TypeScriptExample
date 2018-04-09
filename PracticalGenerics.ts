interface Crocodile { personality: string; }
interface Taxes { year: number; }
interface Container<T> { unit: T; }

let crocContainer: Container<Crocodile> = { unit: { personality: 'mean' } };
let taxContainer: Container<Taxes> = { unit: { year: 2011 } };

interface RedCroc extends Crocodile { color: 'red'; }
interface BlueCroc extends Crocodile { color: 'blue'; }
interface CrocContainer<T extends Crocodile> { crocUnit: T; }

let redCrocContainer: CrocContainer<RedCroc> = { crocUnit: { personality: 'irate', color: 'red' }};
let blueCrocContainer: CrocContainer<BlueCroc> = { crocUnit: { personality: 'cool', color: 'blue'} }

class ClassyContainer<T extends Crocodile> {
    classyCrocUnit: T;
}

let classCrocContainer = new ClassyContainer<RedCroc>();
classCrocContainer.classyCrocUnit = { personality: 'classy', color: 'red' };

class CCC<T extends Crocodile> {
    constructor(public cccUnit: T) {}
}

// If we do use the constructor shorthand for setting properties on instantiation and we want more specificity, we can pass the type argument. If we want less specificity, we don't have to. As long as the instance has the constraint, we can add extra properties.
let ccc = new CCC<BlueCroc>({personality: 'ultra classy', color: 'blue'});