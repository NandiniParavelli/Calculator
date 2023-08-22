let input = document.getElementById("input");
let keys = document.querySelectorAll("button");
let string = "";

Array.from(keys).forEach((button) => {
    button.addEventListener("click", (e) =>{
        if (e.target.textContent == "="){
            
            string = eval(string);
            console.log(string)
            input.value = string;
        }
        else if(e.target.textContent == "C"){
            string = "";
            input.value = string;
        }
        else{
        console.log(e.target)
        string = string + e.target.textContent;
        console.log(string)
        input.value = string;
        }
        

    });
});

