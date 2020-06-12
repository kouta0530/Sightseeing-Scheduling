var side = new Vue({
    el:".side",
    data:{
        name: "",
        mapArray:[]
    },
    methods: {
        schedule(){
            this.mapArray.sort(sortMapArray);
            alert("並び替えました");
        },
        all_delete(){
            this.mapArray.splice(0,this.mapArray.length);
        },
        add(name){
            this.name = name;
            judgeMapPoint(this.name,this.mapArray);
        },
        address(latlng){
            Search(latlng,this.mapArray);
        },
        select(name){
            this.name = name;
            const mi = this.searchMapDataIndex();
            const map = this.mapArray[mi];

            Options.center = map.getPoint();
            initMap(Options);
            
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
    }
});