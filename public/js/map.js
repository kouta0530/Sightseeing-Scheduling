var map = new Vue({
    el:".main",
    data:{
        message:'行きたいところを検索バーに入力して追加してください。<br>スケジュールボタンを押すと並び替えを行います',
        lat: 35.6811673,
        lng: 139.7670516,
        Options:{
            zoom: 20,      //地図の縮尺値
            center: {lat: 35.6811673, lng: 139.7670516},    //地図の中心座標
            mapTypeId: 'roadmap'   //地図の種類
        },
        map:null
    },
    methods:{
        initMap(){
            this.target = this.$refs.map;
            this.map = new google.maps.Map(this.target, this.Options);
            
            const marker = new google.maps.Marker({
                position:this.Options.center,
                map:this.map
            });
            this.map.addListener("click",(e)=>{
                this.clickOnMap(e.latLng);
            });
        },

        clickOnMap(latLng){
            side.clickMapDataAdd(latLng);
            this.map.panTo({lat:latLng.lat(),lng:latLng.lng()});

        },

        setOption(Options){
            this.Options.center = Options;
        },
        setPoint(event){
            this.lat = event.latLng.lat();
            this.lng = event.latLng.lng();
        },
    },
    mounted: function(){
        this.initMap();
    }
});