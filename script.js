function display() {  
    if(document.getElementById('a').checked) { //if option a is selected
        document.getElementById("disp").innerHTML = "You seem to believe that good will always prevail & justice will eventually be served."; 
    } 
    else if(document.getElementById('b').checked) { //if option b is selected
        document.getElementById("disp").innerHTML = "You seem to think that criminals are powerful and prepared, but was the theif really prepared for 3 girls? ";   
    } 
    else if(document.getElementById('c').checked) { //if option c is selected
        document.getElementById("disp").innerHTML = "You seem to enjoy surprises and comedic twists. You sometimes like to take things in jokes.";   
    } 
    else if(document.getElementById('d').checked) { //if option d is selected
        document.getElementById("disp").innerHTML = "You seem to be entertained by happy endings, you tend to act with compassion and forgiveness.";   
    } 
} 


