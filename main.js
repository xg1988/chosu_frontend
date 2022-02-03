console.log("hello world");


/*20220202
javascript essential
nodejs => chrome v8 엔진 사용
=>자바스크립트로의 변환
=> Javascript run time 
=> node version manager nvm

NVM 

nvm ls
nvm use 12.14.1

PS C:\Users\ajous\vscode_workspace> nvm ls

    12.21.0
  * 12.14.1 (Currently using 64-bit executable)

PS C:\Users\ajous\vscode_workspace> node --version
v12.14.1

PS C:\Users\ajous\vscode_workspace> nvm uninstall 12.21.0
Uninstalling node v12.21.0... done

==> 여러개의 node 버전 버전의 영향을 받을 수 있어
nvm을 통해서 관리해야 한다. 


PS C:\Users\ajous\vscode_workspace> nvm --help

Running version 1.1.9.

Usage:

  nvm arch                     : Show if node is running in 32 or 64 bit mode.
  nvm current                  : Display active version.
  nvm install <version> [arch] : The version can be a specific version, "latest" for the latest current version, or "lts" for the
                                 most recent LTS version. Optionally specify whether to install the 32 or 64 bit version (defaults
                                 to system arch). Set [arch] to "all" to install 32 AND 64 bit versions.
                                 Add --insecure to the end of this command to bypass SSL validation of the remote download server.
  nvm list [available]         : List the node.js installations. Type "available" at the end to see what can be installed. Aliased as ls.   
  nvm on                       : Enable node.js version management.
  nvm off                      : Disable node.js version management.
  nvm proxy [url]              : Set a proxy to use for downloads. Leave [url] blank to see the current proxy.
                                 Set [url] to "none" to remove the proxy.
  nvm node_mirror [url]        : Set the node mirror. Defaults to https://nodejs.org/dist/. Leave [url] blank to use default url.
  nvm npm_mirror [url]         : Set the npm mirror. Defaults to https://github.com/npm/cli/archive/. Leave [url] blank to default url.     
  nvm uninstall <version>      : The version must be a specific version.
  nvm use [version] [arch]     : Switch to use the specified version. Optionally use "latest", "lts", or "newest".
                                 "newest" is the latest installed version. Optionally specify 32/64bit architecture.
                                 nvm use <arch> will continue using the selected version, but switch to 32/64 bit mode.
  nvm root [path]              : Set the directory where nvm should store different versions of node.js.
                                 If <path> is not set, the current root will be displayed.
  nvm version                  : Displays the current running version of nvm for Windows. Aliased as v.
 
PS C:\Users\ajous\vscode_workspace> 
*/

/*************************************************************************************************************/
/*************************************************************************************************************/
/*************************************************************************************************************/
/*************************************************************************************************************/

/* NPM 전세계 개발자들이 만든 다양한 기능들을 관리
 
PS C:\Users\ajous\vscode_workspace> npm init -y
PS C:\Users\ajous\vscode_workspace\personal_admin> npm install parcel-bundler -D

package-lock.json => 자동으로 관리되는 파일
node_modules 지워도 무관 npm i 로 다시 설치하면 됨

package.json/package-lock.json 삭제하면 안됨
*/


/*
  "scripts": {
    "dev": "parcel index.html"
  },
  npm run dev
*/
console.log("hello world");

/**lodash 는 node_modules에서 꺼내쓰는 것이다 
 * PS C:\Users\ajous\vscode_workspace\personal_admin> npm run build
*/
import _ from 'lodash'
console.log(_.camelCase("hello world"));

/**
 * 유의적 버전
 * Major.Minor.patch
 * Major = 기존버전과 호환되지 않는 새로운 버전
 * Minor = 기존 버전과 호환되는 새로운 기능이 추가된 버전
 * patch = 기존 버전과 호환되는 버그나 오타 수정 버전
 * 
 * npm install lodash@4.17.20
 * npm info lodash
 * npm update lodash
 * ^ -> 최신버전 유지여부 
 */

/*

*/