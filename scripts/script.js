const projects = ['cakegame', 'nullworkbonelab', 'bananapeel', 'musicplayer', 'pizza', 'customizer', 'scprecreation']

// info divs
const placeholder = document.querySelector('#placeholderinfo')
const info = document.querySelector('#projectinfo')

// info 
const pName = document.querySelector('#projectname')
const pDesc = document.querySelector('#projectdesc')
const pType = document.querySelector('#projecttype')

let placeholderHidden = false

const descriptions = new Map([
    ['cakegame', {
        name: 'Unnamed project for \'Liepājas Dzimšanas Dienas torte 2024\' competition',
        type: 'Type: Game',
        description: 'hello'
    }],
    ['nullworkbonelab', {
        name: 'Nullwork (Bonelab)',
        type: 'Type: Game modification',
        description: 'hello'
    }],
    ['bananapeel', {
        name: 'Banana Peel',
        type: 'Type: Game modification',
        description: 'hello'
    }],
    ['musicplayer', {
        name: 'Music Player',
        type: 'Type: Challenge project',
        description: 'hello'
    }],
    ['pizza', {
        name: 'Pizza Delivery App',
        type: 'Type: School assignment',
        description: 'hello'
    }],
    ['customizer', {
        name: 'Character Customizer (DW)',
        type: 'Type: School assignment',
        description: 'hello'
    }],
    ['scprecreation', {
        name: 'Nullxiety\'s Site-07 Recreation (Unity, Bonelab)',
        type: 'Type: Game modification, ProBuilder experimentation',
        description: 'hello'
    }]
])

// main logic
addInteraction(projects)

// functions
function addInteraction(elements){
    elements.forEach(element => {
        let object = document.querySelector(`#${element}`)
        object.addEventListener('click', () => {
            updateDescription(element)
        }) 
    });
}

function updateDescription(id){
    let desc = descriptions.get(id)
    if (desc){
        pName.innerHTML = desc.name
        pDesc.innerHTML = desc.description
        pType.innerHTML = desc.type
    }
    if (!placeholderHidden){
        placeholder.classList.toggle('none')
        info.classList.toggle('none')
        placeholderHidden = true
    }
    // how does this even work (reflow) this is just magic lol
    let elementRestart = [pName, pDesc, pType]
    elementRestart.forEach(element => {
        element.style.opacity = 0.0
        element.classList.remove('anim')
        void element.offsetWidth
    });
    elementRestart.forEach(element => {
        element.classList.add('anim')
    });
}