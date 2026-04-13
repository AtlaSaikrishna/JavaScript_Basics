const obj = {
    id : 1,
    name : "saikrishna",
    myData : [10,"hi","bye"]
}

console.log(obj.loc);

obj.loc = "hyd";

console.log(obj);

console.log(obj.myData);

const users = [
    {
        id : 1,
        name : "sky",
        loc : "hyd"
    },
    {
        id:2,
        name:"ram",
        loc : "bng"
    }
]

console.log(users[0].loc)

for(let key in users){
    console.log(key)
}

function myFunc(){
    console.log(-1);
    return -1;
    
}

myFunc()
console.log(myFunc());
