
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
        description: '<img src="media/images/previewthingy.png" style="width:30%;height:30%;float:left;margin:1rem;border-radius:0.5rem">This was my first attempt at trying out a completely new game engine - the Godot Engine. Its language was very intuitive, basically just Python catered to game developers. I was very experimental with this one, attempting to seamlessly integrate both 3D and 2D scenes into a single cohesive game (which could\'ve turned out better if me and my teammates had a more systematic style). I was responsible for creating the points handling system, attempting to interconnect each minigame, so that regardless of how the code was written, it could be applied to my own codebase in a simple and quick manner. While it\'s still a mess, I believe that this was a great project to work on. Learned quite a few things during that journey, mostly about Godot and how thought out the engine was. I still preferred to work on the Unity engine, but this was a unique experience.<br><br>My team ended up getting 1st place. Though we were mostly carried by our vast knowledge of programming fields in the 2nd stage of this "gamejam".<br><br>This event was organized by the lovely people at <a style="color:#b833ff !important;--givenColor: #b833ff;" href="https://www.digip.lv/olimpiade-2024#olimpiade-about" target="_blank">Digitālo Inovāciju Parks</a>, thanks for hosting! :D<br><br>Project is available here: <a href="https://github.com/JanisNied/LiepajaDzimsanasTorte" target="_blank" style="color:#658ce6 !important;--givenColor: #658ce6;">(Link)</a>',
        videos: ['<iframe width="512" height="288" src="https://www.youtube.com/embed/p9oHkJ4_VyM?si=Ie_KRUlWlnhoz9cc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'],
        screenshotCount: 6,
        screenshotDir: 'media/images/cakegame/'
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
        name: 'Music Player <div class="logo" style="--logoURL: url(\''+repoName+'media/images/react.png\');background-repeat:no-repeat"></div><div class="logo" style="--logoURL: url(\''+repoName+'media/images/laravel.png\');"></div>',
        type: 'Type: Challenge project',
        description: 'This project is very self-explanatory. Just a simple music player, kind of like Spotify, but without all the complex features that come packaged with it. I\'m definitely proud of this one. Even if, technically, this project was made as practice for a competition, I believe that it taught me a lot. Compared to how I used to learn I noticed a significant increase in my learning abilities. This definitely shows here, quite a lot, though it\'s still quite a mess. <br><br><img src="media/images/musicplayer.png" style="width:30%;height:30%;float:right;margin:1rem;border-radius:0.5rem">Within a month I had to learn 2 new frameworks and an entirely new programming language. Didn\'t really seem like a hassle, especially the latter, since I already know all the fundamentals that make up programming. ReactJS gave me the most pain here. The hardest thing for me was figuring out a way to have the page interact with the JS code, since React does it a bit differently. PHP wasn\'t that much of a burden though, as a matter of fact it was quite simple when I got the hang of it. And with that also came Laravel, which genuinely is a lifesaver in terms of authentication handling and directory management. Thanks to Laravel for carrying this project.<br><br>Project available here: <a href="https://github.com/JanisNied/MusicPlayer" target="_blank" style="color:#658ce6 !important;--givenColor: #658ce6;">(Link)</a>',
        screenshotCount: 8,
        screenshotDir: 'media/images/musicplayer/',
        videos: ['<iframe width="512" height="288" src="https://www.youtube.com/embed/xU4c2MIzmaQ?si=300nCZh080LJzUBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>']
    }],
    ['pizza', {
        name: 'Pizza Delivery App <div class="logo" style="--logoURL: url(\''+repoName+'media/images/pizza.png\')"></div><div class="logo" style="--logoURL: url(\''+repoName+'media/images/java.png\');border-radius:0.5rem"></div>',
        type: 'Type: School assignment',
        description: 'I\'m sure someone has questions as to why I included a school assignment of all things. Well, this project is one of two projects that I genuinely enjoyed making and I am proud to show it to everyone else.<br><br>This, let\'s say, <i>simple</i> pizza delivery app simulator is probably the most complex thing I\'ve made in Java. I thought almost about every feature that was included - authentication, pizza selection and creation, orders and others. This one was a bit of a doozy, lost motivation here and there, but pulled through eventually. (Yeah, I finished the project overnight, don\'t blame me - it\'s genuinely <i>massive</i>.)<br><br>Speaking of authentication, I started using databases in this project. SQLite specfically, since it was the obvious choice for a quick and lightweight database. I didn\'t know what I was doing, but it still works - though looks like a mess, since I didn\'t know databases that much in my second year.<img src="media/images/pizzapreview.png" style="width:30%;height:30%;float:right;margin:1rem;border-radius:0.5rem"><br><br>My biggest achievement was figuring out how to make the address selection work. I was inspired by this same assignment, but from a person that was a year ahead. They had a similar system, though you couldn\'t click on the map to select your own address and had to write it manually (It was very prone to errors). I stepped it up a notch and did just that. I\'m shocked I even managed that.<br><br>Project available here: <a href="https://github.com/JanisNied/PizzaDeliveryApp" target="_blank" style="color:#658ce6 !important;--givenColor: #658ce6;">(Link)</a>',
        screenshotCount: 8,
        screenshotDir: 'media/images/pizzascreenshots/'
    }],
    ['customizer', {
        name: 'Character Customizer (DW) <div class="logo" style="--logoURL: url(\''+repoName+'media/images/unity.png\')"></div>',
        type: 'Type: School assignment',
        description: 'This project was also fun to work on during school. Since the tools we had to use were really close to heart for me. The goal was to make a character customiser of any sort. I had a few ideas, but I went with the one I currently have, because I had access to all of those assets from a <a href="https://www.roblox.com/games/13438553315/Decaying-Winter" target="_blank" style="color:#244cff !important;--givenColor: #244cff;">certain experience</a> on a gaming platform called <a href="https://roblox.com" target="_blank" style="color:#f5426c !important;--givenColor: #f5426c;">Roblox</a> (I made this project for fun. I have since removed any and all assets in relation to the game where they came from on my computer. I really like that game and I thank one <a href="https://www.roblox.com/users/526671532/profile" target="_blank" style="color:#c05cff !important;--givenColor: #c05cff;">one friend</a> in particular for introducing it to me).<br><br><img src="media/images/dwac/1.png" style="width:30%;height:30%;float:right;margin:1rem;border-radius:0.5rem">Honestly, there isn\'t anything special about this. I may have overcomplicated things slightly in the code, but it\'s certainly functional right now at least. I like the UI as well. I tried to mimick the original source and match it as closely while keeping the feel that I wanted for this project. Lore descriptions for both character types were written by a very special person to me - shoutout to them! This project also incorporates several paid assets (not included in the repo, but included in a compiled variant in the releases tab) which make this "game" look slightly better.<br><br>Project available here: <a href="https://github.com/JanisNied/Customiser" target="_blank" style="color:#658ce6 !important;--givenColor: #658ce6;">(Link)</a>',
        screenshotCount: 6,
        screenshotDir: 'media/images/dwac/'
    }],
    ['scprecreation', {
        name: 'Nullxiety\'s Site-07 Recreation <div class="logo" style="--logoURL: url(\''+repoName+'media/images/bllogo.png\')"></div><div class="logo" style="--logoURL: url(\''+repoName+'media/images/unity.png\')"></div>',
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
            console.log('[Gallery] Video mode')
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
            console.log('[Gallery] Image mode')
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
    galleryButton.classList.add('zeroevents')
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
            galleryButton.classList.remove('zeroevents')
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