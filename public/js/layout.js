
/*
$(document).on("click","#add",function(){
    const name = $("#name").val();
    judgeMapPoint(name);
});*/
/*
$(document).on("click","li",function(){
    const name = $(this).text();
    const mi = searchMapDataIndex(name);
    const map = mapArray[mi];
    
    Options.center = map.getPoint();
    initMap(Options);

});
*/
/*
$(document).on("click","#delete",function(){
    const name = $(this).text();
    const mi = searchMapDataIndex(name);
    
    mapArray.splice(mi,1);
    $(this).parent().remove();
});

$("#all_delete").click(function(){
    mapArray.length = 0;
    $("#list").find("li").remove();
});

$("#schedule").click(function(){
    $("#list").find("li").remove();
    
    mapArray.sort(sortMapArray);
    
    for(let index in mapArray){
        const map = mapArray[index];
        writeMapData(map);
    }

    alert("観光地の順番を並び替えました");
});
*/

/*
const add = document.getElementById("add");
const all_delete = document.getElementById("all_delete");
const schedule = document.getElementById("schedule");



add.addEventListener("click",e => {
    const name = document.getElementById("name");
    const point = async(judgeMapPoint(name.value));
    console.log(point);
    createMapDataPushArray(name,point);
});

all_delete.addEventListener("click",e =>{
    mapArray.length = 0;
    delete_list();
});

schedule.addEventListener("click",e =>{
    delete_list();
    mapArray.sort(sortMapArray);
    
    for(let index in mapArray){
        const map = mapArray[index];
        writeMapData(map);
    }
    alert("観光地の順番を並び替えました");
});


/*リストを描写する
const writeMapData = (map) =>{
    const list = document.getElementById("list");
    let new_map_data  = document.createElement("li");
    
    new_map_data.textContent = map.getName();
    new_map_data.addEventListener("click",e=>{
        show_map_Data(new_map_data.textContent);
    });
    
    list.appendChild(new_map_data);
}
*/

/*リストを空にする
const delete_list = () =>{
    let list = document.getElementById("list");
    while(list.lastChild){
        list.removeChild(list.lastChild);
    }
}
*/

/*クリックした地名を表示する
const show_map_Data = (mapName) =>{
    const name = mapName;
    const mi = searchMapDataIndex(name);
    const map = mapArray[mi];
    
    Options.center = map.getPoint();
    initMap(Options);
}
*/