let map = new Vue({
    el:".main",
    data:{
        message:"行きたいところを検索バーに入力して追加してください。スケジュールボタンを押すとリスト内の観光地を並び替えて,おすすめの順番を教えてくれます.",
        lat: 0,
        lng: 0,
        Options:{
            zoom: 15,      //地図の縮尺値
            center: {lat: 35.6811673, lng: 139.7670516},    //地図の中心座標
            mapTypeId: 'roadmap'   //地図の種類
        },
    },
    methods:{
        setOption(Options){
            this.Options = Options;
        },
        setPoint(event){
            this.lat = event.latLng.lat();
            this.lng = event.latLng.lng();
        },

        
    }
});