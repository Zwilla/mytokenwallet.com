## On Mac and Linux

Mist has no way to import via GUI, so you need to import using command
line (`geth`). It will show up in your Mist immediately.

1. Open TextEdit
2. Paste key into TextEdit without any extra characters or quotations
3. Save the file as `nothing_special_delete_me.txt` to your Desktop
4. Open Terminal, run command:
       geth account import ~/Desktop/nothing_special_delete_me.txt
5. After successful import, delete the file from your desktop.


## On Windows
* DO NOT SUPPORT THIS OS ANYMORE!!

Paste the key into a text file, save it to disk and use the path to that
file with `geth account import`. Here are some example Windows
instructions that might help:
1. Open Notepad
2. Paste key into notepad without any extra characters or quotations
3. Save the file as `nothing_special_delete_me.txt` at `C:\\`
4. Run the command, `geth account import
   C:\\nothing_special_delete_me.txt`
5. After successful import, delete the file at
   `C:\\nothing_special_delete_me.txt`

***

If you do *not* have geth installed already, do the following steps
after step 3, and the continue to step 4:
* Open command prompt (cmd.exe).
* Inside the Command Prompt, type the following command to go to the
  folder containing your Geth.exe file: `cd
  c:\\Ethereum-Wallet-win64-0-7-3\\resources\\node\\geth` (insert your
  correct path there)

***
* [some more minds here](https://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth-or-mist)
***
[back to TOC](https://github.com/Zwilla/mytokenwallet.com/blob/master/docs/DOCS-TOC.md)
