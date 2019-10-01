const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
let reg1 = /\d{1,10}/g;
let reg2 = /\d{1,2}/g;

function decode(expr) {
    // write your solution here
    let res = expr.split('**********');
    return res = res
        .map((word) => 
            word.match(reg1)
                .map((letter) => {
                    let encoder = letter.match(reg2)
                        .map((unit) => {
                            if (unit === '10') return '.';
                            if (unit === '11') return '-';
                        }).join('');
                return MORSE_TABLE[encoder];
            }).join('')
        ).join(' ');
}
console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010')); 
module.exports = {
    decode
}
