var delay = 3000,
		interval = 10000 + delay;
const elems = document.querySelectorAll('.hero-list-container .slr-iteration-list li');
const links = document.querySelectorAll('.hero-list-container .slr-iteration-list li a');
let timeoutTrack;
currentItem = 0 ,
        //intervalTrack;
showNextOne();

var intervalTrack = setInterval(function(){showNextOne();},interval);

function showNextOne()
{
    elems.forEach( el => {        
        if (el.classList.contains("showing")) {
            setTimeout(function(){
                el.classList.remove("showing");
            },300);
        }
    });

    const cur = elems[currentItem];
    const link = cur.querySelector('a');
    cur.classList.add("showing");

    cur.classList.add("in");
    var t = setTimeout(function() {
        link.classList.add("contact");
    }, delay);

	let timeoutTrack = setTimeout(function()
    {
        cur.classList.remove("in");
        cur.classList.add("out");
        setTimeout(function(){
            cur.classList.remove("out");
            //cur.classList.remove("showing");
            link.classList.remove("contact");
        },900);
    },interval);

    if(currentItem +1 >= elems.length) {
        currentItem = 0;
    } else {
        currentItem++;
    }   
}
