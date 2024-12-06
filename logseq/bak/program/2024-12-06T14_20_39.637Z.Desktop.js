function arrObject(palArr, uppArr, longest){
    this.palArr = palArr;
    this.uppArr = uppArr;
    this.longest = longest;
}

function arrayManipulator(arr){
    let palArr = [];
    let uppArr = [];

    for(let i = 0; i < arr.length; i++){
        console.log(i);
        let evenOdd = arr[i].length % 2 == 0 ? "even":"odd";
        let palindrome = arr[i] == arr[i].split("").reverse().join("") ? arr[i].split("").reverse().join("") : false;

        if(evenOdd == "even"){
            if(palindrome){
                palArr.push(palindrome);
            }
        } else {
            if(!palindrome){
                uppArr.push(arr[i].toUpperCase());
            }
        }
    }

    let lengthPalArr = 0;
    let lengthUppArr = 0;

    for(elemnt of palArr){
        lengthPalArr += elemnt.length;
    }
    for(elemnt of uppArr){
        lengthUppArr += elemnt.length;
    }

    let longest = lengthPalArr > lengthUppArr ? palArr:uppArr;
    
    return new arrObject(palArr, uppArr, longest);
}

input = ["hello", "madam", "tygrys", "ayla"];

console.log(arrayManipulator(input));