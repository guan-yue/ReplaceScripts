chrome.webRequest.onBeforeRequest.addListener(
//chrome.webRequest.onHeadersReceived.addListener(
	function(details){
		return {redirectUrl: chrome.extension.getURL("music163core.js")};
	},
	{
	urls:["https://s3.music.126.net/web/s/core.js*"],
	types:["script"]
	},
	["blocking"]
);