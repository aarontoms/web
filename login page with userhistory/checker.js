document.addEventListener("DOMContentLoaded", function(event){
    const data = JSON.parse(localStorage.getItem("userData")) || {}
    
    document.getElementById("name").addEventListener("input", function(){
        const n = document.getElementById("name").value

        if(data[n]){
            document.getElementById("mail").value = data[n].email
        }
        else{
            document.getElementById("mail").value = ""
        }
    })
    
    document.getElementById("myform").addEventListener("submit", function(event){
        let username = document.getElementById("name").value
        let email = document.getElementById("mail").value
        data[username] = {email}
        localStorage.setItem("userData", JSON.stringify(data))
        console.log("saved new data")
    })
    
    document.getElementById("name").addEventListener("focus", function(event){
        if(localStorage.length > 0){
            const pop = document.getElementById("pop");
            const rect = event.target.getBoundingClientRect();
            
            let userList = '';
            let userCount = 0;
            for (let user in data) {
                userList += `<button id="user-button" onclick="autofill(this)">${user}</button>`;
                userCount++;
            }
            console.log(userCount)
    
            pop.innerHTML = userList;
            pop.style.width = "280px"
            pop.style.top = (rect.top-(userCount*30))+"px";
            pop.style.left = `${rect.left}px`;
            pop.style.display = "block";
        }
    })
    document.getElementById("name").addEventListener("blur", function(event){
        setTimeout(function(){
            document.getElementById("pop").style.display = "none"
        }, 500)
    })
    
})


function autofill(element){
    let data = JSON.parse(localStorage.getItem("userData"))
    let n = element.innerText
    document.getElementById("name").value = n
    document.getElementById("mail").value = data[n].email
    document.getElementById("pop").style.display = "none"
}
function clearHistory(){
    localStorage.clear()
    document.getElementById("name").value = ""
    document.getElementById("mail").value = ""
    location.reload()
}