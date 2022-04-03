"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogHome),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(76);
// EXTERNAL MODULE: ./components/layout/Header.js + 1 modules
var Header = __webpack_require__(939);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./pages/blog/index.js





function BlogHome(props) {
    const posts = props.posts;
    const router = (0,router_namespaceObject.useRouter)();
    const getPost = (name)=>{
        router.push({
            pathname: `/blog/${name}`
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "blog flex flex-col gap-2",
                children: posts && posts.map((post)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col cursor-pointer",
                        onClick: ()=>getPost(post.file)
                        ,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-2xl font-bold",
                                children: post.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-lg",
                                children: post.desc
                            })
                        ]
                    }, post.id)
                )
            })
        ]
    }));
};
async function getStaticProps() {
    let posts = [];
    // Get the posts from '~/posts' folder
    const files = external_fs_default().readdirSync(process.cwd() + "/posts");
    files.forEach((file, index)=>{
        // Use matter to get the metaData from each md & push
        const fileData = external_fs_default().readFileSync(process.cwd() + "/posts/" + file, "utf-8");
        const { data: metaData  } = external_gray_matter_(fileData);
        posts.push({
            id: index,
            file: file.substr(0, file.lastIndexOf(".")) || file,
            title: metaData.title,
            desc: metaData.desc,
            date: metaData.date
        });
    });
    return {
        props: {
            posts
        }
    };
}


/***/ }),

/***/ 76:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,939], () => (__webpack_exec__(412)));
module.exports = __webpack_exports__;

})();