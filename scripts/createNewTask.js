document.getElementById("newTaskButton").addEventListener("click", function () {
    if ('content' in document.createElement('template')) {
        const taskRow = document.querySelector("#taskrow");
        const templateClone = document.importNode(taskRow.content, true);

        let tbody = document.querySelector("#organiserN tbody");
        tbody.insertBefore(templateClone, document.getElementById("newTaskRow"));
    }  else {
        document.body.innerHTML = "Your browser is incompatible."
    }
});