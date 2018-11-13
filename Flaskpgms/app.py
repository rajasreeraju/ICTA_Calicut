from flask import Flask, render_template,request
app=Flask(__name__)

@app.route("/")
def index():
    return ("<b>hellooooo  Welcome to flask</b>")
@app.route("/home")
def home():
    return render_template('home.html')
@app.route("/about")
def about():
    return render_template('about.html')
@app.route("/contactus")
def contact():
    return render_template('contactus.html')
@app.route("/send",methods=['GET','POST'])
def send():
    # return "ssffffjfhgfhfhg"
    if(request.method=='POST'):
       getName=request.form['name']
       return render_template('result.html',newname=getName)
    
if(__name__=='__main__'):
    app.run(debug=True)