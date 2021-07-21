curl http://localhost:17000/proxy/8082/har -o /Users/aditya.pathivada/Desktop/proxy/bmpEx/lyodevBmp/src/main/resources/network.log
curl -X DELETE http://localhost:17000/proxy/8082
adb shell settings put global http_proxy :0