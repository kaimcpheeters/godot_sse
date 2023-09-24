extends Node

var config = {
 "url":"http://127.0.0.1:5000/" 
}

func _ready():
	var sub_url = ""
	print('Connecting to:', config.url + sub_url)
	$HTTPSSEClient.connect("connected", self, "on_connected")
	$HTTPSSEClient.connect_to_host("localhost", "/", 5000, false, false)

func on_connected():
	$HTTPSSEClient.connect("new_sse_event", self, "on_new_sse_event")
	
func on_new_sse_event(headers, event, data):
	print("event: " + event)
	print("data: " + data) 
