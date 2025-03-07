function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

const currentDate = new Date();

const options = { month: "short", day: "2-digit", year: "numeric" };
const formattedDate = currentDate.toLocaleDateString("en-US", options);

document.getElementById("current-date").textContent = formattedDate;

//========================================


let completedTasks = 0;
const totalTasksEl = document.getElementById("total-tasks");
const remainingTasksEl = document.getElementById("remaining-tasks");
const historyEl = document.getElementById("history");
const clearHistoryBtn = document.getElementById("clear-history");
const buttons = document.querySelectorAll(".complete-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        if (!this.disabled) {
            completedTasks++;
            this.disabled = true;
            this.classList.add("bg-gray-400");
            this.classList.remove("bg-blue-500");

            const taskTitle = this.closest(".task").querySelector(".task-title").textContent;
            const currentTime = new Date().toLocaleTimeString();


            alert("Board updated successfully");


            totalTasksEl.textContent = parseInt(totalTasksEl.textContent) + 1;
            remainingTasksEl.textContent = parseInt(remainingTasksEl.textContent) - 1;


            const historyItem = document.createElement("div");
            historyItem.classList.add("bg-slate-200", "my-2", "rounded-md", "p-2");
            historyItem.innerHTML = `<p>You Have Completed The Task ${taskTitle} at ${currentTime}</p>`;
            historyEl.appendChild(historyItem);

            if (completedTasks === buttons.length) {
                setTimeout(() => {
                    alert("Congrats!! You Have Completed All The Current Tasks");
                }, 500);
            }
        }
    });
});

clearHistoryBtn.addEventListener("click", function () {
    historyEl.innerHTML = "";
});




