class MapArray{
    constructor(MapArray){
        this.MapArray = MapArray;
    }
    /*検索地名があるか照合する (name) => -1 or index　name in MapArray*/ 
    searchMapDataIndex(name){
        for(let map_data of this.mapArray){
            if(map_data.getName() == name){
                return this.mapArray.indexOf(map_data);
            }
        }
            return -1;
    }
    

}