
            //----- (01) - (Anatomy of the Command Line Interface)

// pwd      // (present working directory)            

// pwd

// pwd --help

// clear

// //-------------------------------

// cd /home                 // (cd - for change directory)

// pwd

// cd /home /toshif

// cd..

// pwd

// cd /home /toshif

// cd../..

// pwd

// pwd

// pwd 

// cd home

// cd toshif

// cd..

// cd../ toshif

// cd../ toshif /../ toshif


            //----- (02) - (CLI Directories & Arguments)


//  ls

// cd ..

// pwd

// ls

// pwd

// ls home

// ls --help

// clear

//--------------------------------------------

// echo hi

// echo welcome to frontend masters

// echo "welcome to frontend masters"



// which ls         (/bin/ls) bin - directory

// cd /bin

// ls


// cd /home

// pwd

// clear


            //----- (03) - (Flags)

// pwd --help

// clear


//-----------------------------------------------------------

// echo --help      (--help)

// man echo

// echo --help      (--help)

// clear


//-----------------------------------------------------------

// ls

// ls -l    (-l = another kind of flag, it is a long form output) (out = total 4)

// ls -l

// ls -l -a     (-a = show hidden files in directory)

// touch .hidden-files      (touch = just create a file)

// ls -l


//---------------------------------------------------------------


// ls --help

// ls --all

// ls -a    (-a = shorter way of --all)

// ls -l -a

// ls --all -l


//---------------------------------------------------

// ls       (Home snap)

// ls --ignore=snap     (Home)

// ls --ignore snap     (Home)

// ls --ignore=snap --ignore=Home 

// clear


//--------------------------------------------------------

// ls -lsah     (this give you full output and show all hidden files)

//  ls --help

// clear


// /-----------------------------

// ls --ignore snap (Home)

// ls -I snap   (Home)

// ls --help

// clear


//----------------------------------------------------

// pwd

// ls snap      (mltipass-sshfs)

// ls -lsah snap    

// ls snap -lsah

// ls -lsah snap

// ls snap -lsah



            //----- (04) - (CLI Search)


// pwd

// cd /

// ls       (for root directory)

//  cd ~        ( ~ represent your own home directory)

// pwd 

// cd ~/snap    (its going to home directory)

// pwd

// cd ~

// cd ..

// cd ..

// cd ~

// cd snap/

// cd ..

// cd /

// pwd

// cd ~

// clear



//--------------------------------------------------------

// ls -lsah snap

//  clear


//------------------------------------------------------

// cd home/

// cd..

// ls

// cd home/toshif/  (show all the directories)

// cd home/toshif/snap/multipass-sshfs/     (out = common/ current/)

// ls

// py   (the potential prgrm that are available to me that i can run with py.)

// python3


// if you hit Ctrl+R    = ls -lsah snap

// if you hit Ctrl+R    = ls snap/



        //----- (05) - (Bash histroty)


// :/$   tail ~/.bash_history

// :/$   pwd

// :/$   ls -a

// :/$   ls -a

// :/$   clear


// ---------------------------------------------

// :/$   ls -a

// :/$   !!

// :/$   clear


// ----------------------------------------------


// :/$   ls

// :/$   Ctrt+L   ==>  it also does clear.     // ctrl+N ==> No idea



// ==> Copy and paste on the command line


// ==> Ctrl+Shift+C and   Ctrl+Shift+V. <== 



            //----- (06) - (CLI Shortcuts)


// - Ctrl +  A - takes you to the beginning of the line

// - Ctrl +  E - takes you to end of the line

// - Ctrl +  K - "yank" everything after the cursosr

// - Ctrl +  U - "yank" everything before the cursosr

// - Ctrl +  Y - "paste" (paste in quotes because it doesn't actually go inti your system clipboard ) everything you yanked 

// - Ctrl +  L - clear the screen 

// - Ctrl +  R - reverse search through history




            //-----(07) - (Signals)


// - Ctrl + C - SIGINT

/* ==> So go type yes into your terminal, You'll find yourself with an infinite wall of 
 ever-spamming y s in front of you. To stop it, hit Ctrl + C and it'll stop immediately. */


// :/$   tail -f .bash_history



// :/$   yes

// - Ctrl + C 

// - Ctrl + D



// - Ctrl + D = SIGINT


// ----------------------------------------------

// :/$   ps aux

// :/$   ps aux | grep yes

// :/$   clear 

// ----------------------------------------------


// :/$   yes > /dev/null &

// :/$   pas aux | grep yes

// :/$   kill -9 1465

// :/$   kill -l

// :/$   kill -SIGKILL 1467

// :/$   clear

// ----------------------------

// :/$   kill -l







