
const express = require("express");
const cors = require("cors");
const ctrl = require('./controller');
const app = express();
 const {
      getMotivations,
      createMotivation,
      updateMotivation,
      deleteMotivation
} = ctrl;

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
           "All will go well with your new project.",
           "Believe it can be done.",
           "Change is happening in your life, so go with the flow!",
           "Dedicate yourself with a calm mind to the task at hand.",
           "Education is the ability to meet life’s situations."
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
})
  app.post('/api/motivations',createMotivation)
  app.put(`/api/motivations/:id`, updateMotivation)
  app.delete(`/api/motivations/:id`, deleteMotivation)

app.listen(4000, () => console.log("Server running on 4000"));