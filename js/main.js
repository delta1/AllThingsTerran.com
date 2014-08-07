// streamers
// pro
// community
var channels = [
	'liquidtaeja',
	'ForGG',
	'AcerMMA',
	'ktrolsterflash',
	'Nathanias',
	'EmpireHappy',
	'optikdream',
	'filtersc'
	// demuslim
	// QuanticIllusion
	// mvp
	// bomber
	// polt
	// dragon
	// ruff
	// innovation
	// maru
	// jjakji
	// major
	// heromarine
	// bbyong
	// heart
	// dayshi
	// apocalypse
	// TY
	// Keen
	// Supernova
	// Select
	// liquidbunny
	// reality
	// iaguz
	// yoda happy neeb kas hack dream xenocider
	// ryung
	// marineking
	// byun center
	// HTOmario lagforce zan lucifron qxc theognis 
];
var streamersDiv = $('#streamers');
$(function(){
	console.log('dom ready');
	$.each(channels, function(k ,channelName) {

		$.ajax({ 
			type:'GET',
			dataType:'jsonp',
			url:'https://api.twitch.tv/kraken/streams/' + channelName,
			success: function (twitchData) {
				console.log(twitchData);
				var streamerText = '';
				if (twitchData && twitchData.stream) {
						streamerText = channelName + ': <a target="_blank" href="http://www.twitch.tv/'+channelName+'">online</a>';
						console.log(streamerText);
				} else {
					// no data or invalid data from twitch
					//$(elementSelector).html(offlineHTML)
						streamerText = channelName + ': offline';
						console.log(streamerText);
				}
				streamersDiv.append($('<p>').html(streamerText));
			}
		})
	});
});
