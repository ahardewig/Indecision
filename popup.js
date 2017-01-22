
var url = "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&excludePartOfSpeech=verb&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";                                                                   
var amazonurl = "https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=";
var testurl = "https://www.amazon.com";
var xhr = new XMLHttpRequest();
var appender;
function setup(){
xhr.open("GET", "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&excludePartOfSpeech=verb&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // JSON.parse does not evaluate the attacker's scripts.
    var resp = JSON.parse(xhr.responseText);
	appender = JSON.stringify(resp);
 	console.log(JSON.stringify(resp)); 
}
}
xhr.send();
}
function help() {
setup();
var v1 = appender.lastIndexOf(":");
var v2 = appender.lastIndexOf("}");
var appendfinal = appender.substring(v1 + 2, v2 - 1);
console.log(appendfinal);
var finalurl = amazonurl + "" + appendfinal;
chrome.tabs.update(null, {url: finalurl});
}



chrome.browserAction.onClicked.addListener(help);
