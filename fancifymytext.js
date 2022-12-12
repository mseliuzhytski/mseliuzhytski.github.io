
    function newAlert(){

        document.getElementById("textareaId").style.fontSize = "24px";
    }

function fancy() {

    if(document.getElementById("fancyId").checked){
        document.getElementById("textareaId").style.fontWeight = "bold";
        document.getElementById("textareaId").style.color = "BLUE";
        document.getElementById("textareaId").style.textDecoration = "underline";
    }
    else{
        document.getElementById("textareaId").style.fontWeight = "normal";
        document.getElementById("textareaId").style.color = "BLACK";
        document.getElementById("textareaId").style.textDecoration = "none";
    }   
}

function newMoo() {

    var newString = document.getElementById("textareaId").value;
    var parts = newString.split(".");
    newString = parts.join("-Moo.");
    let nextString = newString.toUpperCase();
    document.getElementById("textareaId").value = nextString;
}