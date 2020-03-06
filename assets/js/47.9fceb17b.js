(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{184:function(e,t,n){"use strict";n.r(t);var o=n(0),a=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"dealing-with-conflicts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dealing-with-conflicts","aria-hidden":"true"}},[e._v("#")]),e._v(" Dealing with Conflicts")]),e._v(" "),n("p",[e._v("A merge conflict occurs when you try to merge branches where the same lines or sections of code have been modified. Unfortunately in these insances Git requires a little help to sort things out.")]),e._v(" "),n("p",[e._v("Whether you're working with pull requests or trying to merge branches locally you're eventually going to have to deal with a merge conflict.")]),e._v(" "),n("p",[e._v("In the event of a merge conflict Git will alert you of the files needing attention. Within each file you will find conflict blocks.")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/46efc74d34c68ffe9a424b898f365cb8.png",alt:"conflictalert"}})]),e._v(" "),n("p",[e._v("Here is a conflict I dealt with recently.")]),e._v(" "),n("p",[e._v("The original code looked like the following:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//Player Out of Range Or Offline\nPacketSender.SendChatMsg(\n    client, Strings.Trading.outofrange.ToString(),\n    CustomColors.NoTarget\n);\n")])])]),n("p",[e._v("We were working on refactoring our code in two different branches at the same time. In one branch we were replacing usages of client with player. In another branch we were refactoring colors.")]),e._v(" "),n("p",[e._v("Upon merging the second branch I was left to solve the following conflict:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//Player Out of Range Or Offline\nPacketSender.SendChatMsg(\n<<<<<<< HEAD\n    player, Strings.Trading.outofrange.ToString(),\n    CustomColors.NoTarget\n=======\n    client, Strings.Trading.outofrange.ToString(),\n    CustomColors.Combat.NoTarget\n>>>>>>> updating-colors\n);\n")])])]),n("p",[e._v("The ======= separates the code from both branches. In the top half we changed client to player. In the bottom half we changed CustomColors.NoTarget to CustomColors.Combat.NoTarget.")]),e._v(" "),n("p",[e._v("In some instances you will decide to keep the code above the divider in others you will keep the code below the divider. In this case we want to keep code from both so I manaully updated the file to end up with the resulting code.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//Player Out of Range Or Offline\nPacketSender.SendChatMsg(\n    player, Strings.Trading.outofrange.ToString(),\n    CustomColors.Combat.NoTarget\n);\n")])])]),n("p",[e._v("After resolving the conflcit, removing the conflict markers, and saving the file Github allowed the merge to proceed as planned.")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/98036a1ec4daea465a9526987444d8c7.png",alt:"mergeable"}})]),e._v(" "),n("p",[e._v("In your programming endeavors you will eventually come across merge conflicts. Although annoying they are generally easy to work out. Hopefully this example and explaination helps in dealing with that process.")])])}],!1,null,null,null);t.default=a.exports}}]);