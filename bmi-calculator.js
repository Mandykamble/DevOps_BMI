const express = require("express");
const app = express();

app.use(express.json());

app.post("/calculate", (req, res) => {
  const { weight, height } = req.body;
  if (!weight || !height) {
    return res.status(400).json({ error: "Weight and height are required" });
  }

  const bmi = calculateBMI(weight, height);
  res.json({ bmi });
});

function calculateBMI(weight, height) {
  return weight / (height * height);
}
// comment made by subham kumar
const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(
    `Server running on port and this is another change made by subham kumar${port}`
  )
);
module.exports = app;
