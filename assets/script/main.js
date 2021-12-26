// console.log('it works')

// presentation

const presentation = document.getElementById('presentation');
const presentationIcon = document.getElementById('presentationIcon');
const presentationTitle = document.getElementById('presentationTitle');


presentation.onmouseover = function () {
    presentationIcon.style.visibility = "hidden"
    presentationTitle.style.visibility = 'visible'
    presentationTitle.innerHTML = 'abaout Me '
}

presentation.onmouseleave = function () {
    presentationTitle.innerHTML = ''
    // presentationTitle.style.visibility = 'hidden'
    presentationIcon.style.visibility = "visible"
}

// front-end

const frontEnd = document.getElementById('front-end');
const frontEndIcon = document.getElementById('frontEndIcon');
const frontEndTitle = document.getElementById('frontEndTitle');


frontEnd.onmouseover = function () {
    frontEndIcon.style.visibility = "hidden"
    frontEndTitle.style.visibility = 'visible'
    frontEndTitle.innerHTML = 'Front End projects'

    console.log('entra')
}

frontEnd.onmouseleave = function () {
    frontEndTitle.innerHTML = ''
    frontEndIcon.style.visibility = "visible"
    console.log('esce')

}



// const BackEndBtn = document.getElementById('back-end');
// const contactBtn = document.getElementById('contact');



// "modalTitle"