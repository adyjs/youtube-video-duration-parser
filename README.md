---
# youtube-video-duration-parser
a small parser function for YouTube Videos resource API

When you use YouTube Videos resource API , like  
"https://developers.google.com/youtube/v3/docs/videos" ,  
and with contentDetails part and videoId parameters , 

you will found that every video item request return JSON with a property called 'videoDuration' , like below

```
"contentDetails": {
    "duration": "PT5M39S",
    "dimension": ...
    ...
    ...
}
```

### examples : 
```
"PT1H55M55S"
means : 1H55M55S

"PT5M39S" 
means : 5M39S

"PT11H1S"
means : 11H01S
```
these are the duration time-code format string for youtube videos , 
```
'PT' is a regular prefix string
'H' for 'Hour'
'M' for 'Minute'
'S' for 'Second'
```
Maybe you notice that , not every duration string has all 3 letters , like the third example above , '11H1S' with no 'M' for minutes ,
it brings some parse and display problem.
Because of that , I code and done this small duration parser in JS with regular expression , 

### demo example :
```
input "PT1H55M55S"
it will outputs : 1:55:55

"PT5M39S" 
it will outputs : 05:39

"PT11H1S"
it will outputs : 11:00:01
```

just input the time-code string , it outputs time-code and fixes the digit display problem.

---

# youtube-video-duration-parser
# YouTube 時間格式解析程式  
用來解析 YouTube Videos 資源 API 回傳時間格式的小程式

當你在使用 YouTube Videos 資源 API , 類似像  
"https://developers.google.com/youtube/v3/docs/videos" ,  
加上 contentDetails part and videoId 等等的參數 , 

你就會發現每一個影片 request 回傳的 JSON，都會包含一個 videoDuration 的性質

```
"contentDetails": {
    "duration": "PT5M39S",
    "dimension": ...
    ...
    ...
}
```

### examples : 
```
"PT1H55M55S"
意思是 : 1H55M55S

"PT5M39S" 
意思是 : 5M39S

"PT11H1S"
意思是 : 11H01S
```
這是影片長度時間的格式字串

```
'PT' 是固定的前飾字串
'H' for '小時'
'M' for '分鐘'
'S' for '秒'
```
或許你有注意到，並不是每一個影片時間字串都會包含這三個字母，就像是上面的第三個例子，  
11H1S，並沒有包含 M 字母，  
這在解析跟顯示字串上會有一些小麻煩，  
因為要解決這個問題，我寫了一個小 JS function 配合正規表示式來解決這個問題。

### demo example :
```
input "PT1H55M55S"
這將會輸出 : 1:55:55

"PT5M39S" 
這將會輸出 : 05:39

"PT11H1S"
這將會輸出 : 11:00:01
```
只要直接輸入 YouTube return 的字串，這就會輸出調整好的時間格式字串。