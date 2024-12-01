
let currentlySelected = null
const projects = ['cakegame', 'nullworkbonelab', 'bananapeel', 'musicplayer', 'pizza', 'customizer', 'scprecreation']
const repoName = ''

// info divs
const placeholder = document.querySelector('#placeholderinfo')
const info = document.querySelector('#wholeinfopack')

// gallery - ALL SCREENSHOTS MUST BE PNG!
const mainScreenshot = document.querySelector('#currentImage') 
const gallery = document.querySelector('#gallery') 
const galleryButton = document.querySelector('#projectgallery')
const galleryExitButton = document.querySelector('#alternativeExit')
// const currentImage = document.querySelector('#currentImage')
const allImages = document.querySelector('#imageContainer')
const exitTrigger = document.querySelector('#exitTrigger')
const contentHolder = document.querySelector('#contentholder')
const errorMessage = document.querySelector('#nofilesavailable') 

// info 
const pName = document.querySelector('#projectname')
const pDesc = document.querySelector('#projectdesc')
const pType = document.querySelector('#projecttype')


let placeholderHidden = false

const descriptions = new Map([
    ['cakegame', {
        name: 'Unnamed project for \'Liepājas Dzimšanas Dienas torte 2024\' competition <div class="logo" style="--logoURL: url(\''+repoName+'media/images/Godot_icon.svg\')"></div>',
        type: 'Type: Game',
        description: '<img src="media/images/previewthingy.png" style="width:30%;height:30%;float:left;margin:1rem;border-radius:0.5rem">This was my first attempt at trying out a completely new game engine - the Godot Engine. Its language was very intuitive, basically just Python catered to game developers. I was very experimental with this one, attempting to seamlessly integrate both 3D and 2D scenes into a single cohesive game (which could\'ve turned out better if me and my teammates had a more systematic style). While it\'s still a mess, I believe that this was a great project to work on. Learned quite a few things during that journey, mostly about Godot and how thought out the engine was. I still preferred to work on the Unity engine, but this was a unique experience.<br><br>My team ended up getting 1st place. Though we were mostly carried by our vast knowledge of programming fields in the 2nd stage of this "gamejam".<br><br>This event was organized by the lovely people at <a style="color:#b833ff !important;--givenColor: #b833ff;" href="https://www.digip.lv/olimpiade-2024#olimpiade-about" target="_blank">Digitālo Inovāciju Parks</a>, thanks for hosting! :D<br><br>Project is available here: <a href="https://github.com/JanisNied/LiepajaDzimsanasTorte" target="_blank" style="color:#658ce6 !important;--givenColor: #658ce6;">(Link)</a>'
    }],
    ['nullworkbonelab', {
        name: 'Nullwork <div class="logo" style="--logoURL: url(\''+repoName+'media/images/bllogo.png\')"></div><div class="logo" style="--logoURL: url(\''+repoName+'media/images/unity.png\')"></div>',
        type: 'Type: Game modification',
        description: 'I genuinely love Bonelab. It\'s just a game of wonders. I understand that public opinion may not be so fond, but this is my own personal opinion. Not only do I love Bonelab, I also love programming and just generally solving problems. This mod is the result of that.<br><br><img src="media/images/nullworkscreenshot1.png" style="width:30%;height:30%;float:right;margin:1rem;border-radius:0.5rem">Nullwork is a recreation of a game with the same name, that was originally developed for Roblox <a href="https://www.roblox.com/games/4486383608/Nullwork" target="_blank" style="color:#658ce6 !important;--givenColor: #658ce6;">(Link)</a> - now brought to Unity and the VR space. My goal with this project was to step out of my comfort zone - specifically doing programming the normal way, because Bonelab has an unusual way of modding. Majority of actions have to be handled using events, specifically the <a href="https://kybernetik.com.au/ultevents/" target="_blank" style="color:#e5e835 !important;--givenColor: #e5e835;">UltEvents</a> package. It\'s almost as powerful as code, but requires quite the problem solving skills.<br><br>Currently though, this mod is broken due to Bonelab\'s recent updates to both the game and SDK. This leaves the mod in an unplayable state, hence why it\'s currently private to deter anyone from asking for updates (for my own sake). I will update it whenever school starts putting less pressure on me.<br><br>Mod will be available here, if updated: <a href="https://mod.io/g/bonelab/m/nullwork" target="_blank" style="color:#658ce6 !important;--givenColor: #658ce6;">(Link)</a>',
        screenshotDir: 'media/images/nlscreenshots/',
        screenshotCount: 6,
        videos: ['<iframe width="512" height="288" src="https://www.youtube.com/embed/htNshk7u_f4?si=kie9dXj3ow6_msVZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>','<iframe width="512" height="288" src="https://www.youtube.com/embed/IqyRdsPaYGY?si=y8Nu2v-S4_hP7uq1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>']
    }],
    ['bananapeel', {
        name: 'Banana Peel <div class="logo" style="--logoURL: url(\''+repoName+'media/images/bllogo.png\')"></div><div class="logo" style="--logoURL: url(\''+repoName+'media/images/unity.png\')"></div>',
        type: 'Type: Game modification',
        description: 'This one is a bit of a <i>silly</i> mod idea that I came up with at night. I\'m sure everyone knows how banana peels work in cartoons, apply that same logic to this mod and boom - Banana Peel. This is another modification for Bonelab that I made within an hour. Utilizing a <a href="https://github.com/WeatherElectric/TheLibraryElectric" target="_blank" style="color:#658ce6 !important;--givenColor: #658ce6;">mod library</a> I was saved from the hassle of working out how to trip players - the best solution for me is always going to be ragdolls. This mod has also succumbed to Bonelab updates, just like my previous entry, as well as the library I mentioned not being updated.<br><br> Check it out here!<br><iframe style="border-radius:1rem;max-width:50rem;max-height:50rem;width:67.5%;height:25rem" src="https://www.youtube.com/embed/7vKeYDaW944?si=XedIU6M3GfO65GcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><br><br>Mod will be available here, if updated: <a href="https://mod.io/g/bonelab/m/banana-peel" target="_blank" style="color:#658ce6 !important;--givenColor: #658ce6;">(Link)</a> ',
        hidegallery: true
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
addInteraction(projects, galleryButton, galleryExitButton)

// functions

function openGallery(current){
    const thing = descriptions.get(current)
    if (thing.videos || thing.screenshotDir) {
        contentHolder.classList.remove('none')
        if (thing.videos){
            for (let i = 0; i < thing.videos.length; i++){
                let newElement = document.createElement('div')
                newElement.classList.add('image')
                newElement.classList.add('flex')
                newElement.style.backgroundImage = ``
                newElement.innerHTML = thing.videos[i]
                allImages.appendChild(newElement)
            } 
        }
        // currentImage.style.backgroundImage = `url('${descriptions.get(current).screenshotDir}6.png')`
        if (thing.screenshotDir) {
            for (let i = 0; i < thing.screenshotCount; i++){
                let newElement = document.createElement('div')
                newElement.classList.add('image')
                newElement.style.backgroundImage = `url('${descriptions.get(current).screenshotDir}${i+1}.png')`
                allImages.appendChild(newElement)
            }
        }
    } else {
        errorMessage.classList.remove('none')
    }
    gallery.classList.toggle('none')
    gallery.classList.remove('vanish')
    gallery.classList.toggle('fadein')
    /*${repoName}/ add this later*/

} 
function closeGallery(current){
    gallery.classList.remove('fadein')
    gallery.classList.toggle('vanish')
    gallery.classList.add('zeroevents')
}

function addInteraction(elements, galleryButton, galleryExitButton){
    elements.forEach(element => {
        let object = document.querySelector(`#${element}`)
        object.addEventListener('click', () => {
            updateDescription(element)
        }) 
    });
    galleryButton.addEventListener('click', () => {
        openGallery(currentlySelected)
    })
    galleryExitButton.addEventListener('click', () => {
        closeGallery(currentlySelected)
    })
    gallery.addEventListener('animationend', function() {
        if (gallery.classList.contains('vanish')) {
            gallery.classList.toggle('none')
            allImages.innerHTML = ''
            contentHolder.classList.add('none')
            errorMessage.classList.add('none')
        }
        gallery.classList.remove('zeroevents')
    });
    exitTrigger.addEventListener('click', () => {
        closeGallery(currentlySelected)
    })
}

function updateDescription(id){
    let desc = descriptions.get(id)
    currentlySelected = id
    console.log(`[Projects] Currently selected (by ID): ${currentlySelected}`)
    if (galleryButton.classList.contains('none'))
        galleryButton.classList.remove('none')
    projects.forEach(element => {
        if (element != id)
            document.querySelector(`#${element}`).style.boxShadow = ''
        else
            document.querySelector(`#${element}`).style.boxShadow = '0 0 1rem 0.1rem #a096fc'       
    });
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
    if (desc.hidegallery)
        galleryButton.classList.add('none')
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