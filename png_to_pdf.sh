#!/bin/bash

# assign the full path to the target folder to your FILES variable
FILES=/home/your_user/auto_archive_scripts/bbchomepage/*.png

for f in $FILES

do

    echo "$f"
    convert  "$f" -quality 100 -units PixelsPerInch -density 72x72 "$f".pdf 

done
