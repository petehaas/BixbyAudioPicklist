var console = require('console');

module.exports.function = function constructAudioInfo (audioItem) {

  return  {
    audioItem: audioItem,
    category: 'RADIO',
    displayName: 'Numbers',
    repeatMode: 'ALL'
  }
 
}