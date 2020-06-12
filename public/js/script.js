let Options = {
    zoom: 15,      //地図の縮尺値
    center: {lat: 35.6811673, lng: 139.7670516},    //地図の中心座標
    mapTypeId: 'roadmap'   //地図の種類
};

/*マップの生成、埋め込み*/
function initMap(Options){
    const target = document.getElementById('map')
    const map = new google.maps.Map(target, Options);
}


/*地名->地名+座標データ*/
const judgeMapPoint = (name,mapArray) =>{
    const geocoder = new google.maps.Geocoder();
            
    geocoder.geocode({ address: name },function(results,status){           
        if (status === google.maps.GeocoderStatus.OK) {
            const point = {"lat":results[0].geometry.location.lat(), "lng":results[0].geometry.location.lng()};     
            createMapDataPushArray(name,point,mapArray);
        }
        else{
            alert('not in:' + name);
        };
    });
}

/*観光地のデータをリストに加える*/
const createMapDataPushArray =(name,point,mapArray)=>{
    const map_data = new MapData(name,point);
    map_data.setRoute();
            
    mapArray.push(map_data);
}
        
/*観光地のリストを並び替える*/
const sortMapArray = (map1,map2) => {
    if(map1.route > map2.route){
        return -1;
    }
    else{
        return 1;
    }
}




