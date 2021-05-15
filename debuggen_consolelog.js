const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
  for (let person of array) {
    console.log("Dit is de gehele persoon:", person); //opdracht 1
    console.log("Dit is de naam van de persoon:", person.name); // opdracht 2
    geboortejaar: geen idee hoe! // opdracht 3
    console.log(person.name, "is een", person.profession); // opdracht 4
    console.log(`${person.name} is een ${person.profession}`);
    if (person.age > 50) {   //opdracht 5
        console.log(person.name, "is", person.age);
    }
  };



