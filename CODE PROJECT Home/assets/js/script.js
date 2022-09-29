function changeVid(id){
    var el = document.getElementById(id)
    var el_hiking = document.getElementById("hiking")
    var el_fishing = document.getElementById("fishing")
    var el_camping = document.getElementById("camping")
    var video = document.getElementById("video")
    var namabutton = document.getElementById("namabutton")
    var judul = document.getElementById("judul")
    var des = document.getElementById("des")

    el.style.color = "#398AB9";
    el.style.textDecoration = "underline";

    if(id === "hiking"){
        video.setAttribute("src","../CODE PROJECT Home/assets/img/video.mp4")
        el_camping.style.color = "#000000" 
        el_fishing.style.color = "#000000"
        el_camping.style.textDecoration = "none"
        el_fishing.style.textDecoration = "none"
        namabutton.innerHTML = "Hiking"
        judul.innerHTML = "HIKING IN THE MOUNTAIN"
        judul.style.fontFamily = "calibri"
        judul.style.fontSize = "3.5vw"
        judul.style.fontWeight = "bold"
        judul.style.letterSpacing = "0.4vw"
        des.style.innerHTML = "Explore the world the Travelies way, with fantastic hiking journeys in Europe, Asia, Africa, Latin America, the Pacific, and many more!\n\nYou will be guided by a guide to climb the mountain of your choice. There, you can eat the food of your choice while enjoying the beautiful view from up there.\n\nGo explore more hiking trip choices with Travelies!"
        
    }else if(id ===  "fishing"){
        video.setAttribute("src","../CODE PROJECT Home/assets/img/fishing.mp4")
        el_camping.style.color = "#000000" 
        el_hiking.style.color = "#000000"
        el_camping.style.textDecoration = "none"
        el_hiking.style.textDecoration = "none"
        namabutton.innerHTML = "Fishing"
        judul.innerHTML = "FISHING IN THE LAKE"
        judul.style.fontFamily = "calibri"
        judul.style.fontSize = "3.5vw"
        judul.style.fontWeight = "bold"
        judul.style.letterSpacing = "0.4vw"
        des.style.innerHTML = "Explore the world the Travelies way, with fantastic fishing journeys in Latin America, Europe, Asia, the Pacific, Africa, and many more\n\nYou will be guided by a guide to sail to the fishing location. There, you can use the existing tools to fish as you please, and eat what has been provided.\n\nGo explore more fishing trip choices with Travelies!"

        
    }else if(id === "camping"){
        video.setAttribute("src","../CODE PROJECT Home/assets/img/camping.mp4")
        el_fishing.style.color = "#000000" 
        el_hiking.style.color = "#000000"
        el_fishing.style.textDecoration = "none"
        el_hiking.style.textDecoration = "none"
        namabutton.innerHTML = "Camping"
        judul.innerHTML = "CAMPING IN THE GROUND"
        judul.style.fontFamily = "calibri"
        judul.style.fontSize = "3.5vw"
        judul.style.fontWeight = "bold"
        judul.style.letterSpacing = "0.4vw"
        des.style.innerHTML = "Explore the world the Travelies way, with fantastic hiking journeys in Europe, Asia, Africa, Latin America, the Pacific, and many more!\n\nYou will be guided by a guide to climb your destination camping location. There, you can build a tent, enjoy the food that has been provided by the bonfire in the evening.\n\nGo explore more hiking trip choices with Travelies!"
    }
}