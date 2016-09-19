#
# import webapp2
#
#
# class RestHandler(webapp2.RequestHandler):
#
#   def dispatch(self):
#     #time.sleep(1)
#     super(RestHandler, self).dispatch()
#
#
#   def SendJson(self, r):
#     self.response.headers['content-type'] = 'text/plain'
#     self.response.write(json.dumps(r))
#
#
#
# APP = webapp2.WSGIApplication([
#
#   ('/rest/', RestHandler),
#
# ], debug=True)
#

from flask import Flask
app = Flask(__name__)
app.config['DEBUG'] = True

# Note: We don't need to call run() since our application is embedded within
# the App Engine WSGI application server.


@app.route('/')
def hello():
  """Return a friendly HTTP greeting."""
  return 'Hello World!'


@app.errorhandler(404)
def page_not_found(e):
  """Return a custom 404 error."""
  return 'Sorry, nothing at this URL.', 404
