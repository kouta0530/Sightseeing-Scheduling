$(document).on("click","#add",function(){
    const name = $("#name").val();
    judgeMapPoint(name);
    
});

$(document).on("click","li",function(){
    const name = $(this).text();
    const mi = searchMapDataIndex(name);
    const map = mapArray[mi];
    
    Options.center = map.getPoint();
    initMap(Options);

});

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

/*リストを描写する*/
const writeMapData = (map) =>{
    $("#list").append('<li>'+ map.getName() /*+ '<button id = "delete">削除</button></li>'*/);
}