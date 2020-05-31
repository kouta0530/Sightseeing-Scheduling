
        /*地名->地名+座標データ*/
        const judgeMapPoint = (name) =>{
            const geocoder = new google.maps.Geocoder();
            
            geocoder.geocode({ address: name },function(results,status){           
                if (status === google.maps.GeocoderStatus.OK) {
                    const point = {"lat":results[0].geometry.location.lat(), 
                                    "lng":results[0].geometry.location.lng()};     
                    
                    createMapDataPushMapArray(name,point);
                }
                else{
                    alert("not in " + name);
                };
            });
        }

        /*観光地のデータをリストに加える、リストの描写を更新*/
        const createMapDataPushMapArray =(name,point)=>{
            const map_data = new MapData(name,point);
            map_data.setIndex(mapArray.length);
            map_data.setRoute();

            mapArray.push(map_data);
            writeMapData(map_data);
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

        /*検索地名があるか照合する (name) => -1 or index　name in MapArray*/ 
        const searchMapDataIndex = (name) => {
            for(let map_data of mapArray){
                if(map_data.getName() == name){
                   return mapArray.indexOf(map_data);
                }
            }
            return -1;
        }


