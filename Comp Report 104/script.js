function add(){

    //var node = document.createElement("LI");                 
    var inputText = document.getElementById('toDotxt').value;
    //var textnode = document.createTextNode(inputText);         
    //node.appendChild(textnode);                        
   // document.getElementById("t").appendChild(node);

    document.getElementById('toDotxt').value = "";

    
    var current = document.getElementById("list").innerHTML
    
    var buttonClose = `<button class='button-close' onClick='remove("` + inputText + `")'>X</button>`

   document.getElementById("list").innerHTML = current + `<li class="item-todo" id='item-${inputText}'>` + inputText + buttonClose + "</li>";
}

function remove(text){
    document.getElementById('item-' + text).remove();
}