# New level on security for your Crypto Coin Walltes

let's explain: In the wild exist's many server services like amazon,
heroku, cloudflare and many others where you can host your server. Sure
it is cheap to serve the files to you. But also there are some risks by
using none premium packages. And if the admin decides do serve the sites
to you over such bs channels, then he lost a lot control about his /
your security.

    The connection to this site is encrypted and authenticated using a strong protocol (TLS 1.2), 
    a strong key exchange (ECDHE_RSA with P-384), and a strong cipher (AES_256_GCM).

* Cloudbleed for example (oh man I can not believe it!)

***

Now let't compare: https://MyTokenWallet.com vs
https://MyEtherWallet.com

| no   | Result / Test                                                                                       | MyTokenwallet.com                                                        | myEtherWallet.com    | Result / Test                                                                                        |
|:-----|:----------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------|:---------------------|:-----------------------------------------------------------------------------------------------------|
| 1    | [A+ Certificate 'click to check'](https://www.ssllabs.com/ssltest/analyze.html?d=mytokenwallet.com) | SSL-Test on SSL-Labs                                                     | SSL-Test on SSL-Labs | [A Certificate 'click to check'](https://www.ssllabs.com/ssltest/analyze.html?d=myEtherWallet.com)   |
| 1.1  | perfect                                                                                             | YES HTTP Public Key Pinning (HPKP) HTTP Strict Transport Security (HSTS) | bad                  | ~~no HTTP Public Key Pinning (HPKP) HTTP Strict Transport Security (HSTS)~~                          |
| 1.2  | perfect                                                                                             | only TLS 1.2 = perfect                                                   | bad                  | TLS 1.2 and **TLS 1.0, TLS 1.1 = bad**                                                               |
| 1.3  | perfect                                                                                             | Cipher Suites: SHA256 and above                                          | bad                  | Cipher Suites: AES 128 and bove                                                                      |
| 1.4  | serve to 95% browser                                                                                | HTTP2 Protocol                                                           | serve to 35% = bad   | HTTP2 Protocol                                                                                       |
| 1.5  | Forward Secrecy                                                                                     | YES (with most browsers)   ROBUST (more info)                            | NO                   | Not mitigated server-side                                                                            |
| 1.6  | Heartbeat (extension)                                                                               | YES                                                                      | NO                   | Heartbeat (extension)                                                                                |
| 1.7  | DNS SEC                                                                                             | YES                                                                      | NO                   | DNS SEC                                                                                              |
| 1.8  | NPN next protokol neogating                                                                         | OFF                                                                      | ON = bad             | NPN next protokol neogating                                                                          |
| 1.9  | Session resumption (caching)                                                                        | DISABELED                                                                | ON = bad             | Session resumption (caching)                                                                         |
| 1.10 | BEAST attack                                                                                        | Mitigated server-side                                                    | I can' believe it    | BEAST attack   Not mitigated server-side TLS 1.0: 0xc013                                             |
| 2    | [DNS - SEC URITY -- click to test](http://dnssec-debugger.verisignlabs.com/mytokenwallet.com)       | RRSIG=21744 and DNSKEY=21744 verifies the A RRset                        | NO                   | [DNS - SEC URITY](http://dnssec-debugger.verisignlabs.com/myetherwallet.com) No DNSKEY records found |
|      |                                                                                                     |                                                                          |                      |                                                                                                      |

***

## Sources & Research:

* https://www.ssllabs.com/
* http://dnssec-debugger.verisignlabs.com/
* https://www.owasp.org/index.php/Injection_Prevention_Cheat_Sheet_in_Java
* https://httpd.apache.org/docs/2.4/mod/mod_ssl.html
* https://httpd.apache.org/docs/2.4/mod/mod_http2.html
* https://github.com/icing/mod_h2
* https://bz.apache.org/bugzilla/show_bug.cgi?id=47580
* https://github.com/pagespeed/mod_pagespeed/issues/1485
* https://www.icann.org/resources/pages/dnssec-qaa-2014-01-29-en
* https://www.fail2ban.org/wiki/index.php/Main_Page
* http://httpd.apache.org/docs/current/mod/mod_env.html
* https://dsn.tm.kit.edu/article.php?publication_id=24&language_id=1
* https://forum.tricksterarts.com/viewforum.php?f=9
* https://openvpn.net/index.php/open-source/documentation/howto.html
* https://blog.cloudflare.com/incident-report-on-memory-leak-caused-by-cloudflare-parser-bug/
* https://twitter.com/taviso
* https://googleprojectzero.blogspot.de/
* https://github.com/xairy/kernel-exploits/tree/master/CVE-2017-7308
* https://www.guntiahoster.de/blog/2011/allgemein/beast-attack-ssl-jederzeit-angreifbar/
* https://blog.qualys.com/ssllabs/2013/09/10/is-beast-still-a-threat
* https://de.wikipedia.org/wiki/DNS_Amplification_Attack
* https://en.wikipedia.org/wiki/Denial-of-service_attack
* https://en.wikipedia.org/wiki/Denial-of-service_attack#/media/File:Stachledraht_DDos_Attack.svg
* https://trello.com/b/5nQ1mdzt/ledger-roadmap
* https://github.com/LedgerHQ/ledger-node-js-api
* https://github.com/indutny/elliptic
* https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2815255
* http://blog.jonaspasche.com/2014/07/11/followsymlinks-vs-symlinksifownermatch/
* https://community.qualys.com/thread/12239
* https://timtaubert.de/blog/2017/02/the-future-of-session-resumption/
* https://timtaubert.de/blog/2014/11/the-sad-state-of-server-side-tls-session-resumption-implementations/
* https://www.howtoforge.com/tutorial/how-to-protect-your-debian-and-ubuntu-server-against-the-logjam-attack/
* https://support.google.com/webmasters/answer/6062596?hl=de
* https://stackoverflow.com/questions/41218507/violation-long-running-javascript-task-took-xx-ms
* http://browserhacks.com/
* https://www.w3.org/TR/SRI/
* https://httpd.apache.org/docs/trunk/mod/mod_ratelimit.html
***

## Research

* https://moz.com/blog/how-to-get-your-app-content-indexed-by-google
* https://developer.chrome.com/extensions/contentSecurityPolicy
* https://support.cloudflare.com/hc/en-us/articles/200170446-Can-I-use-an-EV-or-OV-SSL-certificate-with-Cloudflare-Business-and-Enterprise-only-
* https://groups.google.com/a/chromium.org/forum/#!searchin/chromium-extensions/
* https://raymii.org/s/tutorials/Strong_SSL_Security_On_Apache2.html
* https://blog.cloudflare.com/logjam-the-latest-tls-vulnerability-explained/
* https://help.ubuntu.com/lts/serverguide/ecryptfs.html
* https://w3c.github.io/webappsec-subresource-integrity/
* The [SHA-256](http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf#), [SHA-384](http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf#), and [SHA-512](http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf#) are part of the [SHA-2](http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf#) set of cryptographic hash functions defined by the NIST. [[SHA2]](https://w3c.github.io/webappsec-subresource-integrity/#biblio-sha2)
* https://permission.site/
* https://hacks.mozilla.org/2015/09/subresource-integrity-in-firefox-43/
* http://www.askapache.com/htaccess/
* https://mitmproxy.org/
* http://www.adambarth.com/papers/2009/barth-weinberger-song.pdf
* https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29

## Browsers
* [Safari Beta](https://secure-appldnld.apple.com/STP/091-17755-20170613-810B2272-A1AF-4825-8E43-ADF9E09D0B20/SafariTechnologyPreview.dmg)
* Brave Browser
* Chrome Browser
* Firefox Browser
* Microshit Explorer

! = off Setp for step to high security:
1. check openssl version: openssl -V
2. check chiphers: openssl ciphers -V
3. disable all and open only this:
   ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA:ECDHE-RSA-AES256-GCM-SHA384
4. openssl dhparam -out dhparam.pem 4096 (Diffie Hellman Ephemeral Parameters)
5. Send some bitcoins or ether to us for more information or research by your self.

|             |                                |                       |          |                   |                  |
|:------------|:-------------------------------|:----------------------|:---------|:------------------|:-----------------|
| xC0,0x30 -  | ECDHE-RSA-AES256-GCM-SHA384    | TLSv1.2 Kx=ECDH       | Au=RSA   | Enc=AESGCM(256)   | Mac=AEAD         |
| 0xC0,0x2C - | !ECDHE-ECDSA-AES256-GCM-SHA384 | TLSv1.2 Kx=ECDH       | Au=ECDSA | Enc=AESGCM(256)   | Mac=AEAD         |
| 0xC0,0x28 - | !ECDHE-RSA-AES256-SHA384       | TLSv1.2 Kx=ECDH       | Au=RSA   | Enc=AES(256)      | Mac=SHA384       |
| 0xC0,0x24 - | !ECDHE-ECDSA-AES256-SHA384     | TLSv1.2 Kx=ECDH       | Au=ECDSA | Enc=AES(256)      | Mac=SHA384       |
| 0xC0,0x14 - | !ECDHE-RSA-AES256-SHA          | SSLv3 Kx=ECDH         | Au=RSA   | Enc=AES(256)      | Mac=SHA1         |
| 0xC0,0x0A - | !ECDHE-ECDSA-AES256-SHA**      | SSLv3 Kx=ECDH         | Au=ECDSA | Enc=AES(256)      | Mac=SHA1         |
| 0xC0,0x22 - | !SRP-DSS-AES-256-CBC-SHA       | SSLv3 Kx=SRP          | Au=DSS   | Enc=AES(256)      | Mac=SHA1         |
| 0xC0,0x21 - | !SRP-RSA-AES-256-CBC-SHA       | SSLv3 Kx=SRP          | Au=RSA   | Enc=AES(256)      | Mac=SHA1         |
| 0xC0,0x20 - | !SRP-AES-256-CBC-SHA           | SSLv3 Kx=SRP          | Au=SRP   | Enc=AES(256)      | Mac=SHA1         |
| 0x00,0xA5 - | !DH-DSS-AES256-GCM-SHA384      | TLSv1.2 Kx=DH/DSS     | Au=DH    | Enc=AESGCM(256)   | Mac=AEAD         |
| 0x00,0xA3 - | !DHE-DSS-AES256-GCM-SHA384     | TLSv1.2 Kx=DH         | Au=DSS   | Enc=AESGCM(256)   | Mac=AEAD         |
| 0x00,0xA1 - | !DH-RSA-AES256-GCM-SHA384      | TLSv1.2 Kx=DH/RSA     | Au=DH    | Enc=AESGCM(256)   | Mac=AEAD         |
| 0x00,0x9F - | !DHE-RSA-AES256-GCM-SHA384     | TLSv1.2 Kx=DH         | Au=RSA   | Enc=AESGCM(256)   | Mac=AEAD         |
| 0x00,0x6B - | !DHE-RSA-AES256-SHA256         | TLSv1.2 Kx=DH         | Au=RSA   | Enc=AES(256)      | Mac=SHA256       |
| 0x00,0x6A - | !DHE-DSS-AES256-SHA256         | TLSv1.2 Kx=DH         | Au=DSS   | Enc=AES(256)      | Mac=SHA256       |
| 0x00,0x69 - | !DH-RSA-AES256-SHA256          | TLSv1.2 Kx=DH/RSA     | Au=DH    | Enc=AES(256)      | Mac=SHA256       |
| 0x00,0x68 - | !DH-DSS-AES256-SHA256          | TLSv1.2 Kx=DH/DSS     | Au=DH    | Enc=AES(256)      | Mac=SHA256       |
| 0x00,0x39 - | !DHE-RSA-AES256-SHA            | SSLv3 Kx=DH           | Au=RSA   | Enc=AES(256)      | Mac=SHA1         |
| 0x00,0x38 - | !DHE-DSS-AES256-SHA            | SSLv3 Kx=DH           | Au=DSS   | Enc=AES(256)      | Mac=SHA1         |
| 0x00,0x37 - | !DH-RSA-AES256-SHA             | SSLv3 Kx=DH/RSA       | Au=DH    | Enc=AES(256)      | Mac=SHA1         |
| 0x00,0x36 - | !DH-DSS-AES256-SHA             | SSLv3 Kx=DH/DSS       | Au=DH    | Enc=AES(256)      | Mac=SHA1         |
| 0x00,0x88 - | !DHE-RSA-CAMELLIA256-SHA       | SSLv3 Kx=DH           | Au=RSA   | Enc=Camellia(256) | Mac=SHA1         |
| 0x00,0x87 - | !DHE-DSS-CAMELLIA256-SHA       | SSLv3 Kx=DH           | Au=DSS   | Enc=Camellia(256) | Mac=SHA1         |
| 0x00,0x86 - | !DH-RSA-CAMELLIA256-SHA        | SSLv3 Kx=DH/RSA       | Au=DH    | Enc=Camellia(256) | Mac=SHA1         |
| 0x00,0x85 - | !DH-DSS-CAMELLIA256-SHA        | SSLv3 Kx=DH/DSS       | Au=DH    | Enc=Camellia(256) | Mac=SHA1         |
| 0xC0,0x32 - | !ECDH-RSA-AES256-GCM-SHA384    | TLSv1.2 Kx=ECDH/RSA   | Au=ECDH  | Enc=AESGCM(256)   | Mac=AEAD         |
| 0xC0,0x2E - | ECDH-ECDSA-AES256-GCM-SHA384   | TLSv1.2 Kx=ECDH/ECDSA | Au=ECDH  | Enc=AESGCM(256)   | Mac=AEAD         |
| 0xC0,0x2A - | !~~ECDH-RSA-AES256-SHA384~~    | TLSv1.2 Kx=ECDH/RSA   | Au=ECDH  | Enc=AES(256)      | Mac=SHA384       |
| 0xC0,0x26 - | ECDH-ECDSA-AES256-SHA384       | TLSv1.2 Kx=ECDH/ECDSA | Au=ECDH  | Enc=AES(256)      | Mac=SHA384       |
| 0xC0,0x0F - | !ECDH-RSA-AES256-SHA           | SSLv3 Kx=ECDH/RSA     | Au=ECDH  | Enc=AES(256)      | Mac=SHA1         |
| 0xC0,0x05 - | !ECDH-ECDSA-AES256-SHA         | SSLv3 Kx=ECDH/ECDSA   | Au=ECDH  | Enc=AES(256)      | Mac=SHA1         |
| 0x00,0x9D - | AES256-GCM-SHA384              | TLSv1.2 Kx=RSA        | Au=RSA   | Enc=AESGCM(256)   | Mac=AEAD [1](#1) |
| 0x00,0x3D - | !AES256-SHA256                 | TLSv1.2 Kx=RSA        | Au=RSA   | Enc=AES(256)      | Mac=SHA256       |
| 0x00,0x35 - | !AES256-SHA                    | SSLv3 Kx=RSA          | Au=RSA   | Enc=AES(256)      | Mac=SHA1         |
| 0x00,0x84 - | !CAMELLIA256-SHA               | SSLv3 Kx=RSA          | Au=RSA   | Enc=Camellia(256) | Mac=SHA1         |
| 0x00,0x8D - | !PSK-AES256-CBC-SHA            | SSLv3 Kx=PSK          | Au=PSK   | Enc=AES(256)      | Mac=SHA1         |
| 0xC0,0x2F - | !ECDHE-RSA-AES128-GCM-SHA256   | TLSv1.2 Kx=ECDH       | Au=RSA   | Enc=AESGCM(128)   | Mac=AEAD         |
| 0xC0,0x2B - | !ECDHE-ECDSA-AES128-GCM-SHA256 | TLSv1.2 Kx=ECDH       | Au=ECDSA | Enc=AESGCM(128)   | Mac=AEAD         |
| 0xC0,0x27 - | !ECDHE-RSA-AES128-SHA256       | TLSv1.2 Kx=ECDH       | Au=RSA   | Enc=AES(128)      | Mac=SHA256       |
| 0xC0,0x23 - | !ECDHE-ECDSA-AES128-SHA256     | TLSv1.2 Kx=ECDH       | Au=ECDSA | Enc=AES(128)      | Mac=SHA256       |
| 0xC0,0x13 - | !ECDHE-RSA-AES128-SHA          | SSLv3 Kx=ECDH         | Au=RSA   | Enc=AES(128)      | Mac=SHA1         |
| 0xC0,0x09 - | !ECDHE-ECDSA-AES128-SHA        | SSLv3 Kx=ECDH         | Au=ECDSA | Enc=AES(128)      | Mac=SHA1         |
| 0xC0,0x1F - | !SRP-DSS-AES-128-CBC-SHA       | SSLv3 Kx=SRP          | Au=DSS   | Enc=AES(128)      | Mac=SHA1         |
| 0xC0,0x1E - | !SRP-RSA-AES-128-CBC-SHA       | SSLv3 Kx=SRP          | Au=RSA   | Enc=AES(128)      | Mac=SHA1         |
| 0xC0,0x1D - | !SRP-AES-128-CBC-SHA           | SSLv3 Kx=SRP          | Au=SRP   | Enc=AES(128)      | Mac=SHA1         |
| 0x00,0xA4 - | !DH-DSS-AES128-GCM-SHA256      | TLSv1.2 Kx=DH/DSS     | Au=DH    | Enc=AESGCM(128)   | Mac=AEAD         |
| 0x00,0xA2 - | !DHE-DSS-AES128-GCM-SHA256     | TLSv1.2 Kx=DH         | Au=DSS   | Enc=AESGCM(128)   | Mac=AEAD         |
| 0x00,0xA0 - | !DH-RSA-AES128-GCM-SHA256      | TLSv1.2 Kx=DH/RSA     | Au=DH    | Enc=AESGCM(128)   | Mac=AEAD         |
| 0x00,0x9E - | !DHE-RSA-AES128-GCM-SHA256     | TLSv1.2 Kx=DH         | Au=RSA   | Enc=AESGCM(128)   | Mac=AEAD         |
| 0x00,0x67 - | !DHE-RSA-AES128-SHA256         | TLSv1.2 Kx=DH         | Au=RSA   | Enc=AES(128)      | Mac=SHA256       |
| 0x00,0x40 - | !DHE-DSS-AES128-SHA256         | TLSv1.2 Kx=DH         | Au=DSS   | Enc=AES(128)      | Mac=SHA256       |
| 0x00,0x3F - | !DH-RSA-AES128-SHA256          | TLSv1.2 Kx=DH/RSA     | Au=DH    | Enc=AES(128)      | Mac=SHA256       |
| 0x00,0x3E - | !DH-DSS-AES128-SHA256          | TLSv1.2 Kx=DH/DSS     | Au=DH    | Enc=AES(128)      | Mac=SHA256       |
| 0x00,0x33 - | !DHE-RSA-AES128-SHA            | SSLv3 Kx=DH           | Au=RSA   | Enc=AES(128)      | Mac=SHA1         |
| 0x00,0x32 - | !DHE-DSS-AES128-SHA            | SSLv3 Kx=DH           | Au=DSS   | Enc=AES(128)      | Mac=SHA1         |
| 0x00,0x31 - | !DH-RSA-AES128-SHA             | SSLv3 Kx=DH/RSA       | Au=DH    | Enc=AES(128)      | Mac=SHA1         |
| 0x00,0x30 - | !DH-DSS-AES128-SHA             | SSLv3 Kx=DH/DSS       | Au=DH    | Enc=AES(128)      | Mac=SHA1         |
| 0x00,0x9A - | !DHE-RSA-SEED-SHA              | SSLv3 Kx=DH           | Au=RSA   | Enc=SEED(128)     | Mac=SHA1         |
| 0x00,0x99 - | !DHE-DSS-SEED-SHA              | SSLv3 Kx=DH           | Au=DSS   | Enc=SEED(128)     | Mac=SHA1         |
| 0x00,0x98 - | !DH-RSA-SEED-SHA               | SSLv3 Kx=DH/RSA       | Au=DH    | Enc=SEED(128)     | Mac=SHA1         |
| 0x00,0x97 - | !DH-DSS-SEED-SHA               | SSLv3 Kx=DH/DSS       | Au=DH    | Enc=SEED(128)     | Mac=SHA1         |
| 0x00,0x45 - | !DHE-RSA-CAMELLIA128-SHA       | SSLv3 Kx=DH           | Au=RSA   | Enc=Camellia(128) | Mac=SHA1         |
| 0x00,0x44 - | !DHE-DSS-CAMELLIA128-SHA       | SSLv3 Kx=DH           | Au=DSS   | Enc=Camellia(128) | Mac=SHA1         |
| 0x00,0x43 - | !DH-RSA-CAMELLIA128-SHA        | SSLv3 Kx=DH/RSA       | Au=DH    | Enc=Camellia(128) | Mac=SHA1         |
| 0x00,0x42 - | !DH-DSS-CAMELLIA128-SHA        | SSLv3 Kx=DH/DSS       | Au=DH    | Enc=Camellia(128) | Mac=SHA1         |
| 0xC0,0x31 - | !ECDH-RSA-AES128-GCM-SHA256    | TLSv1.2 Kx=ECDH/RSA   | Au=ECDH  | Enc=AESGCM(128)   | Mac=AEAD         |
| 0xC0,0x2D - | !ECDH-ECDSA-AES128-GCM-SHA256  | TLSv1.2 Kx=ECDH/ECDSA | Au=ECDH  | Enc=AESGCM(128)   | Mac=AEAD         |
| 0xC0,0x29 - | !ECDH-RSA-AES128-SHA256        | TLSv1.2 Kx=ECDH/RSA   | Au=ECDH  | Enc=AES(128)      | Mac=SHA256       |
| 0xC0,0x25 - | !ECDH-ECDSA-AES128-SHA256      | TLSv1.2 Kx=ECDH/ECDSA | Au=ECDH  | Enc=AES(128)      | Mac=SHA256       |
| 0xC0,0x0E - | !ECDH-RSA-AES128-SHA           | SSLv3 Kx=ECDH/RSA     | Au=ECDH  | Enc=AES(128)      | Mac=SHA1         |
| 0xC0,0x04 - | !ECDH-ECDSA-AES128-SHA         | SSLv3 Kx=ECDH/ECDSA   | Au=ECDH  | Enc=AES(128)      | Mac=SHA1         |
| 0x00,0x9C - | !AES128-GCM-SHA256             | TLSv1.2 Kx=RSA        | Au=RSA   | Enc=AESGCM(128)   | Mac=AEAD         |
| 0x00,0x3C - | !AES128-SHA256                 | TLSv1.2 Kx=RSA        | Au=RSA   | Enc=AES(128)      | Mac=SHA256       |
| 0x00,0x2F - | !AES128-SHA                    | SSLv3 Kx=RSA          | Au=RSA   | Enc=AES(128)      | Mac=SHA1         |
| 0x00,0x96 - | !SEED-SHA                      | SSLv3 Kx=RSA          | Au=RSA   | Enc=SEED(128)     | Mac=SHA1         |
| 0x00,0x41 - | !CAMELLIA128-SHA               | SSLv3 Kx=RSA          | Au=RSA   | Enc=Camellia(128) | Mac=SHA1         |
| 0x00,0x8C - | !PSK-AES128-CBC-SHA            | SSLv3 Kx=PSK          | Au=PSK   | Enc=AES(128)      | Mac=SHA1         |

## (1)

* Transport security is inadequate for the SPDY version.
* ERR_SPDY_INADEQUATE_TRANSPORT_SECURITY
* an obsolete key exchange (RSA)

## About MyTokenWallet.com Security

1. The following resources are explicitly non-cacheable. ~~Consider making them cacheable if possible~~:
* tokenwallet-static.min.js
* tokenwallet-master.js

***

# No security no fun!

## Html & Java Scripts, Functions, Methodes and Routines

* if (window.isSecureContext) {
* rel='noopener' href=

## Sources and Research

* https://w3c.github.io/web-nfc/
* https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
* https://css-tricks.com/1000-podcasting-setup/
* https://css-tricks.com/use-target_blank/
* http://caniuse.com/
* https://fetch.spec.whatwg.org/#http-cors-protocol
* Secure Printing!
   * http://support.brother.com/g/b/faqendbranchprintable.aspx?c=gb&lang=en&prod=hl2460_all&faqid=faq00002145_000&printable=true
   * http://www8.hp.com/us/en/solutions/business-solutions/printingsolutions/securityoverview.html
   * http://www.pcworld.com/article/210197/how_to_print_securely.html
   * http://www.office.xerox.com/userdoc/FAM_O2/driverhelp/secure_print_only.html
   * https://en.wikipedia.org/wiki/Security_printing
   * http://kourge.net/projects/regexp-unicode-block


Content available under the
[CC-By 3.0 license](http://creativecommons.org/licenses/by/3.0/)
