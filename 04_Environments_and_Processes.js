
            //----- (01) - (Environment)

// :~$  printenv               // long list of environmental variables.                             

// :~$  echo $USER

// :~$  USER=brian            // set the value of an environment variable.

// :~$  echo Hello My Name is  $USER             // prints "Hello My Name is brian"

// :~$  echo $GREETING $USER, How are you ?      // prints "Hello My Name is brian, How are you ?"

// :~$  GREETING="Hello"         

// :~$  echo $GREETING $USER, How are you ?      // prints "Hello Brian, How are

// :~$  sudo vi /etc/environment 
// Exit vim :  type ':qa!'[ENTER]

// :~$  echo $TEST_THINK

// :~$  sudo vi /etc/environment 

// :~$  exit


// :~$  echo $TEST_THINK
// blah blah

// :~$  su brian
// Password:

// $  echo $TEST_THINK          // blah blah

// $  vi ~/.bash_rc.            // add export TEST_THINK=blah blah [ENTER], then type ':wq' to save and quit 

// $  exit


// :~$  vi ~/.bashrc             // open up bash run

// :~$  echo $ANOTHER_VARIABLE

// :~$  vi ~/.bashrc

// :~$  source ~/.bashrc          // reload .bashrc file so that changes take effect immediately.

// :~$  echo $ANOTHER_VARIABLE
// something cool

// :~$  v i .bash_profile
// Add the following line at the end of the file:*
// export PATH=$PATH:/usr/local/bin 