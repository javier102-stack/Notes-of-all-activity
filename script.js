function changeColor(){

    let color = ["red", "green", "blue", "yellow", "pink", "purple"];
    let randomColor = color[Math.floor(Math.random() * color.length)];

    document.body.style.backgroundColor = randomColor;
}

let welling = document.getElementById("colors");

welling.addEventListener("change", function() {
    document.body.style.backgroundColor = welling.value;    
})

// function changeColor(){
//     if(document.body.style.backgroundColor == "white"){
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "cyan"
//     }
//     else{
//         document.body.style.background = "white";
//         document.body.style.color = "blue"
//     }
// }

