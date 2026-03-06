function describeRoom(room) {

if (room === "foyer") {
return "A dusty entrance area.";
}

else if (room === "hallway") {
return "A long dark hallway with creaky floors.";
}

else if (room === "kitchen") {
return "An old kitchen with rusty appliances.";
}

else {
return "An unknown room filled with shadows.";
}

}

console.log(describeRoom("foyer"));
console.log(describeRoom("hallway"));
console.log(describeRoom("kitchen"));

let exampleNode = {
image: "images/entrance.jpg",
text: "You stand at the entrance of an abandoned house. The door slowly creaks open. It stinks of rot.",
choices: ["Enter the hallway", "Run away"]
};

console.log(exampleNode.image);
console.log(exampleNode.text);
console.log(exampleNode.choices);

let storyNodes = [

{
image: "images/entrance.jpg",
text: "You are standing at the entrance of the abandoned house.",
choices: ["Go inside", "Leave"]
},

{
image: "images/hallway.jpg",
text: "You step into a dark hallway. The floor creaks beneath you.",
choices: ["Go to the kitchen", "Go upstairs"]
},

{
image: "images/kitchen.jpg",
text: "You enter a dusty kitchen. The smell of mold fills the air. Is that a crow in the microwave!?",
choices: ["Open the fridge", "Go back"]
},

{
image: "images/upstairs.jpg",
text: "You reach the upstairs landing. The silence is unsettling.",
choices: ["Check a bedroom", "Go back downstairs"]
}

];

function displayNode(index) {

let node = storyNodes[index];

let imageElement = document.getElementById("scene-image");
let textElement = document.getElementById("scene-text");

imageElement.src = node.image;
textElement.textContent = node.text;

}

displayNode(0);