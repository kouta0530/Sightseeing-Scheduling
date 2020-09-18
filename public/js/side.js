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
            Search_with_name(this.name,geocoder,this.mapArray);
        },
        clickMapDataAdd(latLng){ 
            //const geocoder = new google.maps.Geocoder();    
            this.point = {"lat":latLng.lat(), "lng":latLng.lng()};
            get_place_name(this.point,map.map,this.mapArray);
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
        },

        route(){
            const waypoint = [
                {location : this.mapArray[1].getPoint()},
                {location : this.mapArray[2].getPoint()},
                {location : this.mapArray[3].getPoint()},
                {location : this.mapArray[4].getPoint()},
            ]
            console.log(waypoint);

            get_route(this.mapArray[0].getPoint(),this.mapArray[this.mapArray.length - 1].getPoint(),waypoint);
        },

    },
    watch:{
        /*
        address:function(address){
            const map_data = new MapData(this.address,this.point);
            const array = this.mapArray;
            map_data.setRoute();
            this.mapArray.push(map_data);
            console.log("add");
        },
        */
    }
});