window.addEventListener("DOMContentLoaded", ()=>{
    
    //NAVIGATION
    let navbar = document.querySelectorAll(".nav-link");
    let main = document.querySelector("main");
    let minheight = window.innerHeight-118;

    function changePage(e) {
        let className = e.currentTarget.id;
        main.setAttribute("class", className);
        let activePage = document.querySelector(`.page.${className}`)
        let h = activePage.offsetHeight;
        main.setAttribute("style", `height:${h+100}px; min-height: ${minheight}px`);
    }
    
    for(let elem of navbar) {
        elem.addEventListener("click", changePage, true);
    }

    window.addEventListener("resize", (e) => {
        minheight = window.innerHeight-118;
        let className = main.getAttribute("class");
        let activePage = document.querySelector(`.page.${className}`)
        let h = activePage.offsetHeight;
        main.setAttribute("style", `height:${h+100}px; min-height: ${minheight}px`);
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

    let homePage = document.querySelector(`.page.home`)
    let height = homePage.offsetHeight;
    main.setAttribute("style", `height:${height+100}px; min-height: ${minheight}px;`);
})
