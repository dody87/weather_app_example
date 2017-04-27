"use strict";
app.factory('apiService', [
  '$http',
  '$q',
  'CONFIG',
  function($http, $q, CONFIG){
    var _get = function(url){
        var deferred = $q.defer();
        $http.get(encodeURI(CONFIG.api.url + url + '&appid='+CONFIG.api.id)).then(function(response){
          deferred.resolve(response.data);
        },function(response){
          console.error(response);
          deferred.reject(response);
        });
        return(deferred.promise);
    };

    var _getWeatherData = function(name,country){
      return _get('weather?units=metric&q='+name+','+country);
    };

    var _getSeaLevel = function(name,country){
      return _get('forecast?q='+name+','+country);
    };

    return({
      getWeatherData: _getWeatherData,
      getSeaLevel: _getSeaLevel
    });
  }
]);
