function Person(name,age,gender,favfood){
this.Name  = name,
this.Age = age,
this.Gender = gender,
this.Favorite_food = favfood
this.greeting = () =>{
    return ('Hello, I am ' + this.Name + ", I am " + this.Age + " years old,  I am " + this.Gender + " and I like eating " + this.Favorite_food )
}
}
let banjyo = new Person('Injyo', 23,'Male','Amaringi')
// console.log(banjyo.greeting())

function Student(name,age,gender,favfood,favtutor,favsubject){
    Person.call(this, name,age,gender,favfood)
    this.Favorite_tutor = favtutor,
    this.Favorite_subject = favsubject
    this.greeting=()=>{
        console.log('Hello, I am ' + this.Name + ", I am " + this.Age + " years old,  I am " + this.Gender + " and I like eating " + this.Favorite_food + ". My favorite tutor is " + this.Favorite_tutor + " and my favorite subject is" + this.Favorite_subject )
}
    }

let bruce = new Student('Bruce',38,'Male','Amaringi','Mosh','React')
console.log(bruce.greeting())
