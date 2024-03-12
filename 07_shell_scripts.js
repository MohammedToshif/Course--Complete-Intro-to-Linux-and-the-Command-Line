
            //----- (01) - (writing script)



// ls       (home directory)

// :~$ vi gen_files.sh

/* ( inside file = 
 mkdir -p~/temp
 cd ~/temp
 touch file(1..10).txt
 echo done )
 then escapse , :wq */

// :~$ source gen_files.sh      // done

// ls

// cd ..

// source gen_files.sh       // done

// cd ..

// . gen_files.sh           // done

// cd ..

// bash gen_files.sh        // done



            //----- (02) - (Hashbang)


// vi gen_files.sh

/* ( inside file = 

 #! /bin/bash

 mkdir -p~/temp
 cd ~/temp
 touch file(1..10).txt
 echo done )
 then escapse , :wq */

// mv gen_files.sh gen_files

// ls

// chmod +x gen_files

// ls

// ls -lsah

// ./gen_files          // done (excute)

// clear

//////------------------------------------------------------------


// which node           // /snap/bin/node

// vi node_test         // no extension

/* 
    #! /snap/bin/node

    console.log('this is running from node.js);

    :wq
            */

// chmod +x node_test

// ./node_test          // this is running from node.js

// clear


            
            //----- (03) - (Path & Variables)


// echo $PATH

// ls /user/local/sbin

// ls /user/local/games

// ls /snap/bin

// mkdir my_bin

// mv node_tese my_bin

// mv gen_files my_bin

// cd my_bin/

// /my_bin$ ls          // (gen_files node_test)

// vi .bashrc

/*
    export PATH=~/my_bin: $PATH
    :wq
        */

// vi .bashrc