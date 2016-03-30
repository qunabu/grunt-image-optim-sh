 #!/bin/bash
 if [ "$#" -eq  "0" ]
   then
     echo "No arguments supplied"
 else
     grunt --verbose --target=$1
 fi
