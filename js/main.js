/* algorithm 
-make img src is first img src
- make event click when you click on img you add active and remove from it siblings class acttive
- make check active andd call it in event to make src of main img is active img




*/
document.querySelector(".main-img img").src = document.querySelector(".sub-img img").getAttribute("src");

let imgs = document.querySelectorAll(".sub-img img");
imgs.forEach(ele => {
    ele.onclick = function(e){
        ele.classList.add("active");
        imgs.forEach(ele2 => {
                if(ele2.getAttribute("src") != this.getAttribute("src")){
                    if(ele2.classList.contains("active")){
                        ele2.classList.remove("active");
                    }
                }
        });
        checkactive();
    }

});


function checkactive(){
imgs.forEach(ele => {
    if(ele.classList.contains("active")){
        document.querySelector(".main-img img").src = ele.getAttribute("src");
    }
})
}



