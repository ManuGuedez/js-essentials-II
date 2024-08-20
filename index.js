// 00 - Create a forked repo from this repository and clone it in your local machine.

// 01 - Function
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)
function getTotal(inventory) {
  return inventory.reduce((result, e) => {
    return result + e.price * e.quantity;
  }, 0);
}

let inventory = getTotal([
  { article: "🍔", price: 15, quantity: "1" },
  { article: "🍟", price: 10, quantity: "2" },
]);

console.log("FUNCIÓN 1");
console.log(">>> El resultado total es: " + inventory);

// 02 - Function
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})
function countBanana(inventory) {
  return inventory.filter((e) => e === "🍌").length;
}
let arreglo = ["🥑", "🍌", "🥭", "🍌"];
console.log("\nFUNCIÓN 2:")
console.log(`>>>La cantidad de bananas en el arreglo [${arreglo}] es: `+ countBanana(arreglo));


// 03- Function
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]

function filterEvenNumbers(numbers) {
  return numbers.filter((e) => e % 2 === 0);
}
let arreglo2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("\nFUNCIÓN 3:")
console.log(`>>> El arreglo [${arreglo2}] tiene los siguientes numeros pares: ` + filterEvenNumbers(arreglo2));

// 04 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(squareNumbers(numbers)); // Output: [1, 4, 9, 16, 25]

function squareNumbers(numbers) {
  return numbers.map((num) => {
    return num * num;
  });
}

let arreglo3 = [1, 2, 3, 4, 5];
console.log("\nFUNCIÓN 4")
console.log(`>>> El cuadrado de los números [${arreglo3}] son: ` + squareNumbers(arreglo3));


// 05 - function
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(findMax(numbers)); // Output: 5

function findMax(numbers) {
  return Math.max(...numbers);
}

console.log("\nFUNCIÓN 5: ")
console.log(`>>> El máximo del arreglo [${arreglo3}] es: ` + findMax(arreglo3));

// 06 - function

function calculateAverageAge(people) {
  let total = people.reduce((result, a) => {
    return result + a?.age;
  }, 0);
  return total / people.length;
}

const people = [
  { name: "Juan", age: 25 },
  { name: "Carla", age: 30 },
  { name: "Lucia", age: 35 },
  { name: "El Chengue", age: 49 },
];

function printPeople(people) {
  for(let person of people) {
    console.log(`- ${person.name} tiene ${person.age} años `)
  }
}

console.log("\nFUNCIÓN 6:")
printPeople(people)
console.log(">>> El promedio total de las edades es: "+calculateAverageAge(people));


// 07 - function  combinedHobbies(persons)
// Function to combine hobbies from all persons
const people2 = [
  {
    name: "Paula",
    hobbies: ["reading 📚", "gardening 🌱", "painting 🎨"],
  },
  {
    name: "Martin",
    hobbies: ["cycling 🚴", "cooking 🍳", "hiking 🥾"],
  },
  {
    name: "Juan",
    hobbies: ["photography 📸", "traveling ✈️", "swimming 🏊‍♂️"],
  },
  {
    name: "Veronica",
    hobbies: ["dancing 💃", "singing 🎤", "running 🏃‍♀️"],
  },
];

// Expected output:
// [
//   'reading 📚', 'gardening 🌱', 'painting 🎨',
//   'cycling 🚴', 'cooking 🍳', 'hiking 🥾',
//   'photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️',
//   'dancing 💃', 'singing 🎤', 'running 🏃‍♀️'
// ]

function combinedHobbies(people) {
  return people.map((person) => person.hobbies).flat();
}

function printHobbies(hobbies) {
  for(let h of hobbies) {
    console.log(`    - ${h}`)
  }
}

console.log("\nFUNCÓN 7");
console.log(">>> Los hobbies de las personas son: ");
printHobbies(combinedHobbies(people2));


// 08 - function printChemicalInfo(chemicals)
const chemicals = [
  {
    compoundId: "CHEM001",
    name: "Aspirin",
    formula: "C9H8O4",
    description:
      "Aspirin is a common medication used to reduce pain and inflammation.",
    molecularWeight: "180.16 g/mol",
    meltingPoint: "135°C",
    boilingPoint: "140°C",
    solubility: "Slightly soluble in water",
  },
  {
    compoundId: "CHEM002",
    name: "Caffeine",
    formula: "C8H10N4O2",
    description:
      "Caffeine is a stimulant found in coffee, tea, and various energy drinks.",
    molecularWeight: "194.19 g/mol",
    meltingPoint: "238°C",
    boilingPoint: "178°C",
    solubility: "Freely soluble in water",
  },
  {
    compoundId: "CHEM003",
    name: "Ethanol",
    formula: "C2H6O",
    description:
      "Ethanol, also known as alcohol, is commonly used as a solvent and in alcoholic beverages.",
    molecularWeight: "46.07 g/mol",
    meltingPoint: "-114.1°C",
    boilingPoint: "78.37°C",
    solubility: "Miscible with water",
  },
];

