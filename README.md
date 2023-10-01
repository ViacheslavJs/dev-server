# Development server

## About the project:
 
Outputting the result of executing the code to the system (not the editor!) command line - 
this will happen automatically when saving the file.
 
## How it works:
 
The node.js server monitors changes in the js code file. After saving the changes - server
automatically reboots and displays the result of executing the js code in the system console. The server reboot occurs thanks to the *nodemon* package.
Now, after making changes to a file, you do not need to re-enter the command to execute it -
 
instead of this:
 
  **Ctrl** + **s** + *$ node examples.js* + **Enter**
 
do it:
 
  **Ctrl** + **s**
   
...and that's it!

## Beginning of work: 

 - Clone the repository by running the command:
 
 $ *git clone https://github.com/ViacheslavJs/dev-server.git*

 - go to the *dev-server* directory:

 $ *cd dev-server*

 - installing packages:
 
 ~/dev-server$ *npm install*

 - starting the server:

 ~/dev-server$ *npm start*
 
Now you can work, for example, with the *map.js* or *object.js* file, which are 
located in the *examples* folder.
By making changes and saving the file using the combination **Ctrl** + **s**, the server instantly
will display the result on the command line.

Include the file required for work in the *main.js* file.

You can change the location of the example files as you wish.
But don't forget to change the paths in the *server.js* file as well.

To view the result through a browser (in text format), go to *localhost:3000*. 
But, in this case, to update the output, you will need to reload the browser page:

  **F5**

 



 
