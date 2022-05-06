const circles="document".queryselectionall('.circle');
let activelight= 0;
setInterval(changelight, 1000);

function changelight(){
    circles[activelight].ClassName='circle';
    activelight++;
    if(activelight > 2){
        activelight = 0;
    }
    const currentlight= circles[activelight];
    currentlight.classlist.add(currentlight.getAttribute('color'));
}