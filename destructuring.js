const user = {
  id: 339,
  name: "Fred",
  age: 42,
  education: { degree: "Masters" },
};

let {education: {degree}} = user;
console.log(degree); // Masters