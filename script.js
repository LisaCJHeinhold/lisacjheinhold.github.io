// let tablinks = document.getElementsByClassName("tab-links");
// let tabcontents = document.getElementsByClassName("tab-contents");

// function openTab(tabname) {
//     for(tablink of tablinks) {
//         tablink.classList.remove("active-link")
//     }
//     for(tabcontent of tabcontents) {
//         tabcontent.classList.remove("active-tab")
//     }
//     event.currentTarget.classList.add("active-link");
//     document.getElementById(tabname).classList.add("active-tab")
// };

const projectData = {
    "projects": [
        {
            "category": "code",
            "title": "Peach Tree Counciling",
            "description": "This is a live Website that I built for my Mother-In-Laws Counceling business. I used Svelte and SCSS to build the project. This was my first live website that is currently being used for a business.",
            "link": "https://peachtreecounselingservice.com/",
            "imageUrl": "./images/peachtree_long.png",
            "alt": "Peach Tree Counceling Website"
        },
        {
            "category": "code",
            "title": "Plums",
            "description": "This is a project I completed in my fullstack development class. I used React, Next.js, and Tailwind CSS to build the project. Its purpose is to be a mock website that is used to organize and manage tasks or notes, similar to canvas instructure. For the project our professor acted as a project manager and we use Jira to manage our implementation tickets.",
            "link": "https://plums-rosy.vercel.app/",
            "imageUrl": "./images/plums.png",
            "alt": "Plums Dashboard"
        },
        {
            "category": "wordpress",
            "title": "Sandhill Advertising",
            "description": "This is a wbsite I built using Wordpress and Divi for an advertising company that I interned for. I worked with a graphic Designer and a Marketer to design and build the website. It's purpouse it to give information about what advertising the company does and bring business to the company.",
            "link": "https://sandhilladvertising.com/",
            "imageUrl": "./images/sandhill.png",
            "alt": "Sandhill Advertising Website"
        },
        {
            "category": "wordpress",
            "title": "Vyctory Granite",
            "description": "This is a Wordpress site I built for a granite company who was a client of SandHill Media Group that I interned for. I designed and built this website using Divi and Wordpress. This website is used to promote the company and their services.",
            "link": "https://vygranite.com/",
            "imageUrl": "./images/vyctory.png",
            "alt": "Vyctory Granite Website"
        }
    ]
};

const projectList = document.querySelector('.project-list');

projectData.projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    projectDiv.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.alt}">
        <div class="layer">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
    `;

    projectList.appendChild(projectDiv);
});


document.addEventListener("DOMContentLoaded", function () {
    let tablinks = document.querySelectorAll(".tab-links");
    let tabcontents = document.querySelectorAll(".tab-contents");

    function openTab(event) {
        let tabname = event.currentTarget.dataset.tabname;

        // Remove "active-link" class from all tab links
        tablinks.forEach(function (link) {
            link.classList.remove("active-link");
        });

        // Remove "active-tab" class from all tab contents
        tabcontents.forEach(function (content) {
            content.classList.remove("active-tab");
        });

        // Add "active-link" class to the clicked tab link
        event.currentTarget.classList.add("active-link");

        // Add "active-tab" class to the corresponding tab content
        let targetTab = document.getElementById(tabname);
        if (targetTab) {
            targetTab.classList.add("active-tab");
        }
    }

    // Example of attaching the event listener to each tab link
    tablinks.forEach(function (link) {
        link.addEventListener("click", openTab);
    });

    // Initial setup to activate the first tab
    openTab({ currentTarget: tablinks[0] });
});

//get last updated
const lastupdated = document.querySelector("#updated");
lastupdated.textContent = document.lastModified;

//hamburger menu
let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}