var en_uri = encodeURI("https://ko.wikipedia.org/wiki/컴퓨터_과학");

var de_uri = decodeURI("https://ko.wikipedia.org/wiki/%EC%BB%B4%ED%93%A8%ED%84%B0_%EA%B3%BC%ED%95%99")

console.log(en_uri) // %EC... 이스케이프 처리

console.log(de_uri) // wiki/컴퓨터과학 

