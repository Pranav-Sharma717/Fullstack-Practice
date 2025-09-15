import { franc, francAll } from 'franc';
import langs from 'langs';
import colors from 'colors';

const input = process.argv[2];
const langCode = franc(input);

if (langCode == 'und') {
    console.log(colors.red("Language unknown"));
}
else {
    const language = langs.where("3", langCode);
    if (language) {
        console.log(colors.green(`Best Guess: ${language.name}`));
    }
    else {
        console.log(colors.red(`Couldn't Find a language for code: ${langCode}`));
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //Using Require
// const franc = require("franc");
// console.log(franc('Alle menslike wesens word vry'));