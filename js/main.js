var channels = [
	'liquidtaeja',
	'ForGG',
	'AcerMMA',
	'ktrolsterflash',
	'Nathanias',
	'EmpireHappy',
	'optikdream'
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

		$.getJSON(
			'http://api.justin.tv/api/stream/list.json?channel=' + channelName + '&jsonp=?',
			function (twitchData) {
				var streamerText = '';
				if (twitchData && twitchData[0]) {
					if (twitchData[0].stream_type && twitchData[0].stream_type === 'live') {
						// live
						//$(elementSelector).html(onlineHTML)
						streamerText = channelName + ': <a target="_blank" href="http://www.twitch.tv/'+channelName+'">live</a>';
						console.log(streamerText);
					} else {
						// something other than live
						//$(elementSelector).html(offlineHTML)
						streamerText = channels[k] + ': offline';
						console.log(streamerText);
					}
				} else {
					// no data or invalid data from twitch
					//$(elementSelector).html(offlineHTML)
						streamerText = channelName + ': offline';
						console.log(streamerText);
				}
				streamersDiv.append($('<p>').html(streamerText));
			}
			)
	});
});
