./browsermob-proxy -port 17000 >> /Users/aditya.pathivada/Desktop/proxy/logs/browsermob.log 2>&1 &
curl -X POST -d "port=8082" -d "trustAllServers=true" http://localhost:17000/proxy
proxy_values="{\"ip_address\":\"192.168.0.110\",\"local_port\":\"8082\",\"remote_port\":\"8082\"}"
"curl -H \"Content-Type: application/json\" -X POST -d \"$proxy_values\" http://localhost:31007/reverse_forward_tcp"
adb reverse tcp:8082 tcp:8082
adb shell settings put global http_proxy localhost:8082
curl -X PUT -d 'captureContent=true' -d 'captureHeaders=true' http://localhost:17000/proxy/8082/har