// Creating a Guest List Array
var guestlist = ["Ikhlaq bhai", "Alisha", "Ahmed", "Amirr"];
//Making variable for those guest who cant come
var dontCome = guestlist[0];
// Print the name of guest who cant come
console.log(dontCome, "Nahi Ahh Sakty hain");
//Add or Remove Values from Guest List Array
guestlist.splice(0, 1, "Amirr");
//Massage Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
//Adding a new guest at starting index of array
guestlist.unshift("Ali");
//Adding a new value at ending index of array
guestlist.push("Zain");
// Get a middle index of our guest list array
var middleIndex = (guestlist.length / 2);
//Adding a new guest to middle index of array
guestlist.splice(middleIndex, 0, "Osama");
//Print Massage of Updated List
console.log("Updated List of our Guests");
//Sending a invitation massage to our guests one by one with their names
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
//Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");
//Using while-loop to remove guests from the array until only two names remains
while (guestlist.length > 2) {
    var removedGuests = guestlist.pop;
    console.log("Sorry, ".concat(removedGuests, " I cant invite you"));
}
console.log("Invitation to the last two Guests");
guestlist.forEach(function (lasttwo) { return console.log("Lucly ".concat(lasttwo, ", you are still invited to dinner")); });
//Removing last two Guests from the list
guestlist.pop();
guestlist.pop();
console.log("Empty List:", guestlist);
