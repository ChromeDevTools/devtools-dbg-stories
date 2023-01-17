function real(message) {
  message += " crbug-1408032.js";
  console.log(message.replace("PH", "real"));
}

real("Hello from the PH");
