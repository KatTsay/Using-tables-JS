//4е задание
// let view = document.getElementById("view"),
// area = document.getElementById("area");
// document.body.onkeydown = keyHandler;
// function keyHandler(e) {
//     if (e.ctrlKey && (e.code === "KeyS" || e.code === "KeyE")) {
//         e.preventDefault();
//         if (e.code === "KeyS") {
//             if (area.style.display) {
//                 area.style.display = "";
//                 view.style.display = "block";
//                 view.textContent = area.value;
//             }
//         }
//         else {
//             if (!area.style.display) {
//                 area.style.display = "block";
//                 view.style.display = "none";
//                 area.value = view.textContent;
//             }
//         }
//     }
// }




//5е задание
document.addEventListener('DOMContentLoaded', () => {

const getSort = ({ target }) => {
const order = (target.dataset.order = -(target.dataset.order || -1));
const index = [...target.parentNode.cells].indexOf(target);
const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
const comparator = (index, order) => (a, b) => order * collator.compare(
    a.children[index].innerHTML,
    b.children[index].innerHTML
);

for(const tBody of target.closest('table').tBodies)
    tBody.append(...[...tBody.rows].sort(comparator(index, order)));

for(const cell of target.parentNode.cells)
    cell.classList.toggle('sorted', cell === target);
};

document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));

});




//6е задание
// function hook(e) {
//     let el = document.getElementById("div_main");
//     el.startX = (e.type == 'mousedown') ? (e.clientX - el.offsetWidth) : 0;
//     el.startY = (e.type == 'mousedown') ? (e.clientY - el.offsetHeight) : 0;
//     }
//     function move(e) {
//     let el = document.getElementById("div_main");
    
//     if(el.startX)
//     el.style.width = e.clientX - el.startX + 'px';
    
//     if(el.startY)
//     el.style.height = e.clientY - el.startY + 'px';
    
//     (e.preventDefault) ? e.preventDefault() : e.returnValue = false;
//     }
    
//     if(!document.attachEvent) {
//     document.attachEvent = function(e, f) {
//     this.addEventListener(e.substr(2), f, false);
//     }
//     }
//     document.attachEvent('onmouseup', hook);
//     document.attachEvent('onmousemove', move);
