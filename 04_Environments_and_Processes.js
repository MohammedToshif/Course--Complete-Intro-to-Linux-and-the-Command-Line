
            //----- (01) - (Environment)

// :~$  printenv               // long list of environmental variables.                             

// :~$  echo $USER

// :~$  USER=brian            // set the value of an environment variable.

// :~$  echo Hello My Name is  $USER             // prints "Hello My Name is brian"

// :~$  echo $GREETING $USER, How are you ?      // prints "Hello My Name is brian, How are you ?"

// :~$  GREETING="Hello"         

// :~$  echo $GREETING $USER, How are you ?      // prints "Hello Brian, How are you ?

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



            //----- (02) - (Processes)


// :~$  ps                       // shows all processes with process name in them.

// :~$  sleep 1

// :~$  sleep 2

// :~$  sleep 10 &               // runs sleep command as a background process, returns its PID (process ID)

// :~$  ps

// :~$  kill -9 <sleep-process-id>      // kills a specific process, identified by

// :~$  ps

// :~$  sleep 100 &                  

// :~$  ps aux        

// :~$  ps

// :~$  kill -SIGKILL 1783           

// :~$  ps aux 

// :~$  ps aux | less

// :~$  ps aux | grep "ps"

// :~$  jobs         

// :~$  bg 1            

// :~$  fg 1              // CTRL+G End

// :~$  jobs 1

// :~$  bg 1

// :~$  jobs --help      

// :~$  jobs -l           // list process IDs in added

// :~$  kill -9 1793

// :~$  jobs 

// :~$  sleep 1000 & 

// :~$  jobs

// :~$  sleep 1000 > output.txt &

// :~$  jobs --help

// :~$  jobs -l 

// :~$  kill -9 1796 1797

// :~$  job -l



            //----- (03) - (Exit Codes & Process)


// :~$ date                  => Current Date 

// :~$ echo &?                => $? corresponds to the last exit code, in this case 0
 
// :~$ yes                    => hit CTRL+C to stop it

// :~$ echo $?               =>  you stopped it so it exited with a non-zero code, 130

            /*
                 any number from 0 to 256.

                0: means it was successful. Anything other than 0 means it failed
                1: a good general catch-all "there was an error"
                2: a bash internal error, meaning you or the program tried to use bash in an incorrect way
                126: Either you don't have permission or the file isn't executable
                127: Command not found
                128: The exit command itself had a problem, usually that you provided a non-integer exit code to it
                130: You ended the program with CTRL+C
                137: You ended the program with SIGKILL
                255: Out-of-bounds, you tried to exit with a code larger than 255
            */

// :~$ touch status.txt && date >> status.txt && uptime >> status.txt

// :~$ cat status.txt
            // current Date Time

// :~$ uptime

// :~$ false

// :~$ echo &?
        //301

// :~$ true 

// :~$ echo &?
        //308

// :~$ false && echo hi

// :~$ true && echo hi              // hi

// :~$ false && echo hi             // hi

// :~$ true && echo hi

// :~$ true ; false ; echo hi       // hi


                //  ( Subcommands )


// :~$ echo I think $(whoami) is a really cool user
            /*output : I think s is a really cool user*/

// :~$ echo the current date is &(date)

// :~$ echo $(date +%x) - $(uptime) >> log.txt

// :~$ cat log.txt

// :~$ echo hi $(cat < log.txt) User

// :~$ clear



// :~$ date && cat not-real-file.txt && echo hi         =>  the date will display but hi won't
