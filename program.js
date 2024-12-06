function arrObject(revArr, uppArr, longest){
    this.revArr = revArr;
    this.uppArr = uppArr;
    this.longest = longest;
}

function arrayManipulator(arr){
    let revArr = [];
    let uppArr = [];

    for(let i = 0; i < arr.length; i++){
        let evenOdd = arr[i].length % 2 == 0 ? "even":"odd";

        if (evenOdd == "even") {
            revArr.push(arr[i].split("").reverse().join(""));
        } else {
            uppArr.push(arr[i].toUpperCase());
        }
    }

    let lengthRevArr = 0;
    let lengthUppArr = 0;

    for(element of revArr){
        lengthRevArr += element.length;
    }
    for(element of uppArr){
        lengthUppArr += element.length;
    }

    let longest = lengthRevArr > lengthUppArr ? revArr:uppArr;
    
    return new arrObject(revArr, uppArr, longest);
}

input = ["hello", "madam", "tygrys", "ayla", "racecar", "level", "world", "abba", "poop"];

console.log(arrayManipulator(input));