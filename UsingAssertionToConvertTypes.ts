// Using Assertion to Convert Types

interface SuperHero {
    powers: string[];
    savesTheDay: () => void;
}

let dazzler: SuperHero = {
  powers: ['transduces sonic vibration into light'],
  savesTheDay() { console.log(`Dazzler ${this.powers} to save the day!!!`); }
};

interface BadGuy {
    badDeeds: string[];
    getRandomBadDeed: () => string;
    commitBadDeed: () => void;
}

let badGuy: BadGuy = {
    badDeeds: ['farts on old forlks', 'doen\'t picks up his dog\'s poop', 'steals from babies'],
    getRandomBadDeed() {
        return this.badDeeds[Math.floor(Math.random() * this.badDeeds.length)];
    },
    commitBadDeed() {
        console.log(`BadGuy ${this.getRandomBadDeed()}`);
    }
};

function sayDayOrBadDeed(something: SuperHero | BadGuy) {
    if ((something as SuperHero).powers) {
        (something as SuperHero).savesTheDay();
    } else {
        (something as BadGuy).commitBadDeed();
    }
}

sayDayOrBadDeed(dazzler);
sayDayOrBadDeed(badGuy);