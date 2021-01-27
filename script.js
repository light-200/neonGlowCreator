


function loadDoc(showCode){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            showCode(this.responseText);
        }
    }
    xhttp.open("GET","borderFlicker.txt",true);
    xhttp.send();
}



loadDoc(showCode);

var code;

function showCode(str){
    code = str;
    document.getElementById("code").value = str;
}





const btn = document.getElementById("submit");

btn.addEventListener('click', e=>{
    var lightGlow = document.getElementById("input1").value;
    var darkGlow = document.getElementById("input2").value;

    if(lightGlow === '' || darkGlow === '') return;
    makeCode(lightGlow,darkGlow);
})


function makeCode(lg,dg) {

    while (code.indexOf("glowColor") !== -1 || code.indexOf("darkShade") !== -1) {
        code = code.replace("glowColor" , lg);
        code = code.replace("darkShade" , dg);
        showCode(code);
    }
    
}

const cover = document.querySelector(".cover");



cover.addEventListener("click",e=>{
    cover.classList.add('cover-hide');
    setTimeout(function(){cover.style.display = 'none';},2000);
});