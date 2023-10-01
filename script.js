// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

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

document.addEventListener("DOMContentLoaded", function () {
    var tablinks = document.querySelectorAll(".tab-links");
    var tabcontents = document.querySelectorAll(".tab-contents");

    function openTab(event) {
        var tabname = event.currentTarget.dataset.tabname;

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
        var targetTab = document.getElementById(tabname);
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
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}