interface USer{
    name:String,
    Age:number
};

function sumOFAge(user1:USer,user2:USer){
    return user1.Age+user2.Age;
}

const age = sumOFAge({name:"vansh",Age:20},{name:'taro',Age:30});
console.log(age);