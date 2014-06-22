  

  app.value('dbURL', 'https://dl.dropboxusercontent.com/s/4zyu1bawtbr5m75/worldcup2014db.json')


  app.factory('httpRequest', function($http, dbURL) {
    return {
      getRound: function() {
        return $http.get(dbURL)
        .then(function(result) {
              return result.data
        });
      }
    };
  })
