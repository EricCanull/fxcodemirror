/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
if (!document.getElementById('FirebugLite')) {
    E = document['createElement' + 'NS'] && document.documentElement.namespaceURI;
    E = E ? document['createElement' + 'NS'](E, 'script') : document['createElement']('script');
    E['setAttribute']('id', 'FirebugLite');
    E['setAttribute']('src', 'https://getfirebug.com/' + 'firebug-lite.js' + '#startOpened');
    E['setAttribute']('FirebugLite', '4');
    (document['getElementsByTagName']('head')[0] || document['getElementsByTagName']('body')[0]).appendChild(E);
    E = new Image;
    E['setAttribute']('src', 'https://getfirebug.com/' + '#startOpened');
}

