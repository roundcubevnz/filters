Roundcube Plugin Filters
============================

Roundcube Webmail 1.6 compatible.
Plugin that adds a new tab to the settings section to create client-side e-mail filtering.

@version 2.3.0
@author Yoshioki Matsunaga <yoshioki@matsunaga.me.uk>
@developer Artur Petrov <artur@phpchain.ru>

Installation
----------------------------------------

To install the plugin you have to:
1. Download zip-archive to Roundcube/plugins folder;
2. Unzip downloaded zip-archive;
3. Rename unziped folder to 'filters';
4. Add "filters" in the plugins section of the roundcube configuration (config/config.inc.php).
For example:
```
$config['plugins'] = array(
 'archive',
 'password',
 'filters',
);
```

Installation (ISPConfig 3.1)
----------------------------------------
```
#!/bin/bash
cd /usr/share/roundcube/plugins
wget https://github.com/yoshioki/filters/archive/master.zip
unzip master.zip && mv filters-master filters
cd filters && mkdir /etc/roundcube/plugins/filters
mv config.inc.php /etc/roundcube/plugins/filters/config.inc.php
ln -s /etc/roundcube/plugins/filters/config.inc.php config.inc.php
ln -s /usr/share/roundcube/plugins/filters /var/lib/roundcube/plugins/filters
```

Configuration
----------------------------------------

To setup the plugin, open the config.inc.php file and edit the following variables:
```
  $config['autoAddSpamFilterRule'] = TRUE;  // if TRUE a spam filter rule is created for all users which automatically move messages into junk folder if no filters rules
  $config['spam_subject'] = '[SPAM]';       // How to mark the spam in the subject? To have effect the previous variable must be TRUE.
  $config['caseInsensitiveSearch'] = TRUE;  // if TRUE filters searching in case insensitive mode.
  $config['decodeBase64Msg'] = TRUE;        // if TRUE decode base64 mail messages.
  $config['spam_headers'] = array('X-Spam-Flag','X-Spam-Status','X-Yandex-Spam'); // Check additional headers or amavisd-new headers like X-Spam-Flag, don't need mark spam in the subject
```

History
----------------------------------------


* 1.0. Initial version.
* 1.1. Fixed some important issues.
* 1.2. Fixed some minor issues - thanks to Marco De Vivo.
* 1.3. Fixed some minor issues and added additional translations: Dutch and French - thanks to Ruud van den Hout.
* 1.4. News: each rule can now filter all, read or unread messages.
* 1.5. Fixed some important issues detected with Roundcube 0.8
* 1.6. Added additional translation: German - thanks to Fynn Kardel.
* 1.7. Added additional translation: Russian - thanks to AresMax.
* 1.8. Added additional translation: Czech - thanks to Miroslav Baka.
* 1.9. Added additional translation: Spanish - thanks to Yoni (MyRoundcube Dev Team - www.myroundcube.com).
* 1.9.1. Added additional translations: Polish - thanks to Damian Wrzalski; Slovak - thanks to Miki.
* 1.9.2:
  - Added additional translation: Portugal - thanks to antoniomr.
  - Fixed the UTF-8 coding on the German translation - thanks to Veit.
  - Added the contrib section with third-party scripts.
  - Thanks to Carsten Schumann to write the manual filter patch for Filters 1.9.2 which adds the option to filter manually on request (i.e. to move all newsletters/alerts from inbox to trash).
    The patch expands the settings page with an option "Mode: automatic/manual" and adds a "manual filter" button to the toolbar. Finally, it updates the localization files.
* 2.0:
  - Added the 'auto add spam filter rule' which automatically add the rule to move messages into junk folder.
  - Added additional translations: Taiwan - thanks to Avery Wu;
  - Added additional translations: Romanian - thanks to Tache Madalin;
  - Fixed to UTF-8 the French translation - thanks to Nvirenque.
* 2.1:
  - Added the feature to filter base64 encoded mail messages;
  - Added the feature to filter messages searching in case insensitive or case sensitive mode;
  - Improved the code to prevent the javascript injection - thanks to Moritz;
  - Improved code organization;
  - Minor bug fixes.
* 2.1.1:
  - Fixed a bug which prevented to insert case sensitive search strings - thanks to Emanuele Bruno.
* 2.1.2:
  - Added a dynamic vertical scrollbar when there are a lot of filters to show - thanks to Alain Martini.
* 2.1.3:
  - Now check mail only in INBOX like yandex.mail or gmail;
  - fix "refresh" mailboxes after move mails;
  - Fixed a bug with the conflict rules. Add priority checkbox, now first rules with priority are working.
* 2.1.4:
  - Fixed for compare strings (Tested in all russian charset);
  - Fixed option: all, read and unread messages;
  - Added a new option: mark read or mark unread messages;
  - Fully replaced a search algorithm;
  - Fixed localization for 'folder' and 'folder.subfolder' - thanks to twisterbr;
  - Added additional translations: Japanese - thanks to tatsuyaueda;
  - Added config.inc.php;
  - Fix "decode and search BASE64 messages";
  - Added additional translations: Ukrainian - thanks to Dmitro Gnatoyko (dimagnatoiko@gmail.com).
* 2.1.5:
  - Fixed for Roundcubemail 1.2.2.
* 2.1.6:
  - Fixed for Roundcubemail 1.2.4;
  - Fixed warnings;
  - Fixed "SAVE" button in settings -> filter rules. Thx @JofO97;
  - Fixed search in Roundcube - thanks to peterkroon.
* 2.1.7:
  - Fixed for Roundcubemail 1.3.4;
  - Fixed error "The fields Contains must not be empty"... but the field isn't empty when adding a filter - thanks to derekisbusy (Merge pull request #28 from derekisbusy/master);
  - Fixed PHP Warning: Invalid argument supplied for foreach() in /sites/www/roundcube/plugins/filters/filters.php on line 247 - thanks to BeBest123 (Merge pull request #32 from BeBest123/patch-1);
  - Render settings sidebar with RC's PHP API - thanks to jfcherng (Merge pull request #38 from jfcherng/master).
* 2.1.8:
  - Added new option for select source folder.
* 2.1.9:
  - Added check for additional headers from config.inc.php ($config['spam_headers']=array()).
* 2.2.0:
  - Fixed error "filters have stopped working after an update from version 2.1.7 to 2.1.9" (https://github.com/6ec123321/filters/issues/46);
  - Fixed error "Folder name with single quotation marks not filtered".
* 2.3.0
  - Fixed for Roundcubemail 1.6.6;
