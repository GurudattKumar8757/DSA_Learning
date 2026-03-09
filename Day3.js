/*

  *  *  *  * 
  *  *  *  * 
  *  *  *  * 
  *  *  *  * 
 ---------------------
  * 
  *  * 
  *  *  * 
  *  *  *  * 
 ---------------------
 1 
 1 2 
 1 2 3 
 1 2 3 4 
 1 2 3 4 5 
 ---------------------
 1 
 2 2 
 3 3 3 
 4 4 4 4 
 5 5 5 5 5 
 ---------------------
 1 2 3 4 5 
 1 2 3 4 
 1 2 3 
 1 2 
 1 
 ---------------------
  *  *  *  *  * 
  *  *  *  * 
  *  *  * 
  *  * 
  * 
 ---------------------
     *
    **
   ***
  ****
 *****
 ---------------------
 1
 10
 101
 1010
 10101
 101010
 ---------------------
 1
 01
 010
 1010
 10101
 010101

*/





function printStartPattern(n) {
    for (let i = 0; i < n; i++){
        let row = ""
        for (let j = 0; j < n; j++){
            row = row + " * "
        }
        console.log(row);
    }
}

function printPattern1(n) {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j <= i; j++) {
            row = row + " * "
        }
        console.log(row);
    }
}


function printPattern2() {
    for (let i = 0; i < 5; i++) {
        let row = ""
        for (let j = 0; j <= i; j++) {
            row = row + (j+1) + " ";
        }
        console.log(row);
    }
}

function printPattern3() {
    for (let i = 0; i < 5; i++) {
        let row = ""
        for (let j = 0; j <= i; j++) {
            row = row + (i + 1) + " ";
        }
        console.log(row);
    }
}

function printPattern4() {
    for (let i = 5; i >0; i--) {
        let row = ""
        for (let j = 1; j <= i; j++) {
            row = row + j + " ";
        }
        console.log(row);
    }
}

function printPattern5() {
    for (let i = 5; i > 0; i--) {
        let row = ""
        for (let j = 1; j <= i; j++) {
            row = row + " * ";
        }
        console.log(row);
    }
}

function printPattern6(n) {
    for (let i = 0; i < n; i++){
        let row = "";
        let j = 0;
        for (; j < n-1-i; j++){
            row = row + " ";
        }

        for (let k = j; k < n; k++){
            row=row+"*"
        }
        console.log(row);
    }
}

function printPattern7(n) {
    for (let i = 0; i < n; i++){
        let row = "";
        let num = 1;
        for (let j = 0; j <= i; j++){
            row = row + num;
            if (num == 1) {
                num = 0;
            } else {
                num=1
            }
        }

        console.log(row);
    }
}

let toggle = 1;
function printPattern8(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        
        for (let j = 0; j <= i; j++) {
            row = row + toggle;
            if (toggle == 1) {
                toggle = 0;
            } else {
                toggle = 1
            }
        }

        console.log(row);
    }
}

printStartPattern(4);
console.log("---------------------")
printPattern1(4);
console.log("---------------------")
printPattern2();
console.log("---------------------")
printPattern3();
console.log("---------------------")
printPattern4();
console.log("---------------------")
printPattern5();
console.log("---------------------")
printPattern6(5);
console.log("---------------------")
printPattern7(6);
console.log("---------------------")
printPattern8(6);



