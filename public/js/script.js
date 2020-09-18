/*
const Options = {
    zoom: 18,      //地図の縮尺値
    center: {lat: 35.6811673, lng: 139.7670516},    //地図の中心座標
    mapTypeId: 'roadmap'   //地図の種類
};

マップの生成、埋め込み
function initMap(Options){
    const target = document.getElementById('map')
    const map = new google.maps.Map(target, Options);
    map.addListener("click",e =>{
        console.log(e);
        side.address(e.latLng);
        //Search(e.latLng);
    });
    const marker = new google.maps.Marker({
        position:Options.center,
        map:map
    });

}
*/


/*マップをクリックすると住所を特定する
const Search = (latLng,mapArray) =>{
    const geocoder = new google.maps.Geocoder();     
    const point = {"lat":latLng.lat(), "lng":latLng.lng()};

    geocoder.geocode({ location: point },function(results,status){           
        if (status === google.maps.GeocoderStatus.OK) {
            const address = results[0].formatted_address;
            createMapDataPushArray(address,point,mapArray);
        }
        else{
            alert("地名を追加できませんでした");
        };
    });
}
*/
/*地名->地名+座標データ*/
/*
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
*/

/*観光地のデータをリストに加える
const createMapDataPushArray =(name,point,mapArray)=>{
    const map_data = new MapData(name,point);
    map_data.setRoute();
            
    mapArray.push(map_data);
}
*/      

/*観光地のリストを並び替える*/
const sortMapArray = (map1,map2) => {
    if(map1.route > map2.route){
        return -1;
    }
    else{
        return 1;
    }
}

const Search_with_name = (name,geocoder,array) => {
    geocoder.geocode({ address: name },(results,status)=>{           
        if (status === google.maps.GeocoderStatus.OK) {
            const point =  {"lat":results[0].geometry.location.lat(), "lng":results[0].geometry.location.lng()};
            const map_data = new MapData(name,point);
            array.push(map_data);
        }
        else{
            alert('not in:', name);
        }
    });
}

const Search_with_latlng = (latlng,geocoder,array)=>{

    geocoder.geocode({ location: latlng },function(results,status){           
        if (status === google.maps.GeocoderStatus.OK) {
            const address = results[0].formatted_address;
            const map_data = new MapData(address,latlng);
            array.push(map_data);
        }
        else{
            alert("地名を追加できませんでした");
        };
    });
}