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

const information = new Vue({
    el:".information",
    data:{
        message:"行きたいところを検索バーに入力して追加してください。スケジュールボタンを押すとリスト内の観光地を並び替えて,おすすめの順番を教えてくれます."
    }
});
