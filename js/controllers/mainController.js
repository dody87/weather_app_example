"use strict";
app.controller('mainController', [
  "$scope",
  "apiService",
  "$filter",
  "MEDIA",
  function($scope,apiService,$filter,MEDIA){
    $scope.forecast = {
      show:false,
      open:function(city){
        this.city = city;
        this.show = true;
        this.error = false;
        this.loading = true;

        var res = {};
        apiService.getSeaLevel(city.name,city.country).then(
          function(data){
            var list = [],
            labels = [];

            //Filter data in order to get only 9:00 am values.
            for (var i = 0; i < data.list.length; i++) {
              var item = data.list[i];
              if(item.dt_txt.indexOf('09:00:00')>-1){
                list.push(item.main.sea_level);
                labels.push(item.dt_txt.substring(0,10));
              }
            }

            $scope.forecast.seaLevel = {
              data:[list],
              labels:labels
            };

            $scope.forecast.loading = false;
          },
          function(){
            $scope.forecast.error = true;
            $scope.forecast.loading = false;
          }
        );
      },
      close:function(){
        this.show = false;
      }
    };

    var City = function(name,countryCode){
      this.country = countryCode;
      this.name = name.charAt(0).toUpperCase() + name.slice(1) + ', ' + countryCode.toUpperCase();

      this._init = function(){
        //getting weather info.
        var res = {};
        apiService.getWeatherData(name,countryCode).then(
          function(data){
            res.temp = data.main.temp;
            res.sunrise = new Date(data.sys.sunrise * 1000);
            res.sunset = new Date(data.sys.sunset * 1000);
            res.desc = data.weather[0].description;
            res.icon = MEDIA.icons[data.weather[0].icon];
          },
          function(){
            res.icon = MEDIA.icons['default'];
            res.error = true;
          }
        );
        this.weather = res;

        //getting cover image
        var _name = name.toLowerCase();
        this.image = MEDIA.images.indexOf(_name)>-1?_name:'default';

      };

      this._init();
    };

    var init = function(){
      $scope.today = new Date();
      $scope.loading = true;

      $scope.cities = [
        new City('London','uk'),
        new City('Amsterdam','nl'),
        new City('Paris','fr'),
        new City('Madrid','es'),
        new City('Bordeaux','fr')
      ];

      setTimeout(function () {
        $scope.loading = false;
        $scope.$apply();
      }, 2000);
    };

    init();
  }
]);
