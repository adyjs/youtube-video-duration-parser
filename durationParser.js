/*輸入 YouTube 影片時間字串  , ex :PTxxHxxMxxS*/
/*input YouTube duration string  , ex :PTxxHxxMxxS*/

function durationParser(timeStr){
	var hour = /\d*H/.exec(timeStr);
	var min = /\d*M/.exec(timeStr);
	var sec = /\d*S/.exec(timeStr);

	return secondLayerParser(hour , min , sec);

	function secondLayerParser( h , m , s){
		var hour="" , min="" , sec="" ;

		/*解析小時*/
		/*parsing hour*/
		if(h){
			hour = /\d*/.exec(h)[0]+":";
		}
		else{
			hour = "";
		}
		/*解析分鐘*/
		/*parsing minute*/
		if(m){
			min = /\d*/.exec(m)[0];
			if(min.length === 1){
				min = "0"+min;
			}
		}
		else{
			min = "00";
		}
		/*解析秒*/
		/*parsing second*/
		if(s){
			sec = /\d*/.exec(s)[0];
			if(sec.length === 1){
				sec = "0"+sec;
			}
		}
		else{
			sec = "00";
		}
		/*回傳完成的影片時間格式*/
		/*return digit time-code*/
		return hour+min+":"+sec;
	}
}