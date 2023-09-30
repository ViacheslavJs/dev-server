# Development server

## About the project:
 
Outputting the result of executing the code to the system (not the editor!) command line - 
this will happen automatically when saving the file.
 
## How it works:
 
The node.js server monitors changes in the js code file. After saving the changes, the server 
automatically reboots and displays the result of executing the js code in the system console.
Now, after changes in the file, you do not need to re-enter the command to execute -
 
instead of this:
 
  *Ctrl* + *s* + *$ node examples.js* + *Enter*
 
do it:
 
  *Ctrl* + *s*
   
...and that's it!

## Beginning of work: 

 - Clone the repository by running the command:
 
 $ *git clone https://github.com/ViacheslavJs/dev-server.git*

 - go to the *dev-server* directory:

 $ *cd dev-server*

 - installing packages:
 
 $ *npm install*

 - starting the server:

 $ *npm start*
 
Now you can work with the *examples.js* file, which is located in the *examples* folder.
Having made changes and saved the file using the *Ctrl* + *s* combination, the server will instantly 
display the result on the command line.

You can change the location of the file to work as you wish. 
But, don't forget to also change the path in the *server.js* file.


 



 
