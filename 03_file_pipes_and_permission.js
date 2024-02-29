
            //----- (01) - (Reading Files)

// => LESS


// :~$  less textfile.txt

// :~$  ls 

// -  textfile.txt  test1.c   test2.c   test3.cpp

// :~$  vi textfile.txt

// :~$  less 

// :~$  less textfile.txt

// :~$  more textfile.txt


            //  (Man)


// :~$  man less         // => manual for less.

// :~$  less --help      // => summary of less Commmand

// :~$  man python3


            // (cat)


// :~$ cat textfile.txt           // => cat does is read the entire file and output it



            // (Head OR Tail)


// :~$ tail textfile.txt             

// :~$ head textfile.txt        
 
// :~$ tail -n 3 textfile.txt          // =>  just see three lines

// :~$ tail -f textfile.txt   

// :~$ ^c  //--> that 's out of

// open the new terminal

// :~$ echo hi  >> textfile.txt        // => add something to the end of the file

// :~$ echo hi there >> textfile.txt

// :~$ ^c

// :~$ clear 


// -----------------------------------------------------------------------


// => primary Directory

// /home/username             // => home directory

// :~$  ls 

// :~$  pwd

// :~$  mkdir my-new-folder 

// :~$  ls
 
// :~$  cd my-new-folder/

// :~$  /my-new-folder ls

// :~$  pwd

// :~$  mkdir -p hi/my/name/is/brian

// :~$  ls
// =>  Home hy my-new-folder snap textfile.txt

// :~$   cd hi/

// :~/hi$  ls 

// => my

// :~/hi$  cd my/name/is/brian/

// :~/hi/my/name/is/brian$  ls

// :~/hi/my/name/is/brian$  pwd



            //----- (02) - (Creating & Moving Files)


// => Create a new file called "textfile2.txt" in the "/home/username 


// :~$  mkdir --help

// :~$  cd ~

// :~$  ls

// :~$  ls -lash

// :~$  touch my-new-file.txt   //change modify time
 
// :~$  ls -lash

// :~$  touch my-new-file.txt

// :~$  echo "Hello World!" >            

// clear


// ------------------------------------


// :~$  rm my-new-file.txt      // => remove one file

// :~$  ls

// :~$  rm my-new-folder/ 

// :~$  rm -r my-new-folder/ 

// :~$  ls

// :~$  mkdir lol

// :~$  cd lol

// :~/lol$  touch some-file.txt

// :~$  cd ..

// :~$  rm -r lol

// :~$  ls

// :~$  mkdir -p lol/hey

// :~$  rm -r lol

// :~$  ls



// :~$  rm -rf /.            // =>  Never run this command:This is a famous command to run that will 
                             // =>  start deleting your whole system including the critical system files. 

//  trash-cli

// :~$  clear


//------------------------------------------------------

// :~$  ls

// :~$  cp source-file.txt destination-file.txt

// :~$  ls   

            // => Home   destination-file.txt  hi  snap textfile.txt
          

// :~$  cp -R hi bye   

// :~$  ls -lsah

// :~$  cd bye

// :~/bye$  ls

// :~/bye$  cd my/name/is/brian/

// :~/bye/my/name/is/brian/$  cd ~

// :~$  ls

// :~$  mv bye something-else            // Mv => (moving file - move file)

// :~$  ls

// :~$  mv destination-file.txt another-file.txt

// :~$  ls

// :~$  clear


// --------------------------------------------------------------

// ===---> tar           // => Zip is initialy Compress

// :~$  mkdir folder1

// :~$  cd folder1/      // Go to That Directory

// :~/folder1$  touch file1.txt file2.txt file3.txt file4.txt

// :~/folder1$  ls

// :~/folder1$  cd ..

// :~$  ls

// :~$  tar -cf archive.tar textfile.txt folder1

// :~$  ls -lash

// :~$  tar -cfz archive.tar.gz textfile.txt folder1

// :~$  ls

// :~$  ls -lash

// :~$  mkdir extracted

// :~$  mv archive.tar.gz extracted/

// :~$  ls

// :~$  cd extracted/

// :~/extracted$  ls

// :~/extracted$  pwd

// :~/extracted$  clear


// -------------------------------------------------------------------


// :~/extracted$  tar -xzf archive.tar.gz some-folder

// :~/extracted$  tar -zxf archive.tar.gz some-folder

// :~/extracted$  ls

// :~/extracted$  ls -lash

// :~/extracted$  tar -xzf archive.tar.gz -C destination

// :~/extracted$  ls

// :~/extracted$  ls destination/

// :~/extracted$  ls



            //----- (03) - (Wildcards & Replacements)


// :~/extracted$  cd ..

// :~$  ls

// :~$  cd folder1/

// :~/folder1$  ls

// :~/folder1$  cd .. 

// :~$  mkdir folder2

// :~$  cd folder2

// :~/folder2$  touch file{1,2,3,4}.txt  


// :~/folder2$ ls

// => Output :
// => file1.txt file2.txt file3.txt file4.txt 
     

// :~/folder2$  touch file-{mn,wa,mt,ut}.txt


// :~/folder2$  ls

