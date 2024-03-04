
            //----- (01) - (Package Managment & APT Basics)


// :~$ dpkg --help
            // Usage: dpkg [options] command [arguments...]

// :~$ sudo apt install aptitude              // Installing aptitude tool   


// :~$ aptitude                

// :~$ apt-get install   aptitude           // Installing aptitude using apt       

// :~$  apt install lolcat         colorfull word

// :~$ lolcat --help                                // Checking if the package is installed correctly or not. 

// :~$ cat log.txt 

// :~$ lolcat log.txt   

//------------------------------------------------------------

// :~$ sudo apt install nodejs      //install

// :~$ node  -v     // Check Node Version

// :~$ node -e "console.log('hello from node')"             => hello from node

// :~$ apt search nodejs                            // Search for packages related to nodejs

// :~$ sudo apt remove nodejs

// :~$ apt show lolcat                 // Shows the package information of a specific package

// :~$ sudo apt autoremove                         // Removes unused dependencies after installing/removing a package.

// :~$ sudo apt update                     //update system package listings, then install/upgrade any new versions.

// :~$ apt list                         

// :~$ apt list --upgradeable                        // Lists upgradable Packages

// :~$ sudo apt upgrade                

// :~$ sudo apt full-upgrade                    // Upgrades all installed packages and their dependencies to newest versions, without removing.




            //-----(02) - (Snaps)

/***
    * Snaps update automatically and you actually can't stop that from happening really. Debs update whenever you choose to do so
        Snaps are safer. They're sandboxed and cannot break out of their home folders. Debs really can do whatever they want
        Snaps are also how Ubuntu lets publish GUI apps like Visual Studio Code, Spotify, Firefox, etc. There's more than just command line tools. [See here for the store][store].
        Debs are reviewed before they're allowed onto the registry. They have to be or else renegade devs could publish anything they want. Snaps, due to their sandboxing, don't have to be.
     */                    

// :~$ apt --help 

// :~$ sudo apt remove lolcat           // Remove Snap Package Manager 

// :~$ sudo snap install lolcat         

// :~$ ls -lsah | lolcat                               // Install LOLCAT in terminal using Snap

// :~$ sudo apt remove nodejs       

// :~$  snap info node                                 // Get Information about installed Snaps          

// :~$ sudo snap install --channel=14/stable  --classic node               // Install NodeJS using Snap with St