//printChemicalInfo(chemicals)
//Expected output

// +-------------------------------------------------------+
// | Compound ID: CHEM001                                 |
// | Name: Aspirin                                        |
// | Formula: C9H8O4                                      |
// | Description: Aspirin is a common medication used to  |
// | reduce pain and inflammation.                        |
// | Molecular Weight: 180.16 g/mol                       |
// | Melting Point: 135°C                                 |
// | Boiling Point: 140°C                                 |
// | Solubility: Slightly soluble in water                |
// +-------------------------------------------------------+
// +-------------------------------------------------------+
// | Compound ID: CHEM002                                 |
// | Name: Caffeine                                       |
// | Formula: C8H10N4O2                                   |
// | Description: Caffeine is a stimulant found in coffee,|
// | tea, and various energy drinks.                      |
// | Molecular Weight: 194.19 g/mol                       |
// | Melting Point: 238°C                                 |
// | Boiling Point: 178°C                                 |
// | Solubility: Freely soluble in water                  |
// +-------------------------------------------------------+
// +-------------------------------------------------------+
// | Compound ID: CHEM003                                 |
// | Name: Ethanol                                        |
// | Formula: C2H6O                                       |
// | Description: Ethanol, also known as alcohol, is      |
// | commonly used as a solvent and in alcoholic beverages|
// | Molecular Weight: 46.07 g/mol                        |
// | Melting Point: -114.1°C                              |
// | Boiling Point: 78.37°C                               |
// | Solubility: Miscible with water                      |
// +-------------------------------------------------------+

function printChemicalInfo(chemicals) {
  chemicals.forEach((chemical) => {
    console.log("+-------------------------------------------------------+");
    console.log(`| Compound ID: ${chemical.compoundId.padEnd(41)}|`);
    console.log(`| Name: ${chemical.name.padEnd(48)}|`);
    console.log(`| Formula: ${chemical.formula.padEnd(45)}|`);
    // Divide la descripción en líneas para ajustarla al ancho
    const descriptionLines = wrapText(chemical.description, 40);
    descriptionLines.forEach((line, index) => {
      if (index === 0) {
        console.log(`| Description: ${line.padEnd(41)}|`);
      } else {
        console.log(`|             ${line.padEnd(42)}|`);
      }
    });
    console.log(`| Molecular Weight: ${chemical.molecularWeight.padEnd(36)}|`);
    console.log(`| Melting Point: ${chemical.meltingPoint.padEnd(39)}|`);
    console.log(`| Boiling Point: ${chemical.boilingPoint.padEnd(39)}|`);
    console.log(`| Solubility: ${chemical.solubility.padEnd(42)}|`);
    console.log("+-------------------------------------------------------+");
  });
}

function wrapText(text, maxLineLength) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  words.forEach((word) => {
    if ((currentLine + word).length > maxLineLength) {
      lines.push(currentLine.trim());
      currentLine = "";
    }
    currentLine += `${word} `;
  });

  if (currentLine.trim().length > 0) {
    lines.push(currentLine.trim());
  }

  return lines;
}

console.log("\nFUNCIÓN 8:")
printChemicalInfo(chemicals);

// 09 - function getGetUniqueGuestList(guestList)
// Remove duplicated elements from the  guests list
// Expected getGetUniqueGuestList(guestList)) ['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'David 🤵🏿‍♂️']
function getGetUniqueGuestList(guestList) {
  return new Array(...new Set(guestList));
}

const guestList = ["Alice 🙆🏻‍♀️", "Bob 🙍🏼", "Charlie 👨🏼‍🚀", "Alice 🙆🏻‍♀️", "David 🤵🏿‍♂️"];
console.log("\FUNCIÓN 9:");
console.log("Las personas sin repetir son: " +getGetUniqueGuestList(guestList));


