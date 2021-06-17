// object array
let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
];

// for as many elements in the Array, do:
for(var i = 0; i < objects.length; i++) {
    // create div in javascript
    let divBlock = document.createElement("div");
    
    // div styling by targeting nested properties of the array
    divBlock.style.backgroundColor = objects[i].color;
    divBlock.style.height = objects[i].height + "px";
    divBlock.style.width = objects[i].width + "px";

    // place div on page
    document.body.appendChild(divBlock);

    console.log(divBlock);
}