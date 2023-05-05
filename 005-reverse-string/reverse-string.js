let forward = 'w3resource';

let reverse = '';

for (let i = -1; i >= -1*forward.length; i--) {
    reverse += forward.at(i);
}

console.log(reverse);

/* so it turns out JS does not support negative indexing unlike python

it is kinda misleading because it does support negative index in its string.slice() method

but this is a very good exercise for those learning JS after learning python
*/