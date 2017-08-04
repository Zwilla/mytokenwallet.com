## Yubi Key 2FA Unlock Login encrypt and decrypt pure OFFLINE

**WORK in PROGRESS**

**Let me explain:** The problem is trust into me and my software MTW. And
yes this no problem for me! Never trust on other's software!

But if you also not trust in to a company like Yubico, then also stop
trust into [Ledger Wallet](https://www.ledgerwallet.com/r/07c5) and into [Trezor Wallet](https://trezor.io/?a=bitcoins-today.com) !

## How it will work?

* get your private Yubi-Key credentials here:
  [https://upgrade.yubico.com/getapikey/](https://upgrade.yubico.com/getapikey/)
  it will work with every Yubi key!

* Wait until we have finished our work and you can login to your own
  MyTokenWallet installation OFFLINE and ONLINE

***
## What will happen under the hood?

I'm an absolute paranoid person on security and so I also not trust
thousands of programs installed on my Mac, nor I trust my memory inside
my Mac, nor my own a..

Now I'm researching for a solution to encrypt the data inside the local
storage with a 2-FA service, but you don't trust into MyTokenWallet so I
will use and implement the service from yubico!

** With the dynamic 2FA-Data and your credentials:**

* MTW will encrypt all the data inside the MTW local browser storage.
* exports the encrypted json data into a file every time you change
  anything - instant. Example, if you change what and leave a field the file is saved!

## What will be saved there?
* the same what will be saved on a regular Ethereum or Bitcoin Wallet. Take a look to Electrums Bitcoin Wallet an it's 2FA service
* Remember WE DO NOT OFFER THE 2FA-Service

## Used modules:

* [https://github.com/roryrjb/crypto-json](https://github.com/roryrjb/crypto-json)
* [https://github.com/glynnbird/yub](https://github.com/glynnbird/yub)


What is a Yubikey?
------------------

A Yubikey is a USB device manufactured by
[Yubico](https://www.yubico.com/products/yubikey-hardware/yubikey/) that
appears to your computer as a USB keyboard.

[![Yubikeys](https://camo.githubusercontent.com/4add8355c4833f61405f61cb33259907ca5ce2ad/68747470733a2f2f7261772e6769746875622e636f6d2f676c796e6e626972642f7975622f6d61737465722f696d672f797562696b6579732e6a7067)](https://camo.githubusercontent.com/4add8355c4833f61405f61cb33259907ca5ce2ad/68747470733a2f2f7261772e6769746875622e636f6d2f676c796e6e626972642f7975622f6d61737465722f696d672f797562696b6579732e6a7067)

It generates one-time passwords consisting of:

* your Yubikey's unique identity
* a string of characters

This sequence of characters can be sent to Yubico's web service which
will verify whether the string is valid or not. Your Yubikey can be used
for a variety of authentication tasks. This library is designed to allow
simple integration with the Yubico web service so that you can interpret
your Yubikey's one-time-password in your own Node.js scripts. e.g.

* allow a user to authenticate via Yubikey in your web app
* create command-line scripts that only operate with a valid Yubikey
* etc
