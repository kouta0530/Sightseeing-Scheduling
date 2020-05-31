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

class MapData{
    constructor(name,latlng){
        this.name = name;
        this.point = latlng
    }

    getName(){
        return this.name;
    }

    getPoint(){
        return this.point;
    }

    setIndex(index){
        this.index = index;
    }
    
    getIndex(){
        return this.index;
    }
    
    setRoute(){
        this.route = (this.point["lat"] **2 + this.point["lng"] **2) **(1/2);
    }

    getRoute(){
        return this.route;
    }

};

/*mapDataオブジェクトの配列*/
const mapArray = [];
