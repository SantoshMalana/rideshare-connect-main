module.exports = {

"[externals]/mongoose [external] (mongoose, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}}),
"[project]/rideshare-connect-main/backend/src/lib/mongodb.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/rideshare';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        if (e.message.indexOf('ECONNREFUSED') !== -1) {
            console.error('CRITICAL: MongoDB connection refused. Ensure your MongoDB server is running on localhost:27017 or update MONGODB_URI in .env');
        } else {
            console.error('CRITICAL: Failed to connect to MongoDB:', e.message);
        }
        throw e;
    }
    return cached.conn;
}
const __TURBOPACK__default__export__ = dbConnect;
}}),
"[project]/rideshare-connect-main/backend/src/models/User.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const UserSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: false
    },
    role: {
        type: String,
        enum: [
            'driver',
            'passenger'
        ],
        default: 'passenger'
    },
    otp: {
        type: String,
        required: false
    },
    otpExpires: {
        type: Date,
        required: false
    },
    // Driver specific
    earnings: {
        type: Number,
        default: 0
    },
    // Mocking ride history for now since Ride model might not exist yet
    rides: [
        {
            date: Date,
            origin: String,
            destination: String,
            fare: Number,
            status: String,
            otherPartyEmail: String,
            otherPartyName: String
        }
    ],
    reviews: [
        {
            rating: Number,
            comment: String,
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.User || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('User', UserSchema);
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/dns [external] (dns, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/child_process [external] (child_process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[project]/rideshare-connect-main/backend/src/lib/email.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sendEmail": (()=>sendEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/nodemailer/lib/nodemailer.js [app-rsc] (ecmascript)");
;
const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS?.replace(/\s+/g, '')
    }
});
const sendEmail = async (to, subject, text)=>{
    try {
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.log(`[DEV MODE] Email to ${to}: ${text}`);
            return {
                success: true,
                message: 'Email logged to console (Dev Mode)'
            };
        }
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            text
        });
        return {
            success: true,
            message: 'Email sent successfully'
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            success: false,
            message: 'Failed to send email'
        };
    }
};
}}),
"[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"008de122c84001d29ed130aa63c4454be6d412f1ea":"getUserProfile","00c96da5cf1b0eb260305b505e67e1cb825aeb81c3":"getCurrentUser","00e5f1c8ff044eb9f270ea9d6ff204604f7abd16e6":"logout","4014daded431c19ac5b671717d51810d73fff2b9c0":"sendOtp","40bf45f12529f14d103be384f8409f20e3ea643edc":"registerUser","60f4c2e6dcfe0508c6b976b1f29bc43f575eb01d3a":"verifyOtp"},"",""] */ __turbopack_context__.s({
    "getCurrentUser": (()=>getCurrentUser),
    "getUserProfile": (()=>getUserProfile),
    "logout": (()=>logout),
    "registerUser": (()=>registerUser),
    "sendOtp": (()=>sendOtp),
    "verifyOtp": (()=>verifyOtp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/lib/mongodb.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/models/User.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/lib/email.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$otp$2d$generator$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/otp-generator/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function registerUser(formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const email = formData.get('email');
        const name = formData.get('name');
        const role = formData.get('role');
        if (!email || !name || !role) {
            return {
                success: false,
                message: 'All fields are required'
            };
        }
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
            email
        });
        if (existingUser) {
            return {
                success: false,
                message: 'User already exists. Please login.'
            };
        }
        const newUser = new __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
            email,
            name,
            role
        });
        await newUser.save();
        return {
            success: true,
            message: 'Successfully signed up! Please login.'
        };
    } catch (error) {
        console.error('Registration Error:', error);
        return {
            success: false,
            message: 'Registration failed'
        };
    }
}
async function sendOtp(formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const email = formData.get('email');
        console.log('--- OTP Request Started ---');
        console.log('Email:', email);
        if (!email) {
            console.log('Error: Email is missing');
            return {
                success: false,
                message: 'Email is required'
            };
        }
        // Check if user exists first
        const userExists = await __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
            email
        });
        if (!userExists) {
            return {
                success: false,
                message: 'Account not found. Please sign up first.'
            };
        }
        const otp = __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$otp$2d$generator$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].generate(6, {
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false
        });
        console.log('Generated OTP:', otp);
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
        // Update existing user with OTP
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOneAndUpdate({
            email
        }, {
            $set: {
                otp,
                otpExpires
            }
        }, {
            new: true
        });
        console.log('User updated with OTP:', user ? user._id : 'Failed');
        const emailResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendEmail"])(email, 'Your Login OTP', `Your OTP is: ${otp}`);
        console.log('Email Service Result:', emailResult);
        if (emailResult.success) {
            console.log('OTP sent successfully to:', email);
            return {
                success: true,
                message: 'OTP sent successfully!'
            };
        } else {
            console.error('Failed to send OTP to:', email);
            return {
                success: false,
                message: 'Failed to send OTP'
            };
        }
    } catch (error) {
        console.error('Error sending OTP:', error);
        return {
            success: false,
            message: error?.message || 'Something went wrong'
        };
    }
}
async function verifyOtp(prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        // Handle both (formData) and (prevState, formData) signatures
        const actualFormData = formData instanceof FormData ? formData : prevState instanceof FormData ? prevState : null;
        if (!actualFormData) {
            console.error('Invalid arguments to verifyOtp:', {
                prevState,
                formData
            });
            return {
                success: false,
                message: 'Invalid request'
            };
        }
        const email = actualFormData.get('email');
        const otp = actualFormData.get('otp');
        console.log('--- OTP Verification Started ---');
        console.log('Email:', email);
        console.log('OTP:', otp);
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
            email
        });
        if (!user) {
            return {
                success: false,
                message: 'User not found'
            };
        }
        if (user.otp !== otp) {
            return {
                success: false,
                message: 'Invalid OTP'
            };
        }
        if (!user.otpExpires || user.otpExpires < new Date()) {
            return {
                success: false,
                message: 'OTP expired'
            };
        }
        // Clear OTP after successful login
        user.otp = undefined;
        user.otpExpires = undefined;
        await user.save();
        // Simulate login session
        (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).set('user_email', email, {
            httpOnly: true,
            path: '/'
        });
        return {
            success: true,
            message: 'Login successful!'
        };
    } catch (error) {
        console.error('Error verifying OTP:', error);
        return {
            success: false,
            message: 'Verification failed'
        };
    }
}
async function getUserProfile() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const email = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).get('user_email')?.value;
        if (!email) return null;
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
            email
        }).lean();
        if (!user) return null;
        // Force type assertion since lean() returns a plain JS object that might miss methods but has data
        const userData = user;
        // Serialize pure data
        return {
            name: userData.name,
            email: userData.email,
            role: userData.role,
            earnings: userData.earnings,
            rides: userData.rides,
            reviews: userData.reviews
        };
    } catch (error) {
        console.error('Error fetching profile:', error);
        return null;
    }
}
async function getCurrentUser() {
    return await getUserProfile();
}
async function logout() {
    (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).delete('user_email');
    return {
        success: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    registerUser,
    sendOtp,
    verifyOtp,
    getUserProfile,
    getCurrentUser,
    logout
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(registerUser, "40bf45f12529f14d103be384f8409f20e3ea643edc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendOtp, "4014daded431c19ac5b671717d51810d73fff2b9c0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifyOtp, "60f4c2e6dcfe0508c6b976b1f29bc43f575eb01d3a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserProfile, "008de122c84001d29ed130aa63c4454be6d412f1ea", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCurrentUser, "00c96da5cf1b0eb260305b505e67e1cb825aeb81c3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "00e5f1c8ff044eb9f270ea9d6ff204604f7abd16e6", null);
}}),
"[project]/rideshare-connect-main/frontend/.next-internal/server/app/register/page/actions.js { ACTIONS_MODULE0 => \"[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)");
;
;
;
}}),
"[project]/rideshare-connect-main/frontend/.next-internal/server/app/register/page/actions.js { ACTIONS_MODULE0 => \"[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/rideshare-connect-main/frontend/.next-internal/server/app/register/page/actions.js { ACTIONS_MODULE0 => "[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/rideshare-connect-main/frontend/.next-internal/server/app/register/page/actions.js { ACTIONS_MODULE0 => \"[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00c96da5cf1b0eb260305b505e67e1cb825aeb81c3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"]),
    "00e5f1c8ff044eb9f270ea9d6ff204604f7abd16e6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"]),
    "40bf45f12529f14d103be384f8409f20e3ea643edc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerUser"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/rideshare-connect-main/frontend/.next-internal/server/app/register/page/actions.js { ACTIONS_MODULE0 => "[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/rideshare-connect-main/frontend/.next-internal/server/app/register/page/actions.js { ACTIONS_MODULE0 => \"[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00c96da5cf1b0eb260305b505e67e1cb825aeb81c3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00c96da5cf1b0eb260305b505e67e1cb825aeb81c3"]),
    "00e5f1c8ff044eb9f270ea9d6ff204604f7abd16e6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00e5f1c8ff044eb9f270ea9d6ff204604f7abd16e6"]),
    "40bf45f12529f14d103be384f8409f20e3ea643edc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40bf45f12529f14d103be384f8409f20e3ea643edc"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/rideshare-connect-main/frontend/.next-internal/server/app/register/page/actions.js { ACTIONS_MODULE0 => "[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$register$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/rideshare-connect-main/frontend/.next-internal/server/app/register/page/actions.js { ACTIONS_MODULE0 => "[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/rideshare-connect-main/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/rideshare-connect-main/frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/rideshare-connect-main/frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/rideshare-connect-main/frontend/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/rideshare-connect-main/frontend/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/app/loading.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/rideshare-connect-main/frontend/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/rideshare-connect-main/frontend/src/app/global-error.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/app/global-error.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/rideshare-connect-main/frontend/src/app/register/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/rideshare-connect-main/frontend/src/app/register/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/rideshare-connect-main/frontend/src/app/register/page.tsx <module evaluation>", "default");
}}),
"[project]/rideshare-connect-main/frontend/src/app/register/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/rideshare-connect-main/frontend/src/app/register/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/rideshare-connect-main/frontend/src/app/register/page.tsx", "default");
}}),
"[project]/rideshare-connect-main/frontend/src/app/register/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$app$2f$register$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/app/register/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$app$2f$register$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/app/register/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$app$2f$register$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/rideshare-connect-main/frontend/src/app/register/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/app/register/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__1eaa3f2e._.js.map