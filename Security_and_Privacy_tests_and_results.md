## Security and Privacy - best Practices tests and results

**Note: 06/22/2017 10:20am CET Test are ongoing, not all is listed here! Stay tuned!**

The goal here is to show the world how to develop a absolut secure
delivery of content to their customers. Kicking big global players into
the ...

| No | Date     | Test and implementation on MyTokenWallet.com                                              | Test   | Source/Info                                                          |
|:---|:---------|:------------------------------------------------------------------------------------------|:-------|:---------------------------------------------------------------------|
| 1  | 06-22-17 | **Server Headers**    [test it](http://www.askapache.com/online-tools/http-headers-tool/) | [ ][ ] | [info](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project) |
| 2  |          | Content-Security-Policy: upgrade-insecure-requests;                                       | [x]    | [defenders](https://www.owasp.org/index.php/Defenders)               |
| 3  |          | Allow only GET on header (no way back to server!)                                         | [x]    | [x2](#post-get-put-patch-delete-options-head-trace-connect)          |
| 4  |          | Access-Control-Allow-Methods: GET                                                         | [x]    | [x2](#post-get-put-patch-delete-options-head-trace-connect)          |
| 5  |          | X-Frame-Options: SAMEORIGIN                                                               | [x]    | [details](#now-lets-compare)                                         |
| 6  |          | X-Content-Type-Options: nosniff                                                           | [x]    | [details](#now-lets-compare)                                         |
| 7  |          | Vary: User-Agent,Host,Accept-Encoding                                                     | [x]    |                                                                      |
| 8  |          | Content-Security-Policy: script-src 'self'; object-src 'self'                             | [x]    |                                                                      |
| 9  |          | Strict-Transport-Security: max-age= 15724800; preload                                     | [x]    | [details](#now-lets-compare)                                         |
| 10 |          | public-key-pins: pin-sha256="[x1](#x1)"; max-age=5184000                                  | [x]    | [details](#now-lets-compare)                                         |
| 11 |          | DNT: 1 = honored by server!                                                               | [x]    |                                                                      |
| 12 |          | Access-Control-Allow-Methods: GET                                                         | [x]    |                                                                      |
| 13 |          | IdentityCheck On                                                                          | [x]    |                                                                      |
| 14 |          | LimitRequestBody                                                                          | [x]    |                                                                      |
| 15 |          | **Server Setup**                                                                          | [x]    |                                                                      |
| 16 |          | https, strict mode,                                                                       | [x]    | [details](#now-lets-compare)                                         |
| 17 |          | HTTP/2 / Protocols h2 http/1.1 and ProtocolsHonorOrder On                                 | [x]    | [details](#now-lets-compare)                                         |
| 18 |          | DNS SEC                                                                                   | [x]    | [details](#now-lets-compare)                                         |
| 19 |          | SSLOpenSSLConfCmd                                                                         | [x]    |                                                                      |
|    |          | X-XSS-Protection "1; mode=block"                                                          | [x]    |                                                                      |
| 20 |          | **Content delivers**                                                                      | [x]    |                                                                      |
| 21 |          | Deliver executables direct from disk, no chache! (css,js)                                 | [x]    |                                                                      |
| 22 |          | Switch of local storage                                                                   | [x]    |                                                                      |
| 23 |          | Sontent integrity by sha384 encryption (css,js)                                           | [x]    |                                                                      |
| 24 |          | Tor clients are not blocked and welcome! Use it, test it                                  | [x]    |                                                                      |
| 25 |          | **Meta**                                                                                  | [ ]    |                                                                      |
| 26 |          | Content-Security-Policy content=upgrade-insecure-requests                                 | [x]    |                                                                      |
| 27 |          | **Tracking**                                                                              | [x]    |                                                                      |
| 28 |          | All off, cookie free domain,                                                              | [x]    |                                                                      |
| 29 |          | Accesslog only 10 minutes. Error log to trapp bad boys                                    | [x]    |                                                                      |
| 30 |          | All links = target="_blank" rel="noopener"                                                | [x]    |                                                                      |
| 31 |          | Warning on exit the myTokenWallet site                                                    | [x]    |                                                                      |
|    |          |                                                                                           |        |                                                                      |
|    |          |                                                                                           |        |                                                                      |
|    |          |                                                                                           |        |                                                                      |


###  x1

public-key-pins:
pin-sha256="B4JUTjkDmO5mbvdld8ERB7tSIDQa7oWznSHb/euNbuQ=";
pin-sha256="ykwJVETuwK4kY86IdqtfiUA6dsHsU+HH9R09sBpCxFA=";
max-age=5184000


### About stuff

#### POST GET PUT PATCH DELETE OPTIONS HEAD TRACE CONNECT

**POST** is most-often utilized to **create** new resources. In
particular, it's used to create subordinate resources. That is,
subordinate to some other (e.g. parent) resource. In other words, when
creating a new resource, POST to the parent and the service takes care
of associating the new resource with the parent, assigning an ID (new
resource URI), etc. On successful creation, return HTTP status 201,
returning a Location header with a link to the newly-created resource
with the 201 HTTP status.

**GET** method is used to **read** (or retrieve) a representation of a
resource. In the "happy" (or non-error) path, GET returns a
representation in XML or JSON and an HTTP response code of 200 (OK). In
an error case, it most often returns a 404 (NOT FOUND) or 400 (BAD
REQUEST).According to the design of the HTTP specification, GET (along
with HEAD) requests are used only to read data and not change it.

**PUT** is most-often utilized for **update** capabilities, PUT-ing to a
known resource URI with the request body containing the newly-updated
representation of the original resource.However, PUT can also be used to
create a resource in the case where the resource ID is chosen by the
client instead of by the server. In other words, if the PUT is to a URI
that contains the value of a non-existent resource ID

**PATCH** is used for **modify** capabilities. The PATCH request only
needs to contain the changes to the resource, not the complete
resource.This resembles PUT, but the body contains a set of instructions
describing how a resource currently residing on the server should be
modified to produce a new version. This means that the PATCH body should
not just be a modified part of the resource, but in some kind of patch
language like JSON Patch or XML Patch.

**DELETE** is used to **delete** a resource identified by a
URI.HTTP-spec-wise, DELETE operations are idempotent. If you DELETE a
resource, it's removed On successful deletion, return HTTP status 200
(OK) along with a response body.

**OPTIONS** returns available HTTP methods and other **options**

**HEAD** Retrieve all resources in a collection (header only) i.e. The
HEAD method asks for a response identical to that of a GET request, but
without the response body. This is useful for retrieving
meta-information written in response headers, without having to
transport the entire content.

**TRACE** method echoes the received request so that a client can
**see** what (if any) changes or additions have been made by
intermediate servers.

**CONNECT** method converts the request connection to a transparent
TCP/IP tunnel, usually to facilitate SSL-encrypted **communication**
(HTTPS) through an unencrypted HTTP proxy.

***
