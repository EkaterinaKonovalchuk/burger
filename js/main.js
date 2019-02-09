var name = 'Екатерина';
console.log(name);

var name = 'Арчи';
console.log(name);

if (name == 'Арчи') {
    console.log('да');
}

if (name == 'Арчи'){
    console.log('имя моей собаки');
}

if (name == 'Иван'){
    console.log('да');
}
else{
    console.log ('НЕТ');
}


//for

for (var i=0; i<10; i++){
    console.log(i);
}

//function
function sum(p1, p2, p3) {
    var result = p1+p2+p3;
    return result;
}
var result = sum(1,3,8);
console.log(result);

var result = sum(10,20,30);
console.log(result);


//mass__zdanie1

var array=['привет','loftschool'];
array.push('я изучаю','javascript');
console.log(array.length);

for (i=0;i<array.length; i++){
    console.log(i);
}

for (i=0; i<array.length; i++){
    console.log(array[i]);
}

//mass__zadanie2

var array=[1,6,10,236,99,500,80,765,886,3];
for (i=0; i<array.length; i++){
    

    if (array[i]>'100'){
        console.log(array[i]);
    }
}


//mass__zadanie3

var obj={
    name:'Екатерина',
    lastname:'Коновальчук',
    age:'24'
}

console.log(obj.name);
console.log(obj.lastname);
console.log(obj.age);

obj.dog='archi';
console.log(obj.dog);

//mass__zadani4

function hello (human)