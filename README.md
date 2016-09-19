This project is for KQED challenger. It is a real-time radio/program displaying platform. 
 All of Data came from NPR API. Technologies involved in this project are 
including: AngularJS, BootStrap, npm, bower, JavaScript, HTML, CSS, JSON,
Python, AWS and Google Engine. 
 
This project was accomplished within 3 hours, but deploment it to Google Engine 
demands me more than 2 days. Now it still works only in local Google engine. 

So, I deploy it onto AWS. Here is the link: 
http://ec2-52-24-186-195.us-west-2.compute.amazonaws.com/kqedchallenger/app/#!/home

The other consume time part is to understand data structure of JSON files from NPR API. 
I tried to find Geolocation data, but NPR does not provide that API.  

The showing part I want to talk about is "Fresh air" page. When you click on a content, 
a frame will pop-out. In it, you can listen to the radio right way. If you want to
 go to the origin sources, you can just click the pop-out window. If you want to exit
 the pop-out window, please click on the blury background.

To run this project in your local machine: 

1. Pull the codes to your machine
2. Init npm (Be sure you have npm installed on your local machine)
3. In the terminal: npm install
4. Init bower (Be sure you have bower installed on your local machine)
5. In the terminal: bower install 
6. run codes. Bingo! You did it!
