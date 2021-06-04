// let catsDiv = document.getElementById("catsDiv");

// cat objects
let catCollection = [
    { name: "Pebbles", age: 1, color: "black"},
    { name: "Snow", age: 9, color: "white"},
    { name: "Fruity", age: 3, color: "grey"},
]

// dog objects
let dogCollection = [
    { name: "Lilo", age: 5, color: "black"},
    { name: "Bow", age: 4, color: "pink"},
    { name: "Chocolate", age: 12, color: "purple"},
]


for( i = 0; i < catCollection.length; i++) {
    // create div with object info
    let newEl = document.createElement("div");
    newEl.innerHTML = `<h1>Cat</h1>` + catCollection[i].name + ": " + catCollection[i].age + ", " + catCollection[i].color + ". " ;
    
    let color = "#ff00ff"

    // if collection is greater than 2, fill color
    if(catCollection[i].age == 1){
        newEl.style.backgroundColor = color;
    }

    // place on page
    document.body.appendChild(newEl);
}

for( i = 0; i < dogCollection.length; i++) {
    // create div with object info
    let newEl = document.createElement("div");
    newEl.innerHTML = `<h1>Dog</h1>` + dogCollection[i].name + ": " + dogCollection[i].age + ", " + dogCollection[i].color + ". " ;

    // style
    newEl.style.float = "left";
    newEl.style.margin = "3px";

    // place on page
    document.body.appendChild(newEl);
}