var input = document.getElementById("input");
var button = document.getElementById("button");
var ul = document.querySelector("ul");

function checkLength(){
    return input.value.length;
}

function removeElement(event){
    event.stopPropagation();
    event.preventDefault();
    event.target.parentNode.parentNode.remove();
}

function toggleEvent(event){
    event.preventDefault();
    event.stopPropagation();
    this.classList.toggle("done");
}


function createElement(){
    if (checkLength() > 0){
        var a = document.createElement("a");
        var li = document.createElement("li");
        var removeButton = document.createElement("button");
        removeButton.innerText="Remove";
        a.href="#";
        a.innerText = input.value + "    ";
        removeButton.addEventListener("click", removeElement);
        a.addEventListener("click", toggleEvent);
        a.appendChild(removeButton);
        li.appendChild(a);
        ul.appendChild(li);
        input.value="";
    }
}

function generateElement(event){
    if (checkLength() > 0 && event.keyCode === 13){
        var a = document.createElement("a");
        var li = document.createElement("li");
        var removeButton = document.createElement("button");
        removeButton.innerText="Remove";
        a.href="#";
        a.innerText = input.value + "    ";
        removeButton.addEventListener("click", removeElement);
        a.addEventListener("click", toggleEvent);
        a.appendChild(removeButton);
        li.appendChild(a);
        ul.appendChild(li);
        input.value="";
    }
}


button.addEventListener("click", createElement);
input.addEventListener("keypress", generateElement);

