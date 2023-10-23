const day = 'monday'


//switch

switch (day) {
    case "monday":
        console.log('its sunday')
        break;
    case 'tuesday':
        console.log('its tuesday')
        break;
    default:
        break;
}


const numbers = [3, 5, 6, 7, 2]




// for

// const t = 7

// for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index] === t) {
//         console.log('ya dia ada nih')
//     }
    
// }




//while

let a = 0;
// while(a<numbers.length){
//     console.log(numbers[a]);
//     a++;
// }




// do while

do {
    console.log(numbers[a]);
    a++;
} while (a<numbers.length);



// nested

// for (let index = 1; index < 3; index++) {
//     for (let index2 = 1; index2 < 3; index2++) {
//         console.log("R"+ index + "C" + index2)
//     }
// }

// const nmbers = [
//     [11, 12, 13],
//     [21, 22, 23],
//     [31, 32, 33]
// ]

// for (let b = 0; b < nmbers.length; b++) {
//     for (let c = 0; c < nmbers.length; c++) {
//         console.log(b,c)
//     }
// }




// challenge 
// let n = 5
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= n; j++) {
//         console.log("* ")
//     }
//     console.log(" ")
// }

// *****
// *****
// *****
// *****
// *****

let n = 5
for (let i = 0; i < n; i++) {
    for (let j = n; i <= j; j--) {
        document.write("* ");
    }
    document.write("<br>")
}

// *
// **
// ***
// ****
// *****
