var tasks = [];

function addtask() {
    var tasknm = document.getElementById("taskname");
    var taskname = tasknm.value;
    var taskd = document.getElementById("taskdes");
    var taskdes = taskd.value;
    if (taskname !== "") {
        tasks.push({ task: taskname,description: taskdes, complete: false });
        tasknm.value = "";
        taskd.value = "";
        update();
    }
    else{
        alert("Please enter a Task");
    }
}

function update() {
    var pendingtasks = document.querySelector(".taskcontainer");
    var completedtasks = document.querySelector(".task2container");
    pendingtasks.innerHTML = "";
    completedtasks.innerHTML = "";
    for ( var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        var div= document.createElement("div");
        var p = document.createElement("p");
        var span= document.createElement("span")
        var button = document.createElement("button");
        p.innerText = task.task;
        span.innerText = task.description;
        if (task.complete) {
            button.innerText = "Delete";
            button.onclick = (function (i) {
                return function () {
                    tasks.splice(i, 1);
                    update();
                };
            })(i);
            div.classList.add("completed");
            div.appendChild(p);
            div.appendChild(span);
            div.appendChild(button);
            completedtasks.appendChild(div);
        } else {
            button.innerText = "Complete";
            button.onclick = (function (i) {
                return function () {
                    tasks[i].complete = true;
                    update();
                };
            })(i);
            div.appendChild(p);
            div.appendChild(span);
            div.appendChild(button);
            pendingtasks.appendChild(div);
        }
    }
}

var addInput= document.getElementById("taskname");
addInput.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        document.getElementById("addtask").click();
    }
})
var addDes= document.getElementById("taskdes");
addDes.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        document.getElementById("addtask").click();
    }
})
update();