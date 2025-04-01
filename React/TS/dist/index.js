"use strict";
;
function sumOFAge(user1, user2) {
    return user1.Age + user2.Age;
}
const age = sumOFAge({ name: "vansh", Age: 20 }, { name: 'taro', Age: 30 });
console.log(age);
