extends Node

var config = {
 "host":"localhost",
 "sub_url":"/",
 "port":5000
}

func _ready():
	print('Connecting to:', config)
	$HTTPSSEClient.connect("connected", self, "on_connected")
	$HTTPSSEClient.connect_to_host(config.host, config.sub_url, config.port, false, false)

func on_connected():
	$HTTPSSEClient.connect("new_sse_event", self, "on_new_sse_event")
	
func on_new_sse_event(headers, event, data):
	print("event: " + event)
	print("data: " + data) 
