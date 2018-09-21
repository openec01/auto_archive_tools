#!/bin/bash
node /home/your_user/auto_archive_scripts/auto_bbchomepageLanding.js
node /home/your_user/auto_archive_scripts/auto_bbciplayer.js
node /home/your_user/auto_archive_scripts/auto_bbcnews.js
/usr/local/bin/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /home/your_user/auto_archive_scripts/auto_archive_Timeout.js
/usr/local/bin/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /home/your_user/auto_archive_scripts/auto_archive_noTimeout.js

