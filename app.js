const moonPath = "M22.5 52.5C22.5 81.4949 52.5 105 52.5 105C23.5051 105 0 81.4949 0 52.5C0 23.5051 23.5051 0 52.5 0C52.5 0 22.5 23.5051 22.5 52.5Z"

const sunPath = "M105 52.5C105 81.4949 81.4949 105 52.5 105C23.5051 105 0 81.4949 0 52.5C0 23.5051 23.5051 0 52.5 0C81.4949 0 105 23.5051 105 52.5Z" 

const darkMode = document.querySelector("#darkMode")
let toggle = false;

darkMode.addEventListener('click', () => {
    const timeline = anime.timeline({
        duration : 750,
        easing : "easeOutExpo"
        
    });
    timeline.add({
        targets: ".sun",
        d: [{
            value: toggle ? sunPath : moonPath}
        ]
    })
    
    .add({
        targets: "section",
        backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)',
        color: toggle ? 'rgb(22,22,22)' : 'rgb(225,225,255)'
    }, "-= 700");
    //everytime we click on sun it will switch
    if(!toggle){
        toggle=true;
    }else{
        toggle=false;
    }

});





