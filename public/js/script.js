        
        var Options = {
            zoom: 15,      //地図の縮尺値
            center: {lat: 35.6811673, lng: 139.7670516},    //地図の中心座標
            mapTypeId: 'roadmap'   //地図の種類
        };

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
                this.route = this.point["lat"] ^2 + this.point["lng"] ^2;
            }

            getRoute(){
                return this.route;
            }

        };

        var mapArray = [];



        function initMap(){
            var target = document.getElementById('map')
            var map = new google.maps.Map(target, Options);
        }

        function judgeMapPoint(name){
            var geocoder = new google.maps.Geocoder();
            console.log(name);

            geocoder.geocode({ address: name },function(results,status){           
                if (status === google.maps.GeocoderStatus.OK) {
                    var point = {"lat":results[0].geometry.location.lat(), "lng":results[0].geometry.location.lng()};
                    createMapDataPushMapArray(name,point);
                }
                else{
                    alert("not in " + name);
                };
            });
        }

        function createMapDataPushMapArray(name,point){
            var map = new MapData(name,point);
            map.setIndex(mapArray.length);
            map.setRoute();


            mapArray.push(map);
            writeMapData(map);
        }

        function writeMapData(map){
            $("#list").append('<li>'+ map.getName() /*+ '<button id = "delete">削除</button></li>'*/);
        }

        function sortMapArray(map1,map2) {
            if(map1.route > map2.route){
                return 1;
            }
            else{
                return -1;

            }
        }

        function searchMapDataIndex(name){
            
            for(i in mapArray){
                var map = mapArray[i];

                if(map.getName() == name){
                   return i;
               }else{
                   
               }
            }
        }



        $(document).on("click","#add",function(){
            var name = $("#name").val();
            judgeMapPoint(name);

        });

        $(document).on("click","li",function(){
            var name = $(this).text();
            var mi = searchMapDataIndex(name);
            
            var map = mapArray[mi];
            Options.center = map.getPoint();
            initMap(Options);

        });

        $(document).on("click","#delete",function(){
            var name = $(this).text();
            var mi = searchMapDataIndex(name);

            mapArray.splice(mi,1);

            $(this).parent().remove();
        });

        $("#all_delete").click(function(){
            mapArray.length = 0;
            $("#list").find("li").remove();
            console.log(mapArray);
        });

        $("#schedule").click(function(){
            $("#list").find("li").remove();
            mapArray.sort(sortMapArray);
            console.log(mapArray);

            for(var index in mapArray){
                var map = mapArray[index];
                writeMapData(map);
            }

            console.log(mapArray);
        });