// 10 - function showUserProfiles(user)
//   showUserProfile(user1); // Expected output: 'carol.smith, carol.smith77'
//   showUserProfile(user2); // Expected output: 'jane.smith@example.com'
function showUserProfiles(user) {
  let result
  result = user.profile.social?.twitter ?? "";
  if (result !== "") {
    console.log("   - " + result)
  }
  
  result = user.profile.social?.facebook ?? "";
  if (result !== "") {
    console.log("   - " + result)
  }

  result = user.profile?.email ?? "";
  if (result !== "") {
    console.log("   - " + result)
  }
}

// User data

const user1 = {
  id: 1,
  name: "Carol Smith",
  profile: {
    social: {
      twitter: "carol.smith",
      facebook: "carol.smith77",
    },
  },
};

const user2 = {
  id: 2,
  name: "Jane Smith",
  profile: {
    email: "jane.smith@example.com",
  },
};

console.log("\nFUNCIÓN 10:")
console.log(`>>> Los perfiles de ${user1.name} son:`)
showUserProfiles(user1)
console.log(`>>> Los perfiles de ${user2.name} son:`)
showUserProfiles(user2)

// 11 - function sortLeaderBoardByScoreDesc(leaderBoard)
// The function should sort the players by score as it's displayed on the expected output

function sortLeaderBoardByScoreDesc(leaderBoard) {
  return leaderBoard.toSorted((a, b) => b.score - a.score);
}

const leaderBoard = [
  { player: "John", score: 80 },
  { player: "Charlie", score: 20 },
  { player: "Julio", score: 50 },
  { player: "Bob", score: 80 },
  { player: "Bobby", score: 11 },
  { player: "Tommy", score: 43 },
  { player: "Eric", score: 99 },
  { player: "Alice", score: 100 },
  { player: "Alfred", score: 30 },
];
console.log("\nFUNCIÓN 11:")
console.log(sortLeaderBoardByScoreDesc(leaderBoard));

// Expected output:
// [
//   { player: 'Alice', score: 100 },
//   { player: 'Eric', score: 99 },
//   { player: 'John', score: 80 },
//   { player: 'Bob', score: 80 },
//   { player: 'Julio', score: 50 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Alfred', score: 30 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Bobby', score: 11 }
// ]

// 12 - function

function getTopFiveWorstPlayers(leaderBoard) {
  return leaderBoard.toSorted((a, b) => a.score - b.score).slice(0, 5); // el segundo termino es no inclusivo
}
console.log("\nFUNCIÓN 12:")
console.log(getTopFiveWorstPlayers(leaderBoard));

// Expected output:
// [
//   { player: 'Bobby', score: 11 },
//   { player: 'Charlie', score: 20 },
//   { player: 'Alfred', score: 30 },
//   { player: 'Tommy', score: 43 },
//   { player: 'Julio', score: 50 }
// ]

// NOTE: ⚠️ original array shouldn't be modified. or we are missing players.

// 13 - function safeCopy()

// Deep copy function
function safeCopy(obj) {
  // Verifica si el valor es un objeto o un array, de lo contrario, devuelve el valor porque no vale la pena copiar tipos primitivos
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Crea una copia vacía de un array u objeto, según corresponda
  const copy = Array.isArray(obj) ? [] : {};

  // Recorre cada propiedad del objeto original
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Realiza una copia profunda de cada propiedad
      copy[key] = safeCopy(obj[key]); //realizo un acceso dinamico a las propiedades 
    }
  }

  return copy;
}

const companyHierarchy = {
  name: "Company",
  departments: [
    {
      name: "Engineering",
      head: "Alice",
      subDepartments: [
        {
          name: "Backend",
          head: "Bob",
          employees: ["Charlie", "David"],
        },
        {
          name: "Frontend",
          head: "Eve",
          employees: ["Frank", "Grace"],
        },
      ],
    },
    {
      name: "Sales",
      head: "Henry",
      employees: ["Isaac", "Jane"],
    },
  ],
};

console.log("\nFUNCIÓN 13:")

const cp = safeCopy(companyHierarchy);
console.log("**prueba**: " + (cp === companyHierarchy) + "\n --- resultado esperado: FALSO") // debería ser falso


// Example usage
const copiedHierarchy = safeCopy(companyHierarchy);

// Modify the copied hierarchy
copiedHierarchy.departments.push({
  name: "Marketing",
  head: "Karen",
  employees: ["Liam", "Mia"],
});

// Verify independence
console.log("\nOriginal Company Hierarchy:");
console.log(companyHierarchy);

console.log("\nCopied Company Hierarchy with Modifications:");
console.log(copiedHierarchy);
