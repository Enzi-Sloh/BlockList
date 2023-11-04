const styles = `
.popup-windowbg{
    position: fixed !important;
    z-index: 2147483647;
    width: 100vw;
    height: 100vh;
    backdrop-filter: grayscale(100%) blur(10px);
    left:0px;
    top: 0px;
}
.popup-window{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    position: absolute;
    z-index: 2147483647;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(-45deg, #2AF598, #22E4AC, #1BD7BB, #14C9CB, #0FBED8, #08b3e5);
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
}

.h1text{
    font-size: 7.5em;
    color: black;
}

@keyframes gradient {
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
}
`

chrome.runtime.onMessage.addListener((obj) =>{
    let {tabName} = obj;

    activateDivider(tabName)
})

const activateDivider = (tabName) =>{
const styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

const bg = document.createElement('div')
bg.classList.add('popup-windowbg')
const content = document.createElement('div')
content.classList.add('popup-window')
const h1 = document.createElement('h1')
h1.classList.add('h1text')
h1.innerHTML = "Slow Down " + tabName + "!"
document.body.appendChild(bg)
bg.appendChild(content)
content.appendChild(h1)

}
