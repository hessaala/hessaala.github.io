function display() {  
    if(document.getElementById('a').checked) { 
        document.getElementById("disp").innerHTML = "You seem to believe that good will always prevail & justice will eventually be served."; 
    } 
    else if(document.getElementById('b').checked) { 
        document.getElementById("disp").innerHTML = "You seem to think that criminals are powerful and prepared, but was the theif really prepared for 3 girls? ";   
    } 
    else if(document.getElementById('c').checked) { 
        document.getElementById("disp").innerHTML = "You seem to enjoy surprises and comedic twists. You sometimes like to take things in jokes.";   
    } 
    else if(document.getElementById('d').checked) { 
        document.getElementById("disp").innerHTML = "You seem to be entertained by happy endings, you tend to act with compassion and forgiveness.";   
    } 
} 


