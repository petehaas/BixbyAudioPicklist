var console = require('console');
var numbers = require('lib/numbers.js');

module.exports.function = function buildAudioInfo (searchNumber) {
   
  var audioItems = [];
  
  // Filter on search term (1-5)?
  if (searchNumber)
    numbers = numbers.filter(number => number.id == searchNumber);
    
  numbers.forEach((number) =>  {
    audioItems.push( {
      id: number.id,
      stream: [{url: number.url,format: 'mp3'}],
      title: number.title,
      artist: number.artist,
      subtitle: number.subtitle,
      albumName: number.albumName,
      albumArtUrl: 'images/bixby-logo.png'
    });
  });
  
  return audioItems;
  
  
}