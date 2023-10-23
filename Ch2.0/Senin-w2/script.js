// Shorting

// 1,6,3,2

// perulangan 1
// compare 1 =-> 6
// if (left > right) {
//     swap left -> right
// }else{
//     continue
//     move to next element
// }


// perulangan ke 2
// compare 6 -> 3
// cause 6 > 3
//      than swap 3 -> 6
// 1,3,6,2
// move to next element


// perulangan ke 3
// compare 6 -> 2
// cause 6 > 2
//      than swap 2 -> 6
// 1,3,2,6
// move to sstart


// perulangan ke 4
// compare 1 -> 3
//      no swap


// perulangan ke 5
// compare 3 -> 2
// cause 3 > 2
//      than swap 3 -> 2
// 1,2,3,6


// perulangan ke 6


// hail pengurutan final : 1,2,3,6

// function bubbleSort(arr, n)
// {
//     var i, j, temp;
//     var swapped;
//     for (i = 0; i < n - 1; i++) 
//     {
//         swapped = false;
//         for (j = 0; j < n - i - 1; j++) 
//         {
//             if (arr[j] > arr[j + 1]) 
//             {
//                 // Swap arr[j] and arr[j+1]
//                 temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 swapped = true;
//             }
//         }
  
//         // IF no two elements were 
//         // swapped by inner loop, then break
//         if (swapped == false)
//         break;
//     }
// }
  
// // Function to print an array 
// function printArray(arr, size)
// {
//   var i;
//   for (i = 0; i < size; i++)
//       console.log(arr[i] + " ");
// }
  
// // Driver program
// var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
// var n = arr.length;
// bubbleSort(arr, n);
// console.log("Sorted array: ");
// printArray(arr, n);





// Filter

// cars = [n]

// const filtered = []

// loop(start -> 0 until n)
//     if (cars[0].availabililty)
//         pushed into filtered

const cars = [{
    id: '2',
    available: true,
},
{
    id: '3',
    available: false,
},
{
    id: '4',
    available: true,
},
{
    id: '5',
    available: false,
}];

const result = [];


for(let i = 0; i < cars.length; i++){
    if(cars[i].available){
        result.push(cars[i]);
    }
}

console.log(result)





// // Function 
// // 1. Function Keyword

// function cariMobil() {
//     console.log("apa ini slur")
// }

// //untuk call and run a function
// //functionName()

// cariMobil()

// function plus(a, b){
//     return a+ b;
// }

// console.log(plus(3,4))

// // 2. Function Annonym
// const kali = function(a,b){
//     return a*b;
// }

// console.log(kali(3,4))


// // 3. Arrow Function
// const kurang = (a,b) => {
//     return a-b;
// }

// console.log(kurang(3,4))