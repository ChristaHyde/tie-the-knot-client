var configService = require('./services/config');
// API Features
var venues = require('./api/Venues');

module.exports = function(settings){
  var config = configService.getConfig(settings);
  var foursquare = {
    venues: venues(config)
  };
  return foursquare;
};