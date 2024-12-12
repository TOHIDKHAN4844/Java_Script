
// Maps

const map=new Map()

map.set('IN', "India")
map.set('USA', "America")
map.set('Fr', "France")

map.set('IN',"India")
console.log(map);

for(const [key, value] of map){
    console.log(key, ':-', value);
}

const Obj={
    js:'JavaScript',
    cpp:'C++',
    rb:'Ruby'
}
for (const key in Obj) {
   console.log(`${key} shorcut is for ${Obj[key]}`);
}

const coding =[ "js", "Ruby", "Java", "python", "Cpp"]

coding.forEach( function (item){
    console.log(`this Lang. is ${item}`)
})