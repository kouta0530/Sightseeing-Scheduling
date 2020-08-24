var side = new Vue({
    el:".side",
    data:{
        name: "",
        mapArray:[],
        point:{"lat":0,"lng":0},
        latlng:{"lat":0,"lng":0},
        address:"",
    },
    methods: {
        schedule(){
            this.mapArray.sort(sortMapArray);
            alert("並び替えました");
        },
        all_delete(){
            this.mapArray.splice(0,this.mapArray.length);
        },
        add(){
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address: this.name },(results,status)=>{           
                if (status === google.maps.GeocoderStatus.OK) {
                    this.latlng = {"lat":results[0].geometry.location.lat(), "lng":results[0].geometry.location.lng()};

                }
                else{
                    alert('not in:' + this.name);
                };
            });
        },
        clickMap(latLng){
            const geocoder = new google.maps.Geocoder();     
            const point = {"lat":latLng.lat(), "lng":latLng.lng()};
            geocoder.geocode({ location: point },function(results,status){           
                if (status === google.maps.GeocoderStatus.OK) {
                    this.point = point;
                    this.address = results[0].formatted_address;
                }
                else{
                    alert("地名を追加できませんでした");
                };
            });
        },
        select(name){
            this.name = name;
            const mi = this.searchMapDataIndex();
            const mapData = this.mapArray[mi];
    
            map.setOption(mapData.getPoint());
            map.initMap();
            
        },
        /*検索地名があるか照合する (name) => -1 or index　name in MapArray*/ 
        searchMapDataIndex(){
            for(let map_data of this.mapArray){
                if(map_data.getName() == this.name){
                    return this.mapArray.indexOf(map_data);
                }
            }
            return -1;
        }
    },
    watch:{
        name:function(data){
            console.log(data);
        },
        address:function(address){
            const map_data = new MapData(this.address,this.point);
            const array = this.mapArray;
            map_data.setRoute();
            array.push(map_data);
        },
        latlng:function(latlng){
            const map_data = new MapData(this.name,latlng);
            map_data.setRoute();
            this.mapArray.push(map_data);
        },
    }
});