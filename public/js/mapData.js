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

    setRoute(){
        this.route = (this.point["lat"] **2 + this.point["lng"] **2) **(1/2);
    }

    getRoute(){
        return this.route;
    }

};

