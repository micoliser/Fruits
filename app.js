const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Check data, no name included"]
  },
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  // name: "Apple",
  rating: 8,
  review: "Very good fruit"
});

// fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit ({
  name: "Pineapple",
  rating: 10,
  review: "The best fruit in the whole world"
})

const cucumber = new Fruit ({
  name: "Cucumber",
  rating: 8,
  review: "Nice fruit"
})

// cucumber.save();

const person = new Person ({
  name: "Emi",
  age: 15,
  favouriteFruit: pineapple
});

// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 9,
  review: "Awesome fruit"
});

const orange = new Fruit({
  name: "Orange",
  rating: 5,
  review: "Kind of sour"
});

const banana = new Fruit({
  name: "Banana",
  rating: 10,
  review: "The best fruit in the world"
});

// Fruit.insertMany([kiwi, orange, banana], (err) => {
//   if (err) console.log(err);
//   else console.log("fruits successfully added to fruitsDB")
// });

Fruit.find((err, fruits) => {
  if (err) console.log(err);
  else {
    mongoose.connection.close();

    fruits.forEach((fruit) => console.log(fruit.name));
  }
});

Fruit.updateOne({_id: "632351d08d426a2eae31a06d"}, {name: "Peach"}, (err) => {
  if (err) console.log(err);
  else console.log("successfully udated the document");
});

Fruit.deleteOne({name: "Peach"}, (err) => {
  if (err) console.log(err);
  else console.log("successfully deleted peach");
});

Person.updateOne({name: "John"}, {favouriteFruit: cucumber}, (err) => {
  if (err) console.log(err);
  else console.log("successfully updated John's data");
});
