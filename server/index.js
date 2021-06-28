
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar."
  ];
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
// //adding new feature
app.get('/api/fortunes',function(req,res){
  const fortunes = [
  "All will go well with your new project",
  "Believe it can be done.",
  "Change is happening in your life, so gowith the flow!",
  "Dedicate yourself with a calm mind to the task at hand.",
  "Education is the ability to meet life’s situations"
]
  
   let randomIndex = Math.floor(Math.random() *fortunes.length);
   let randomFortune = fortunes[randomIndex];

   res.status(200).send(randomFortune);
})

  //adding
const items = ['welldone', 'hardwroking', 'dedicate'];

app.get('/api/items', function(req, res) {
  res.status(200).send(items);
})

app.post('/api/items', function(req, res) {
  const { newItem } = req.body;

  items.push(newItem);

  res.status(200).send(items); 
})
// //
app.delete('/api/items/:tgtIndex', function(req, res) {
  const tgtIndex = +req.params.tgtIndex;
  items.splice(tgtIndex,1);
  
  res.status(200).send(items)
})

app.listen(5000, () => console.log("Server running on 5000"));