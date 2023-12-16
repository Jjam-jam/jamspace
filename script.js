let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

/* =============TO AVOID COPYRIGHT================ */

document.oncontextmenu = () => {
    alert("Contact me for a copy!")
    return false;
}

document.onkeydown = e => {
    //f12
    if(e.key == "F12") {
        alert("Contact me for source code!")
        return false;
    }

    //ctrl + u
    if(e.ctrlKey && e.key == "u") {
        alert("Contact me for source code!")
        return false;
    }

    //copying
    if(e.ctrlKey && e.key == "c") {
        alert("Don't try to copy page element!")
        return false;
    }
    
}
