function sectionSelector(elementId){
    let headerHeightCompensation = 267;
    let posY = document.getElementById(elementId).offsetTop;
    let posX = document.getElementById(elementId).scrollLeft;
    window.scrollTo(posX, posY - headerHeightCompensation)
}