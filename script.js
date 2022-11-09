var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

// Your code here
if (weekday === "Monday") {
  console.log("Let's get the week started!");
} else if (weekday === "Tuesday") {
  console.log("Taco Tuesday carne asada please!!!");
} else if (weekday === "Wednesday") {
  console.log("I'm winning coding champ on the scene!");
} else if (weekday === "Thursday") {
  console.log("Throwback Thursday 90s fans.");
} else if (weekday === "Friday") {
  console.log("It's freaky Friday let's get lit!!");
} else {
  console.log("It must be the weekend, get caught up on sleep!");
}
