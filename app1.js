
/*function Person(name) {
    this.name = name; 
    this.greeting = () => {
        alert(`Hi I'm ${this.name}.`);
    };  
} */ 
/*  this.bio = () => { 
        alert(`${this.name.first} ${this.name.last} is ${this.age} years old. ${this.pronoun} likes ${this.interests[0]} and ${this.interests[1]}. `);
    };  */ 

function Person(first, last, age, gender, interests ){
    this.name = {
        first: first,
        last: last 
    }; 
    this.age= age; 
    this.gender = gender; 
    this.interests = interests;  
    this.bio = ()=> {
    var string = `${this.name.first} ${this.name.last} is ${this.age} years old.`;
    var pronoun; 

    if (this.gender === 'male'|| this.gender ==='Male') {
        pronoun = ' He likes'; 
    } else if (this.gender ==='female' || this.gender === 'Female') {
        pronoun = ' She Likes'; 
    } else {
         pronoun ='They like'; 
    }
    string+= pronoun; 

    if (this.interests.length === 1) { 
        string += `${this.interests[0]}.`;
    } else if (this.interests.length === 2) {
        string +=` ${this.interests[0]} and ${this.interests[1]}.`;
    } else {
        /* if there are more than 2 interests loop through them all adding each 
        one to the main string  followed by a comma, except for the last which needs a 
        period*/
        for (let i = 0; i< this.interests.length; i++) {
            if (i === this.interests.length -1) {
             string += ` and ${this.interests[i]}.`; 
            } else {
                string += ` ${this.interests[i]},`; 
            }
        }    
    }
    alert(string); 
};
 this.greeting = ()=> {
        alert(`Hi I'm ${this.name.first}.`);
    };
};
var person1 = new Person('Bob', 'Smith', 35, 'Male',['music','skiing', 'dancing']); 
person1.farewell;
//person1.age; 
var person2 = new Person('Jaden', 'Smith', 30, 'Male',['music','bowling', 'dancing']); 
person2.farewell;
//person2.age; 
// comments below: code commented out that test's truthy or falsy while learning. 
//alert(person1.farewell === person2.farewell);
//alert(person1.age === person2.age); 
Person.prototype.farewell = function() {
    alert(`${this.name.first} has left the building. Bye for now!`);

};

