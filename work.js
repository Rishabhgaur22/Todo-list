let todos = [];         //empty array

function Addtodo(){
    const inputvalue = document.querySelector("input").value;
    if(inputvalue){
    todos.push({
        inputval : inputvalue
    });
    document.querySelector("input").value = "";
    render();
    }
    else{
        alert("Please Enter a todo...");
    }   
}

function Edittodo(){
    alert("Edit fucntionality is coming soon...");
}

function Deletetodo(index){
    todos.splice(index,1);
    render();
}

function component(inputval,index){
    const divEl = document.createElement("div");
    const buttons = document.createElement("div");
    const spanEl = document.createElement("span");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    spanEl.innerHTML = inputval;
    editBtn.innerHTML = "Edit";
    deleteBtn.innerHTML = "Delete";

    divEl.setAttribute("class","todos");
    editBtn.setAttribute("class","Editbtn");
    editBtn.setAttribute("onclick","Edittodo()");
    deleteBtn.setAttribute("class","Dltbtn");
    deleteBtn.setAttribute("onclick",`Deletetodo(${index})`);

    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);
    divEl.appendChild(spanEl);
    divEl.appendChild(buttons)

    return divEl;
}

function render(){
    document.querySelector("#todo-list").innerHTML = "";
    for(let i = 0; i < todos.length; i++){
        const divEl = component(todos[i].inputval,[i]);
        document.querySelector("#todo-list").appendChild(divEl);
    }
    
}

