
            //----- (01) - (SSH & Secondary Machine)

/***
 * SSH : Secure Shell or Secure Socket Shell.
 *  It is a protocol in Linux that allows users to
 *  securely connect to a remote server.
 *
 *
 *
 * SSH is One computer to Another computer connection
 *
 * ***/

// :~$ multipass launch --name secondary   // => start a second Linux VM named secondary.

// :~$ multipass shell secondary        // =>  an example of multipass launch name secondary

// :~$ sudo useradd -s /bin/bash -m -g ubuntu brian           // => create a new user called "brian

// :~$ sudo passwd brian                      // => add the user "brian" and give it access to bash, make home directory



            //----- (02) - (Linking two Machines with SSH)


/*Two Machine are Connect secondary & Primary*/

// :~$ ssh-keygen -t rsa                              => generate the RSA type key pair
/***
        Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/s/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/s/.ssh/id_rsa
Your public key has been saved in /c/Users/s/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:IinWd5gZ2Wqxg3ya8o/TzpsGAXIv0ttf/++ZPgG1mkU s@DESKTOP-Q3U80CS
The key's randomart image is:

+---[RSA 3072]----+
|                 |
|. o    o      E  |
| + o  + .    o . |
|. oooo O    . o  |
| .o+*.% S    =   |
| ...oB +.   o .  |
|  . o+ . .     . |
|   o.o+.  .   .o |
|    o=*.   ..+*. |
+----[SHA256]-----+


*/

// :~$ cd .ssh/



            //----- (03) - (SFTP)


// SFTP : Secure File Transfer Protocols
// transfer files between two computers


// :~$ sftp brian @<the same ip from the previous step>         
// Password: <enter your password here>
/*
Connected to localhost.

sftp> pwd
Remote working directory: /var/www/html

sftp> put testfile.txt

Uploading testfile.txt to /var/www/html/testfile.txt

testfile.txt    100%   50     0.0KB/s   00:00

*/



                        //-----(04) - (Wget)


/**send requests to the Internet and/or network.**/

// :~$ wget https://raw.githubusercontent.com/btholt/bash2048/master/bash2048.sh

// :~$ ls

// :~$ chmod 700 bash2048.sh

// :~$ ./bash2048.sh   


                        //----- (05) - (curl Basics)
 

// curl works more like a normal Linux program        

// :~$ curl https://raw.githubusercontent.com/btholt/bash2048/master/bash2048.sh
  
// :~$ curl https://raw.githubusercontent.com/btholt/bash2048/master/bash2048.sh > game.sh

// :~$  cat game.sh                            // display contents of
// file in terminal

// :~$ sh game.sh                             // run the script
 
// :~$ cd ~

// :~$ pwd
// /home/student

// :~$ python3 -m http.server 8000 --bind 0.0.0.0
// Starting HTTP Server: Running on http://0.0.0.0:8000/, Ctrl+C to stop server.

// :~$ exit                                               // close out of ssh session