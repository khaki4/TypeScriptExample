// http://www.typescriptlang.org/docs/handbook/advanced-types.html

type thing = string | number | string[] | boolean;
let returnSomeThing = (someThing: thing) => {
    if (someThing instanceof Array) {
        let joinedThings = '';
        someThing.forEach((thing) => {
            joinedThings += ` ${thing}`;
        });
        console.log('joindThings', joinedThings);
    } else { console.log('something = ', someThing); }

};

returnSomeThing(['test']);

type stuff = string | number;
let gimmmeStuff1 = (stuff: _stuff) => {
    if(typeof stuff === 'string'){}
    if(typeof stuff === 'number'){}
}

// common type error
type _stuff = string | { name: string };
let gimmmeStuff2 = (stuff: _stuff) => {
    if(typeof stuff === 'string'){}
    if(typeof stuff.name === 'string'){}
}


// common type error
type coolThings = { name: string } | { id: number };
let gimmeCoolThings = (thing: coolThings) => {
    if (typeof thing.name === 'string') { return thing.name; }
    if (typeof thing.id === 'number') { return thing.id; }
};

