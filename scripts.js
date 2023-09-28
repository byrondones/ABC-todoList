document.querySelector("#addTask").addEventListener("click", () => {

if(document.querySelector("#taskTitle").value != ''){
    document.querySelector("#taskArea").innerHTML += `
        <div>
            <button class="btn markBtn">☑️</button>
            <button class="btn deleteBtn">🗑️</button>
            <span class="fw-bold fs-3" id="listTitle">${document.querySelector("#taskTitle").value}</span>
            <p style="margin-left: 5;"><span class="ms-5 me-4" id="listDesc"></span>${document.querySelector("#taskDesc").value}</p>
            <hr>
        </div>
    `;

    document.querySelector("#taskTitle").value = "";
    document.querySelector("#taskDesc").value = "";
}else{
    alert("⚠️ Please Insert Title!");
};

document.querySelectorAll(".markBtn").forEach((markBtn) => {
    markBtn.addEventListener("click", (e) => {
            document.querySelector(`#listTitle`).style = "text-decoration: line-through;";
        });
    });

document.querySelectorAll(".deleteBtn").forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        });
    });

});
