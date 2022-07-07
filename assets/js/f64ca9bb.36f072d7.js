"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5278],{9613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(o,".").concat(c)]||u[c]||d[c]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9486:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=a(5443),r=a(3010),i=(a(9496),a(9613)),l=["components"],s={},o="\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Users",p={unversionedId:"docs/references/users/README",id:"docs/references/users/README",title:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Users",description:"The users are the main entities of the identity service.",source:"@site/docs/docs/references/users/README.md",sourceDirName:"docs/references/users",slug:"/docs/references/users/",permalink:"/docs/references/users/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/users/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udcc1 API Resource",permalink:"/docs/references/resources/"},next:{title:"Social identities",permalink:"/docs/references/users/social-identities"}},m={},d=[{value:"Profile",id:"profile",level:2},{value:"Basic data",id:"basic-data",level:2},{value:"id",id:"id",level:3},{value:"username",id:"username",level:3},{value:"primary_email",id:"primary_email",level:3},{value:"primary_phone",id:"primary_phone",level:3},{value:"name",id:"name",level:3},{value:"avatar",id:"avatar",level:3},{value:"role_names",id:"role_names",level:3},{value:"application_id",id:"application_id",level:3},{value:"last_signed_in_at",id:"last_signed_in_at",level:3},{value:"password_encrypted",id:"password_encrypted",level:3},{value:"password_encryption_method",id:"password_encryption_method",level:3},{value:"Attribute Reference",id:"attribute-reference",level:2}],u={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-users"},"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Users"),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"users")," are the main entities of the identity service.\nWe will describe the user-related concepts and details in the following."),(0,i.kt)("h2",{id:"profile"},"Profile"),(0,i.kt)("p",null,"Each user has a profile containing ",(0,i.kt)("a",{parentName:"p",href:"#attribute-reference"},"all user information"),"."),(0,i.kt)("p",null,"It consists of the following types of data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./social-identities"},"Social identities"),": contains the user info retrieved from social sign-in (i.e., sign-in with a social connector), such as Facebook, GitHub, and WeChat."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./custom-data"},"Custom data"),": contains additional user info outside the pre-defined user attributes, such as user-preferred color and language."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#basic-data"},"Basic data"),": is the basic info from the user profile. It contains all other ",(0,i.kt)("em",{parentName:"li"},"user"),"'s attributes except for ",(0,i.kt)("em",{parentName:"li"},"identities")," and ",(0,i.kt)("em",{parentName:"li"},"custom_data"),", such as user id, username, email, phone number, and when the user last signed in.")),(0,i.kt)("p",null,"Here is a sample of a user's data which is retrieved from a sign-in to Facebook:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "iHXPuSb9eMzt",\n  "username": null,\n  "primaryEmail": null,\n  "primaryPhone": null,\n  "name": "John Joe",\n  "avatar": "https://example.com/avatar.png",\n  "roleNames": ["admin"],\n  "customData": {\n    "preferences": {\n      "language": "en",\n      "color": "#f236c9"\n    }\n  },\n  "identities": {\n    "facebook": {\n      "userId": "106077000000000",\n      "details": {\n        "id": "106077000000000",\n        "name": "John Joe",\n        "email": "johnjoe@logto.io",\n        "avatar": "https://example.com/avatar.png"\n      }\n    }\n  },\n  "lastSignInAt": 1655799453171,\n  "applicationId": "admin_console"\n}\n')),(0,i.kt)("p",null,"You can query the user profile using\n",(0,i.kt)("a",{parentName:"p",href:"../../../docs/recipes/manage-users/using-admin-console#view-and-update-user-profile"},"Admin Console")," or\n",(0,i.kt)("a",{parentName:"p",href:"../../../docs/recipes/manage-users/using-management-api"},"Management API"),",\nsuch as ",(0,i.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users~1:userId/get",target:"_blank"},(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/users/:userId")),"."),(0,i.kt)("h2",{id:"basic-data"},"Basic data"),(0,i.kt)("p",null,"Let's walk through all properties in of user's ",(0,i.kt)("em",{parentName:"p"},"basic data"),"."),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"id")," is a unique auto-generated key to identify the user in Logto."),(0,i.kt)("h3",{id:"username"},"username"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"username")," is used for sign-in with ",(0,i.kt)("em",{parentName:"p"},"username")," and password."),(0,i.kt)("p",null,"Its value is from the username that the user first registered with.\nIt may be ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),".\nIts non-null value should be no longer than 128 characters, only contain letters, numbers, and underscores (",(0,i.kt)("inlineCode",{parentName:"p"},"_"),"), and NOT start with a number."),(0,i.kt)("h3",{id:"primary_email"},"primary_email"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"primary_email")," is the user's email address, used for sign-in with the email and passcode."),(0,i.kt)("p",null,"Its value is usually from the email address that the user first registered with.\nIt may be ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),".\nIts max length is 128."),(0,i.kt)("h3",{id:"primary_phone"},"primary_phone"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"primary_phone")," is the user's phone number, used for sign-in with the phone number and passcode from SMS."),(0,i.kt)("p",null,"Its value is usually from the phone number that the user first registered with.\nIt may be ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),".\nIts non-null value should contain numbers prefixed with the\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_country_calling_codes"},"country calling code")," (excluding the plus sign ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),")."),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"name")," is the user's full name.\nIts max length is 128."),(0,i.kt)("h3",{id:"avatar"},"avatar"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"avatar")," is the URL pointing to the user's avatar image.\nIts max length is 2048."),(0,i.kt)("p",null,"If the user registers with a social connector like Facebook and WeChat, its value may be retrieved from the social user info."),(0,i.kt)("h3",{id:"role_names"},"role_names"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"roles_names")," represent the roles granted to the user in Logto."),(0,i.kt)("p",null,"You cannot update the user's ",(0,i.kt)("em",{parentName:"p"},"role names")," using Admin Console for now. Stay tuned."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For example, only the users whose ",(0,i.kt)("em",{parentName:"p"},"roles_names")," contain ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),', i.e., the admin users, have permission to use "Admin Console" and "Management API" in Logto.'))),(0,i.kt)("p",null,"You cannot update the user's ",(0,i.kt)("em",{parentName:"p"},"role_names")," using ",(0,i.kt)("a",{parentName:"p",href:"../../../docs/recipes/manage-users/using-admin-console#view-and-update-user-profile"},"Admin Console")," for now."),(0,i.kt)("h3",{id:"application_id"},"application_id"),(0,i.kt)("p",null,"The value of ",(0,i.kt)("a",{parentName:"p",href:"../applications/#application-id"},(0,i.kt)("em",{parentName:"a"},"application_id"))," is from the application the user first signed in to.\nIt may be ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("h3",{id:"last_signed_in_at"},"last_signed_in_at"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"last_signed_in_at")," is the timestamp with the timezone when the user signed in last time."),(0,i.kt)("h3",{id:"password_encrypted"},"password_encrypted"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"password_encrypted")," is used to store the user's encrypted password."),(0,i.kt)("p",null,"Its value is from the password that the user first registered with.\nIt may be ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),".\nIf its value is non-null, its original content before encryption should be at least six characters."),(0,i.kt)("h3",{id:"password_encryption_method"},"password_encryption_method"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"password_encryption_method")," is used to encrypt the user's password.\nIts value is initialized when the user registers with the username and password.\nIt may be ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("p",null,"Logto uses ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Argon2"},"Argon2"),"'s implementation ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ranisalt/node-argon2"},"node-argon2")," as the encryption method by default; see the reference for details if you're interested."),(0,i.kt)("p",null,"Sample a ",(0,i.kt)("em",{parentName:"p"},"password_encrypted")," and ",(0,i.kt)("em",{parentName:"p"},"password_encryption_method")," from a user whose password is ",(0,i.kt)("inlineCode",{parentName:"p"},"123456"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "password_encryption_method": "Argon2i",\n  "password_encrypted": "$argon2i$v=19$m=4096,t=10,p=1$aZzrqpSX45DOo+9uEW6XVw$O4MdirF0mtuWWWz68eyNAt2u1FzzV3m3g00oIxmEr0U"\n}\n')),(0,i.kt)("h2",{id:"attribute-reference"},"Attribute Reference"),(0,i.kt)("p",null,"The following attributes (except ",(0,i.kt)("em",{parentName:"p"},"password_encrypted")," and ",(0,i.kt)("em",{parentName:"p"},"password_encryption_method"),") are visible on the user profile,\nwhich means you can query them using ",(0,i.kt)("a",{parentName:"p",href:"../../../docs/recipes/manage-users/using-management-api"},"Management API"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Unique"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#id"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Unique identifier"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#username"},"username")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Username for sign-in"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#primary_email"},"primary_email")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Primary email"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#primary_phone"},"primary_phone")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Primary phone number"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#name"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Full name"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#avatar"},"avatar")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"URL pointing to user's avatar image"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#role_names"},"role_names")),(0,i.kt)("td",{parentName:"tr",align:null},"string array"),(0,i.kt)("td",{parentName:"tr",align:null},"List of roles"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./social-identities"},"identities")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"User info retrieved from social sign-in"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./custom-data"},"custom_data")),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"Additional info in customizable attributes"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#application_id"},"application_id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Application ID that the user first registered"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#last_signed_in_at"},"last_sign_in_at")),(0,i.kt)("td",{parentName:"tr",align:null},"date time"),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp when the user signed in last time"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#password_encrypted"},"password_encrypted")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Encrypted password"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#password_encryption_method"},"password_encryption_method")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Password encryption method"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unique"),": Ensures the ",(0,i.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS"},"uniqueness")," of the values entered into an attribute of a database table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Required"),": Ensures that the values entered an attribute of a database table can NOT be ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),".")))))}c.isMDXComponent=!0}}]);