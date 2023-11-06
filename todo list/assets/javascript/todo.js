const addtodo = document.getElementById("addtodo");
const todos = document.getElementById("todos");

function addTask() {
  if (addtodo.value === "") alert("Boş Tapşırıq göndərə bilməzsən !");
  else {
    let li = document.createElement("li");
    li.textContent = addtodo.value;
    todos.appendChild(li);
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
    saveData()
  }
  addtodo.value = "";
}

todos.addEventListener("click" , function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
} , false)

function saveData(){
   localStorage.setItem("data", todos.innerHTML) 
}
function showTask(){
    todos.innerHTML = localStorage.getItem("data")
}
showTask();