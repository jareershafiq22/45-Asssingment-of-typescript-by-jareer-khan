var guestList = ["Ikhlaq Bhai", "Alisha", "Ahmed"];
var dontCome = guestList[0];
console.log(dontCome, "Nhi Ahh skta");
guestList.splice(0, 1, "Amirr");
guestList.forEach(function (guest) { return console.log("Salam  ".concat(guest, ", would u like to Dinner with me? ")); });
