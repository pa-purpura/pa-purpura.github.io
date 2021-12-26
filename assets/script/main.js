
// presentation

const presentation = document.getElementById('presentation');
const presentationTitle = document.getElementById('presentationTitle');

presentationTitle.style.visibility = 'hidden'


presentation.onmouseover = function () {
    presentationTitle.style.visibility = 'visible'
}

presentation.onmouseleave = function () {
    presentationTitle.style.visibility = 'hidden'
}

// front-end

const frontEnd = document.getElementById('front-end');
const frontEndTitle = document.getElementById('frontEndTitle');

frontEndTitle.style.visibility = 'hidden'


frontEnd.onmouseover = function () {
    frontEndTitle.style.visibility = 'visible'
}

frontEnd.onmouseleave = function () {
    frontEndTitle.style.visibility = 'hidden'
}

// back-end

const backEnd = document.getElementById('back-end');
const backEndTitle = document.getElementById('backEndTitle');

backEndTitle.style.visibility = 'hidden'


backEnd.onmouseover = function () {
    backEndTitle.style.visibility = 'visible'
}

backEnd.onmouseleave = function () {
    backEndTitle.style.visibility = 'hidden'
}

// contact

const contact = document.getElementById('contact');
const contactTitle = document.getElementById('contactTitle');

contactTitle.style.visibility = 'hidden'


contact.onmouseover = function () {
    contactTitle.style.visibility = 'visible'
}

contact.onmouseleave = function () {
    contactTitle.style.visibility = 'hidden'
}