// => Output:
// => file-mn.txt  file-ut.txt  file1.txt  file3.txt
// => file-mt.txt  file-wa.txt  file2.txt  file4.txt
 

// :~/folder2$  touch file10.txt

// :~/folder2$  ls file-*          // => Showing Wildcard

// :~/folder2$  clear



// --------------------------------------------------------


// :~/folder2$  ls file*

// => file-mn.txt  file-ut.txt  file.tat  file1.txt   file2.txt  file4.txt
// => file-mt.txt  file-wa.txt  file.txt  file10.txt  file3.txt*/

// :~/folder2$  touch file.txt
// :~/folder2$  touch file*.txt
// :~/folder2$  touch file?.txt

// :~/folder2$  ls

// => file-mn.txt  file-ny.txt  file.txt   file10.txt  file3.txt
// => file-mt.txt  file-wa.txt  file1.txt  file2.txt   file4.txt

// :~/folder2$  ls file*.txt  

// => file-mn.txt  file-ny.txt  file.txt   file10.txt  file3.txt
// => file-mt.txt  file-wa.txt  file1.txt  file2.txt   file4.txt



// :~/folder2$  ls file?.txt
    
/* file1.txt  file2.txt  file3.txt  file4.txt */


// :~/folder2$  ls file-??.txt

// => file-ca.txt  file-mn.txt  file-mt.txt  file-ny.txt  file-ut.txt  file-wa.txt 


// ---------------------------------------------------------

// :~/folder2$  cd ..

// :~$  mkdir folder3 

// :~$  cd folder3

// :~/folder3$  touch file{1..30}.txt

// :~/folder3$  ls
    /** 
         *  file1.txt   file14.txt  file19.txt  file23.txt  file28.txt  file5.txt 
         *  file10.txt  file15.txt  file20.txt  file24.txt  file29.txt  file6.txt 
         *  file11.txt  file16.txt  file2.txt   file25.txt  file30.txt  file7.txt 
         *  file12.txt  file17.txt  file21.txt  file26.txt  file27.txt  file8.txt 
         *  file13.txt  file18.txt  file22.txt  file27.txt  file4.txt   file9.txt 

    */


// :~/folder3$  touch file{a..z}.txt

// :~/folder3$  ls
    /***
         *  file1.txt   file17.txt  file24.txt  file4.txt  filec.txt  filek.txt  files.txt
         *  file10.txt  file18.txt  file25.txt  file5.txt  filed.txt  filel.txt  filet.txt
         *  file11.txt  file19.txt  file26.txt  file6.txt  filee.txt  filem.txt  fileu.txt
         *  file12.txt  file2.txt   file27.txt  file7.txt  filef.txt  filen.txt  filev.txt
         *  file13.txt  file20.txt  file28.txt  file8.txt  fileg.txt  fileo.txt  filew.txt
         *  file14.txt  file21.txt  file29.txt  file9.txt  fileh.txt  filep.txt  filex.txt
         *  file15.txt  file22.txt  file3.txt   filea.txt  filei.txt  fileq.txt  filey.txt
         *  file16.txt  file23.txt  file30.txt  fileb.txt  filej.txt  filer.txt  filez.txt

         */


// :~/folder3$  echo {a..z}

// => a b c d e f g h i j k l m n o p q r s t u v w x y z

// :~/folder3$  echo {z..a}

// :~/folder3$  echo {z..a..2}

// :~/folder3$  echo {z..a..5}

// :~/folder3$  echo {1..100..10}

// :~/folder3$  echo {0..100..10}

// :~/folder3$  echo {A..Z..10}
// => A K U

// :~/folder3$  echo {a..Z..10}
// => a

// :~/folder3$  echo {A..z..10}
// => A K U _ i s    


// :~/folder3$  echo {a..z}{1..5}
/**
 *  a1 a2 a3 a4 a5 b1 b2 b3 b4 b5 c1 c2 c3 c4 c5 d1 d2 d3 d4 d5 e1 e2 e3 e4 e5 f1 f2 f3 f4 f5
 *  g1 g2 g3 g4 g5 h1 h2 h3 h4 h5 i1 i2 i3 i4 i5 j1 j2 j3 j4 j5 k1 k2 k3 k4 k5 l1 l2 l3 l4 l5 
 *  m1 m2 m3 m4 m5 n1 n2 n3 n4 n5 o1 o2 o3 o4 o5 p1 p2 p3 p4 p5 q1 q2 q3 q4 q5 r1 r2 r3 r4 r5 
 *  s1 s2 s3 s4 s5 t1 t2 t3 t4 t5 u1 u2 u3 u4 u5 v1 v2 v3 v4 v5 w1 w2 w3 w4 w5 x1 x2 x3 x4 x5 
 *  y1 y2 y3 y4 y5 z1 z2 z3 z4 z5
 * 
 * */ 

// :~/folder3$  echo {a..z}{1..5}{1..2}

// :~/folder3$  clear 


// ------------------------------------------------------------


// :~/folder3$  touch file\f?.txt

// :~/folder3$  ls          // => listing all the files in the directory


// :~/folder3$  touch file/ cool.txt

// :~/folder3$  ls

// :~/folder3$  touch file//.txt

// :~/folder3$  ls
