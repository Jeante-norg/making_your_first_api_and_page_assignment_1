import express from "express";

const app = express();
const port = 3003;
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
const day = weekday[d.getDay()];
// console.log(day);
let dayMessage;
let welcomeMessage = "Welcome to our assistant app!";

switch (day) {
  case "Monday":
    dayMessage = "Happy Monday! Start your week with energy!";

    break;

  case "Friday":
    dayMessage = "It's Friday! The weekend is near!";
    break;

  case "Sunday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Saturday":
    dayMessage = "Have a wonderful day!";
    break;

  default:
    dayMessage = "Invalid day";
    break;
}
app.get(`/assistant/greet`, (req, res) => {
  console.log(req.query);

  res.send(`Hello, ${req.query.name}! ${welcomeMessage} ${dayMessage})`);
});

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
