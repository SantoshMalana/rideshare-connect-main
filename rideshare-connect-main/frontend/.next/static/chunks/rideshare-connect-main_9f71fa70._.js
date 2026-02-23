(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/rideshare-connect-main/frontend/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
(()=>{
    const e = new Error("Cannot find module 'clsx'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])(clsx(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/rideshare-connect-main/frontend/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@radix-ui/react-slot'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'class-variance-authority'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? Slot : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Sheet": (()=>Sheet),
    "SheetClose": (()=>SheetClose),
    "SheetContent": (()=>SheetContent),
    "SheetDescription": (()=>SheetDescription),
    "SheetFooter": (()=>SheetFooter),
    "SheetHeader": (()=>SheetHeader),
    "SheetTitle": (()=>SheetTitle),
    "SheetTrigger": (()=>SheetTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@radix-ui/react-dialog'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPrimitive.Root, {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = Sheet;
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPrimitive.Trigger, {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_c1 = SheetTrigger;
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPrimitive.Close, {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c2 = SheetClose;
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPrimitive.Portal, {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
_c3 = SheetPortal;
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPrimitive.Overlay, {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c4 = SheetOverlay;
function SheetContent({ className, children, side = "right", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPrimitive.Content, {
                "data-slot": "sheet-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPrimitive.Close, {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c5 = SheetContent;
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1.5 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c6 = SheetHeader;
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c7 = SheetFooter;
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPrimitive.Title, {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c8 = SheetTitle;
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPrimitive.Description, {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c9 = SheetDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetClose");
__turbopack_context__.k.register(_c3, "SheetPortal");
__turbopack_context__.k.register(_c4, "SheetOverlay");
__turbopack_context__.k.register(_c5, "SheetContent");
__turbopack_context__.k.register(_c6, "SheetHeader");
__turbopack_context__.k.register(_c7, "SheetFooter");
__turbopack_context__.k.register(_c8, "SheetTitle");
__turbopack_context__.k.register(_c9, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/rideshare-connect-main/backend/src/actions/data:80e9db [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"00c96da5cf1b0eb260305b505e67e1cb825aeb81c3":"getCurrentUser"},"rideshare-connect-main/backend/src/actions/auth.ts",""] */ __turbopack_context__.s({
    "getCurrentUser": (()=>getCurrentUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getCurrentUser = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00c96da5cf1b0eb260305b505e67e1cb825aeb81c3", __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCurrentUser"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJ0BiYWNrZW5kL2xpYi9tb25nb2RiJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnQGJhY2tlbmQvbW9kZWxzL1VzZXInO1xyXG5pbXBvcnQgeyBzZW5kRW1haWwgfSBmcm9tICdAYmFja2VuZC9saWIvZW1haWwnO1xyXG5pbXBvcnQgb3RwR2VuZXJhdG9yIGZyb20gJ290cC1nZW5lcmF0b3InO1xyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlclVzZXIoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpIGFzIHN0cmluZztcclxuICAgICAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nO1xyXG4gICAgICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoJ3JvbGUnKSBhcyBzdHJpbmc7XHJcblxyXG4gICAgICAgIGlmICghZW1haWwgfHwgIW5hbWUgfHwgIXJvbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdBbGwgZmllbGRzIGFyZSByZXF1aXJlZCcgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pO1xyXG4gICAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdVc2VyIGFscmVhZHkgZXhpc3RzLiBQbGVhc2UgbG9naW4uJyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHJvbGUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IG5ld1VzZXIuc2F2ZSgpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgc2lnbmVkIHVwISBQbGVhc2UgbG9naW4uJyB9O1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIEVycm9yOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1JlZ2lzdHJhdGlvbiBmYWlsZWQnIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kT3RwKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldCgnZW1haWwnKSBhcyBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0gT1RQIFJlcXVlc3QgU3RhcnRlZCAtLS0nKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRW1haWw6JywgZW1haWwpO1xyXG5cclxuICAgICAgICBpZiAoIWVtYWlsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogRW1haWwgaXMgbWlzc2luZycpO1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0VtYWlsIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdXNlciBleGlzdHMgZmlyc3RcclxuICAgICAgICBjb25zdCB1c2VyRXhpc3RzID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XHJcbiAgICAgICAgaWYgKCF1c2VyRXhpc3RzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnQWNjb3VudCBub3QgZm91bmQuIFBsZWFzZSBzaWduIHVwIGZpcnN0LicgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG90cCA9IG90cEdlbmVyYXRvci5nZW5lcmF0ZSg2LCB7XHJcbiAgICAgICAgICAgIHVwcGVyQ2FzZUFscGhhYmV0czogZmFsc2UsXHJcbiAgICAgICAgICAgIHNwZWNpYWxDaGFyczogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvd2VyQ2FzZUFscGhhYmV0czogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dlbmVyYXRlZCBPVFA6Jywgb3RwKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3RwRXhwaXJlcyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAxMCAqIDYwICogMTAwMCk7IC8vIDEwIG1pbnV0ZXNcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIHVzZXIgd2l0aCBPVFBcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lQW5kVXBkYXRlKFxyXG4gICAgICAgICAgICB7IGVtYWlsIH0sXHJcbiAgICAgICAgICAgIHsgJHNldDogeyBvdHAsIG90cEV4cGlyZXMgfSB9LFxyXG4gICAgICAgICAgICB7IG5ldzogdHJ1ZSB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgdXBkYXRlZCB3aXRoIE9UUDonLCB1c2VyID8gdXNlci5faWQgOiAnRmFpbGVkJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtYWlsUmVzdWx0ID0gYXdhaXQgc2VuZEVtYWlsKGVtYWlsLCAnWW91ciBMb2dpbiBPVFAnLCBgWW91ciBPVFAgaXM6ICR7b3RwfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFbWFpbCBTZXJ2aWNlIFJlc3VsdDonLCBlbWFpbFJlc3VsdCk7XHJcblxyXG4gICAgICAgIGlmIChlbWFpbFJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPVFAgc2VudCBzdWNjZXNzZnVsbHkgdG86JywgZW1haWwpO1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnT1RQIHNlbnQgc3VjY2Vzc2Z1bGx5IScgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2VuZCBPVFAgdG86JywgZW1haWwpO1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ZhaWxlZCB0byBzZW5kIE9UUCcgfTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VuZGluZyBPVFA6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvcj8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdlbnQgd3JvbmcnIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlPdHAocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAgICAgICAvLyBIYW5kbGUgYm90aCAoZm9ybURhdGEpIGFuZCAocHJldlN0YXRlLCBmb3JtRGF0YSkgc2lnbmF0dXJlc1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbEZvcm1EYXRhID0gZm9ybURhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSA/IGZvcm1EYXRhIDogKHByZXZTdGF0ZSBpbnN0YW5jZW9mIEZvcm1EYXRhID8gcHJldlN0YXRlIDogbnVsbCk7XHJcbiAgICAgICAgaWYgKCFhY3R1YWxGb3JtRGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGFyZ3VtZW50cyB0byB2ZXJpZnlPdHA6JywgeyBwcmV2U3RhdGUsIGZvcm1EYXRhIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ludmFsaWQgcmVxdWVzdCcgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gYWN0dWFsRm9ybURhdGEuZ2V0KCdlbWFpbCcpIGFzIHN0cmluZztcclxuICAgICAgICBjb25zdCBvdHAgPSBhY3R1YWxGb3JtRGF0YS5nZXQoJ290cCcpIGFzIHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJy0tLSBPVFAgVmVyaWZpY2F0aW9uIFN0YXJ0ZWQgLS0tJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0VtYWlsOicsIGVtYWlsKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnT1RQOicsIG90cCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVXNlciBub3QgZm91bmQnIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlci5vdHAgIT09IG90cCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ludmFsaWQgT1RQJyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF1c2VyLm90cEV4cGlyZXMgfHwgdXNlci5vdHBFeHBpcmVzIDwgbmV3IERhdGUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ09UUCBleHBpcmVkJyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgT1RQIGFmdGVyIHN1Y2Nlc3NmdWwgbG9naW5cclxuICAgICAgICB1c2VyLm90cCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB1c2VyLm90cEV4cGlyZXMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgYXdhaXQgdXNlci5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIGxvZ2luIHNlc3Npb25cclxuICAgICAgICAoYXdhaXQgY29va2llcygpKS5zZXQoJ3VzZXJfZW1haWwnLCBlbWFpbCwgeyBodHRwT25seTogdHJ1ZSwgcGF0aDogJy8nIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnTG9naW4gc3VjY2Vzc2Z1bCEnIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHZlcmlmeWluZyBPVFA6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVmVyaWZpY2F0aW9uIGZhaWxlZCcgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJQcm9maWxlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IChhd2FpdCBjb29raWVzKCkpLmdldCgndXNlcl9lbWFpbCcpPy52YWx1ZTtcclxuICAgICAgICBpZiAoIWVtYWlsKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pLmxlYW4oKTtcclxuICAgICAgICBpZiAoIXVzZXIpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAvLyBGb3JjZSB0eXBlIGFzc2VydGlvbiBzaW5jZSBsZWFuKCkgcmV0dXJucyBhIHBsYWluIEpTIG9iamVjdCB0aGF0IG1pZ2h0IG1pc3MgbWV0aG9kcyBidXQgaGFzIGRhdGFcclxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHVzZXIgYXMgYW55O1xyXG5cclxuICAgICAgICAvLyBTZXJpYWxpemUgcHVyZSBkYXRhXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogdXNlckRhdGEubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHVzZXJEYXRhLmVtYWlsLFxyXG4gICAgICAgICAgICByb2xlOiB1c2VyRGF0YS5yb2xlLFxyXG4gICAgICAgICAgICBlYXJuaW5nczogdXNlckRhdGEuZWFybmluZ3MsXHJcbiAgICAgICAgICAgIHJpZGVzOiB1c2VyRGF0YS5yaWRlcyxcclxuICAgICAgICAgICAgcmV2aWV3czogdXNlckRhdGEucmV2aWV3cyxcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9maWxlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGdldFVzZXJQcm9maWxlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICAoYXdhaXQgY29va2llcygpKS5kZWxldGUoJ3VzZXJfZW1haWwnKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjBUQXNLc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/rideshare-connect-main/backend/src/actions/data:209b60 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"00e5f1c8ff044eb9f270ea9d6ff204604f7abd16e6":"logout"},"rideshare-connect-main/backend/src/actions/auth.ts",""] */ __turbopack_context__.s({
    "logout": (()=>logout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var logout = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00e5f1c8ff044eb9f270ea9d6ff204604f7abd16e6", __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "logout"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XHJcblxyXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJ0BiYWNrZW5kL2xpYi9tb25nb2RiJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnQGJhY2tlbmQvbW9kZWxzL1VzZXInO1xyXG5pbXBvcnQgeyBzZW5kRW1haWwgfSBmcm9tICdAYmFja2VuZC9saWIvZW1haWwnO1xyXG5pbXBvcnQgb3RwR2VuZXJhdG9yIGZyb20gJ290cC1nZW5lcmF0b3InO1xyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3RlclVzZXIoZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpIGFzIHN0cmluZztcclxuICAgICAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KCduYW1lJykgYXMgc3RyaW5nO1xyXG4gICAgICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoJ3JvbGUnKSBhcyBzdHJpbmc7XHJcblxyXG4gICAgICAgIGlmICghZW1haWwgfHwgIW5hbWUgfHwgIXJvbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdBbGwgZmllbGRzIGFyZSByZXF1aXJlZCcgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pO1xyXG4gICAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdVc2VyIGFscmVhZHkgZXhpc3RzLiBQbGVhc2UgbG9naW4uJyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHtcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHJvbGUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IG5ld1VzZXIuc2F2ZSgpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgc2lnbmVkIHVwISBQbGVhc2UgbG9naW4uJyB9O1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVnaXN0cmF0aW9uIEVycm9yOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ1JlZ2lzdHJhdGlvbiBmYWlsZWQnIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kT3RwKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldCgnZW1haWwnKSBhcyBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0gT1RQIFJlcXVlc3QgU3RhcnRlZCAtLS0nKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRW1haWw6JywgZW1haWwpO1xyXG5cclxuICAgICAgICBpZiAoIWVtYWlsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogRW1haWwgaXMgbWlzc2luZycpO1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0VtYWlsIGlzIHJlcXVpcmVkJyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdXNlciBleGlzdHMgZmlyc3RcclxuICAgICAgICBjb25zdCB1c2VyRXhpc3RzID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XHJcbiAgICAgICAgaWYgKCF1c2VyRXhpc3RzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnQWNjb3VudCBub3QgZm91bmQuIFBsZWFzZSBzaWduIHVwIGZpcnN0LicgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG90cCA9IG90cEdlbmVyYXRvci5nZW5lcmF0ZSg2LCB7XHJcbiAgICAgICAgICAgIHVwcGVyQ2FzZUFscGhhYmV0czogZmFsc2UsXHJcbiAgICAgICAgICAgIHNwZWNpYWxDaGFyczogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvd2VyQ2FzZUFscGhhYmV0czogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dlbmVyYXRlZCBPVFA6Jywgb3RwKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3RwRXhwaXJlcyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAxMCAqIDYwICogMTAwMCk7IC8vIDEwIG1pbnV0ZXNcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIHVzZXIgd2l0aCBPVFBcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lQW5kVXBkYXRlKFxyXG4gICAgICAgICAgICB7IGVtYWlsIH0sXHJcbiAgICAgICAgICAgIHsgJHNldDogeyBvdHAsIG90cEV4cGlyZXMgfSB9LFxyXG4gICAgICAgICAgICB7IG5ldzogdHJ1ZSB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgdXBkYXRlZCB3aXRoIE9UUDonLCB1c2VyID8gdXNlci5faWQgOiAnRmFpbGVkJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVtYWlsUmVzdWx0ID0gYXdhaXQgc2VuZEVtYWlsKGVtYWlsLCAnWW91ciBMb2dpbiBPVFAnLCBgWW91ciBPVFAgaXM6ICR7b3RwfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFbWFpbCBTZXJ2aWNlIFJlc3VsdDonLCBlbWFpbFJlc3VsdCk7XHJcblxyXG4gICAgICAgIGlmIChlbWFpbFJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPVFAgc2VudCBzdWNjZXNzZnVsbHkgdG86JywgZW1haWwpO1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnT1RQIHNlbnQgc3VjY2Vzc2Z1bGx5IScgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2VuZCBPVFAgdG86JywgZW1haWwpO1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ZhaWxlZCB0byBzZW5kIE9UUCcgfTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VuZGluZyBPVFA6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvcj8ubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdlbnQgd3JvbmcnIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlPdHAocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAgICAgICAvLyBIYW5kbGUgYm90aCAoZm9ybURhdGEpIGFuZCAocHJldlN0YXRlLCBmb3JtRGF0YSkgc2lnbmF0dXJlc1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbEZvcm1EYXRhID0gZm9ybURhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSA/IGZvcm1EYXRhIDogKHByZXZTdGF0ZSBpbnN0YW5jZW9mIEZvcm1EYXRhID8gcHJldlN0YXRlIDogbnVsbCk7XHJcbiAgICAgICAgaWYgKCFhY3R1YWxGb3JtRGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGFyZ3VtZW50cyB0byB2ZXJpZnlPdHA6JywgeyBwcmV2U3RhdGUsIGZvcm1EYXRhIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ludmFsaWQgcmVxdWVzdCcgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gYWN0dWFsRm9ybURhdGEuZ2V0KCdlbWFpbCcpIGFzIHN0cmluZztcclxuICAgICAgICBjb25zdCBvdHAgPSBhY3R1YWxGb3JtRGF0YS5nZXQoJ290cCcpIGFzIHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJy0tLSBPVFAgVmVyaWZpY2F0aW9uIFN0YXJ0ZWQgLS0tJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0VtYWlsOicsIGVtYWlsKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnT1RQOicsIG90cCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVXNlciBub3QgZm91bmQnIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlci5vdHAgIT09IG90cCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ludmFsaWQgT1RQJyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF1c2VyLm90cEV4cGlyZXMgfHwgdXNlci5vdHBFeHBpcmVzIDwgbmV3IERhdGUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ09UUCBleHBpcmVkJyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgT1RQIGFmdGVyIHN1Y2Nlc3NmdWwgbG9naW5cclxuICAgICAgICB1c2VyLm90cCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB1c2VyLm90cEV4cGlyZXMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgYXdhaXQgdXNlci5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIGxvZ2luIHNlc3Npb25cclxuICAgICAgICAoYXdhaXQgY29va2llcygpKS5zZXQoJ3VzZXJfZW1haWwnLCBlbWFpbCwgeyBodHRwT25seTogdHJ1ZSwgcGF0aDogJy8nIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnTG9naW4gc3VjY2Vzc2Z1bCEnIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHZlcmlmeWluZyBPVFA6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnVmVyaWZpY2F0aW9uIGZhaWxlZCcgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJQcm9maWxlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IChhd2FpdCBjb29raWVzKCkpLmdldCgndXNlcl9lbWFpbCcpPy52YWx1ZTtcclxuICAgICAgICBpZiAoIWVtYWlsKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pLmxlYW4oKTtcclxuICAgICAgICBpZiAoIXVzZXIpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAvLyBGb3JjZSB0eXBlIGFzc2VydGlvbiBzaW5jZSBsZWFuKCkgcmV0dXJucyBhIHBsYWluIEpTIG9iamVjdCB0aGF0IG1pZ2h0IG1pc3MgbWV0aG9kcyBidXQgaGFzIGRhdGFcclxuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHVzZXIgYXMgYW55O1xyXG5cclxuICAgICAgICAvLyBTZXJpYWxpemUgcHVyZSBkYXRhXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogdXNlckRhdGEubmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IHVzZXJEYXRhLmVtYWlsLFxyXG4gICAgICAgICAgICByb2xlOiB1c2VyRGF0YS5yb2xlLFxyXG4gICAgICAgICAgICBlYXJuaW5nczogdXNlckRhdGEuZWFybmluZ3MsXHJcbiAgICAgICAgICAgIHJpZGVzOiB1c2VyRGF0YS5yaWRlcyxcclxuICAgICAgICAgICAgcmV2aWV3czogdXNlckRhdGEucmV2aWV3cyxcclxuICAgICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9maWxlOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGdldFVzZXJQcm9maWxlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICAoYXdhaXQgY29va2llcygpKS5kZWxldGUoJ3VzZXJfZW1haWwnKTtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImtUQTBLc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Navbar": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$data$3a$80e9db__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/actions/data:80e9db [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$data$3a$209b60__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/actions/data:209b60 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Navbar() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            async function checkUser() {
                const userData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$data$3a$80e9db__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCurrentUser"])();
                setUser(userData);
            }
            checkUser();
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    const handleLogout = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$data$3a$209b60__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["logout"])();
        setUser(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Logged out successfully");
        router.push("/");
    };
    const navLinks = [
        {
            href: "/find-ride",
            label: "Find Ride",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                lineNumber: 38,
                columnNumber: 53
            }, this)
        },
        {
            href: "/offer-ride",
            label: "Offer Ride",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                lineNumber: 39,
                columnNumber: 55
            }, this)
        },
        {
            href: "/about",
            label: "About",
            icon: null
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto flex h-16 items-center justify-between px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                            className: "h-6 w-6 text-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl font-bold tracking-tight text-blue-900",
                            children: "RideShare Hub"
                        }, void 0, false, {
                            fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex items-center gap-6",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: "text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1",
                                children: [
                                    link.icon,
                                    link.label
                                ]
                            }, link.href, true, {
                                fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-6 w-px bg-gray-200"
                        }, void 0, false, {
                            fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/profile",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "text-gray-600 flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this),
                                            "My Profile"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: handleLogout,
                                    className: "text-red-500 hover:text-red-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "text-gray-600",
                                        children: "Log in"
                                    }, void 0, false, {
                                        fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/register",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        className: "bg-blue-600 hover:bg-blue-700 text-white",
                                        children: "Sign up"
                                    }, void 0, false, {
                                        fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                        open: isOpen,
                        onOpenChange: setIsOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                                side: "right",
                                className: "w-[300px] sm:w-[400px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-8 mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-4",
                                            children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    onClick: ()=>setIsOpen(false),
                                                    className: "text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-3",
                                                    children: [
                                                        link.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-blue-600",
                                                            children: link.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 37
                                                        }, this),
                                                        link.label
                                                    ]
                                                }, link.href, true, {
                                                    fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3 border-t pt-8",
                                            children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/profile",
                                                        onClick: ()=>setIsOpen(false),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            className: "w-full justify-start gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 27
                                                                }, this),
                                                                "My Profile"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        onClick: ()=>{
                                                            handleLogout();
                                                            setIsOpen(false);
                                                        },
                                                        className: "w-full justify-start gap-2 text-red-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 25
                                                            }, this),
                                                            "Log out"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/login",
                                                        onClick: ()=>setIsOpen(false),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            className: "w-full justify-start gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                                                    lineNumber: 136,
                                                                    columnNumber: 27
                                                                }, this),
                                                                "Log in"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/register",
                                                        onClick: ()=>setIsOpen(false),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            className: "w-full bg-blue-600 hover:bg-blue-700 text-white",
                                                            children: "Sign up"
                                                        }, void 0, false, {
                                                            fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/Navbar.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(Navbar, "bcWzvF+/f7oHK1DDFeZvgQjqIxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/rideshare-connect-main/frontend/src/components/ui/sonner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Toaster": (()=>Toaster)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Toaster = ({ ...props })=>{
    _s();
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        style: {
            "--normal-bg": "var(--popover)",
            "--normal-text": "var(--popover-foreground)",
            "--normal-border": "var(--border)"
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/sonner.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_s(Toaster, "EriOrahfenYKDCErPq+L6926Dw4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Toaster;
;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=rideshare-connect-main_9f71fa70._.js.map