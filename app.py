import os
from urllib.parse import urlparse
# import SimpleHTTPServer
from http import server
import socketserver
HOST = ('0.0.0.0', 80)

class Handler(server.SimpleHTTPRequestHandler):
    def do_GET(self):
        urlparts = urlparse(self.path)
        request_file_path = urlparts.path.strip("/")
        print (request_file_path)

        if not os.path.exists(request_file_path):
            self.path = 'index.html'

        return server.SimpleHTTPRequestHandler.do_GET(self)

httpd = socketserver.TCPServer(HOST, Handler)
httpd.serve_forever()
