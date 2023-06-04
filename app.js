//! HTML DOM ELEMENTS





const contentMenuStyle = document.createElement("style") //TODO <style> tagi yaradilir
contentMenuStyle.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
#cm-section{
    position: absolute;
    width: max-content;
    height: max-content;
    background: #F7F7F7;
    border: 0.47146px solid #C7C7C7;
    box-shadow: -1.41438px 1.41438px 5.65752px rgba(0, 0, 0, 0.25);
    border-radius: 8.48628px;
    padding: 9px 0;
    z-index: 10;
}
.cm-divs{
    height: 25px;
    font-family: 'Roboto', sans-serif;
    padding: 0 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 75ms all ease-in-out;
}
.cm-divs:hover{
    background: #3E92F8;
    color: #fff;
}
/* LIBRARY */
.border-bt{
    border-bottom: 2px solid #DFDFDF;
}
`

document.head.appendChild(contentMenuStyle) //TODO sehife acilan zaman yeni internal <style> tagi <head> tagine elave olunur

// ****************************************************

const contentMenuSection = document.createElement("section") //TODO <section> tagi yaradilir
contentMenuSection.id = "cm-section" //TODO <section>'a ID verilir
contentMenuSection.innerHTML = `<div class="cm-divs">Open Link in New Tab</div><div class="cm-divs" id="refreshBtn" onClick="refrestPage()">Refresh</div><div class="cm-divs border-bt">Open Link in New Incognito Tab</div><div class="cm-divs border-bt">Send Link to Your Device</div><div class="cm-divs">Save Link As...</div><div class="cm-divs border-bt">Copy Link Address</div><div class="cm-divs border-bt"><img src="./contextmenu-icons/Iconniphtio-icon.svg" alt="sm-icon">Save to Niphtio</div><div class="cm-divs">Copy</div><div class="cm-divs">Print...</div><div class="cm-divs border-bt">Open Link in New Tab</div><div class="cm-divs">Inspect</div>`

const firstChild = document.body.firstElementChild //TODO <body>'nin ilk elementi secilir
// location.reload();
window.addEventListener("contextmenu", (e)=>{
    e.preventDefault()
    console.log("attempt");
    document.body.insertBefore(contentMenuSection, firstChild) //TODO <body>'nin ilk elementinnen onceye menyu qoyulur
    contentMenuSection.style.top = `${e.pageY}px`
    contentMenuSection.style.left = `${e.pageX}px`
})

window.addEventListener("click",()=>{
    console.log("click"); //TODO PROB UCUN QOYULUB
    try {
        document.body.removeChild(contentMenuSection); //TODO contentmenu tapildiqda silinir,tapilmasa error cixarmir...
    }catch{

    }
})


function refrestPage (){
    window.location.reload()
}






