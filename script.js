window.addEventListener("DOMContentLoaded", ()=>{
    
    //NAVIGATION
    let navbar = document.querySelector("#navbar");
    let main = document.querySelector("main");

    console.log(navbar)
    navbar.addEventListener("click", (e) => {
        if (e.target.classList.contains("nav-link")) {
            let className = e.target.id;
            main.setAttribute("class", className);
        }
    })

    //HOMEPAGE
    const softwareEngineer = {
        about: "I came a long way to realize that programming is my one true passion.\nIt allows me to express my creativity, make other's life easier and my life - exciting.",
        avalableForHire: true,
        like: ["coding", "JavaScript", "Star Wars"],
        mission: "Make the world a nicer, life easier and people happier.",
    }
    
    let parent = document.querySelector(".nav-list");
    
    for (let key in softwareEngineer) {
        let value = softwareEngineer[key];
    
        let listItem = document.createElement("li");
        if (typeof value === "string") {
            listItem.innerHTML = `<span class="variable">${key}:</span> <span class="string">"${value}"</span>,`;
        } else if (typeof value === "boolean") {
            listItem.innerHTML = `<span class="variable">${key}:</span> <span class="keyword">${value?"true":"false"}</span>,`;
        } else if (Object.prototype.toString.call(value) === "[object Array]") {
            listItem.innerHTML = `<span class="variable">${key}:</span> [ <span class="string">"${value.join('"</span>, <span class="string">"')}"</span>] ,`;
        } 
        parent.appendChild(listItem);
    }
})
