

let inputs = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        e.preventDefault();
        if(e.target.innerHTML == '='){ //loop to calculate when '=' pressed 
            string = eval(string);
            inputs.value = string;
        }

        else if(e.target.innerHTML == 'AC'){ //to clear the text area
            string = "";
            inputs.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){ //to only delete last entered data
            string = string.substring(0,string.length-1);
            inputs.value = string;
        }
        else {
            string += e.target.innerHTML;
            inputs.value = string;
        }
        
    })
})