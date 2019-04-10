chrome.webRequest.onBeforeRequest.addListener(
//chrome.webRequest.onHeadersReceived.addListener(
	function(details){
		return {redirectUrl: chrome.extension.getURL("music163core.js")};//将请求重定向
	},
	{
	urls:["https://s3.music.126.net/web/s/core_*"],
	types:["script"]
	},
	["blocking"]
);
