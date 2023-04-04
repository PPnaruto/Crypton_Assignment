
let program = (value1, value2, process) => {
     
    switch (process){
        case "plus":
            return value1 + value2;
        case "minus":
            return value1 - value2;
        case "multiplied":
            return value1 * value2;
        case "divided":
            return value1 / value2;
        default:
            return "Check Input";
    }
       
}

const que = process.argv[2];

const arr = que.split(" ");

// console.log(arr);

const len = arr.length;

const ans = program(+arr[2],+arr[len-2],arr[3]);

if(arr[3] == "multiplied" || arr[3] == "divided"){
    arr[3] = arr[3]+" "+"by";
}

console.log(arr[2]+" "+arr[3]+" "+arr[len-2]+" "+"is"+" "+ans);

