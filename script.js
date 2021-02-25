window.addEventListener("DOMContentLoaded", ()=>{
    const softwareEngineer = {
        about: "I came a long way to realize that programming is my one true passion.\nIt allows me to express my creativity, make other's life easier and my life - exciting.",
        avalableForHire: true,
        // navigation: ["skills","projects","contacts","timeline"],
        mission: "make the world a nicer place to live",
        like: ["coding", "JavaScript", "Star Wars"],
    }
    
    let parent = document.querySelector(".nav-list");
    
    for (let key in softwareEngineer) {
        let value = softwareEngineer[key];
    
        let listItem = document.createElement("li");
        if (typeof value === "string") {
            listItem.innerHTML = `<span class="variable">${key}:</span> <span class="string">"${value}"</span>`;
        } else if (typeof value === "boolean") {
            listItem.innerHTML = `<span class="variable">${key}:</span> <span class="keyword">${value?"true":"false"}</span>`;
        } else if (Object.prototype.toString.call(value) === "[object Array]" && key === "navigation") {
            let newList = document.createElement("ul");
            value.forEach(link => {
                let newListItem = document.createElement("li");
                newListItem.innerHTML = `<span class="variable">${link}:</span> `;
                let button = document.createElement("span");
                button.setAttribute("class","link");
                button.setAttribute("id",link);
                button.innerHTML = "[...]";
                button.addEventListener("Click", (e) => {console.log(link)})
                newListItem.appendChild(button);
                newList.appendChild(newListItem);
            })
            listItem.innerHTML = `<span class="variable">${key}:</span> {`
            listItem.appendChild(newList);
            listItem.innerHTML += `}`
        } else if (Object.prototype.toString.call(value) === "[object Array]") {
            listItem.innerHTML = `<span class="variable">${key}:</span> [ <span class="string">"${value.join('"</span>, <span class="string">"')}"]</span>`;
        } else {
            console.log({type: Object.prototype.toString.call(value)})
        }
        parent.appendChild(listItem);
    }
})
