function showDropMenu(){
    document.getElementById("mydrop_down").classList.toggle("show");
}

window.onclick = function(e){
    if(e.target.matches('drop-menu')){
        let dropmenu = document.getElementsByClassName('drop-menu-js');
        for(var i = 0; i < dropmenu.length; i++){
            var opendropmenu = dropmenu[i];
            if(opendropmenu.classList.contains('show'))
                opendropmenu.classList.remove('show');
        }

    }
}