

const que = process.argv[2];

const arr = que.split(" ");

console.log(que);

console.log(arr);

let program = (value1, value2, process) => {
    switch (process){
        case "plus":
            return value1 + value2;
        case "minus":
            return value1 - value2;
        case "multiplied":
            return value1*value2;
        case "divided":
            return value1/value2;
        default:
            return "Check Input";
    }
       
}

const ans = program(5,2,"plus");

console.log(ans);

