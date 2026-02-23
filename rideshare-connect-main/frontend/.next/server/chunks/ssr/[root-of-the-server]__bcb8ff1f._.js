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
"[project]/rideshare-connect-main/backend/src/models/Ride.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const RideSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["Schema"]({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    driverName: {
        type: String,
        required: true
    },
    driverEmail: {
        type: String,
        required: true
    },
    driverAvatar: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    route: {
        origin: {
            type: [
                Number
            ],
            index: '2d'
        },
        destination: {
            type: [
                Number
            ],
            index: '2d'
        } // [lat, lng]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const Ride = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Ride || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Ride', RideSchema);
const __TURBOPACK__default__export__ = Ride;
}}),
"[project]/rideshare-connect-main/backend/src/actions/ride.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40579eb075481ba334af65dd16a85a734b88cdc125":"getRides","40901e59c25190201ec8e13dbd88972704f4c44c05":"bookRide","60044cffaaa846f71c7b8fc8409ede81f83afd2e53":"createRide"},"",""] */ __turbopack_context__.s({
    "bookRide": (()=>bookRide),
    "createRide": (()=>createRide),
    "getRides": (()=>getRides)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/lib/mongodb.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$models$2f$Ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/models/Ride.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/models/User.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function createRide(prevState, formData) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const from = formData.get('from');
        const to = formData.get('to');
        const date = formData.get('date');
        const time = formData.get('time');
        const seats = Number(formData.get('seats'));
        const price = Number(formData.get('price'));
        const description = formData.get('description');
        const originLat = Number(formData.get('originLat'));
        const originLng = Number(formData.get('originLng'));
        const destLat = Number(formData.get('destLat'));
        const destLng = Number(formData.get('destLng'));
        if (!from || !to || !date || !time || !price || !seats) {
            return {
                success: false,
                message: 'Please fill in all required fields'
            };
        }
        const email = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).get('user_email')?.value;
        if (!email) {
            return {
                success: false,
                message: 'Please login to offer a ride'
            };
        }
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
            email
        });
        if (!user) {
            return {
                success: false,
                message: 'User not found'
            };
        }
        const ride = await __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$models$2f$Ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
            from,
            to,
            date,
            time,
            price,
            seats,
            description,
            driverName: user.name || 'Anonymous',
            driverEmail: email,
            driverAvatar: (user.name || 'A').charAt(0).toUpperCase(),
            route: {
                origin: [
                    originLat,
                    originLng
                ],
                destination: [
                    destLat,
                    destLng
                ]
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/find-ride');
        return {
            success: true,
            message: 'Ride created successfully!',
            rideId: ride._id.toString()
        };
    } catch (error) {
        console.error('Error creating ride:', error);
        return {
            success: false,
            message: 'Failed to create ride'
        };
    }
}
async function getRides(search) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        let query = {};
        if (search) {
            query = {
                $or: [
                    {
                        from: {
                            $regex: search,
                            $options: 'i'
                        }
                    },
                    {
                        to: {
                            $regex: search,
                            $options: 'i'
                        }
                    }
                ]
            };
        }
        const rides = await __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$models$2f$Ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find(query).sort({
            createdAt: -1
        }).lean();
        // Explicitly map to a plain object to avoid any Mongoose leftovers and fix type issues
        return rides.map((ride)=>({
                _id: ride._id ? ride._id.toString() : '',
                from: ride.from,
                to: ride.to,
                date: ride.date,
                time: ride.time,
                price: ride.price,
                seats: ride.seats,
                driverName: ride.driverName,
                driverEmail: ride.driverEmail,
                driverAvatar: ride.driverAvatar,
                description: ride.description,
                route: ride.route,
                createdAt: ride.createdAt ? new Date(ride.createdAt).toISOString() : ''
            }));
    } catch (error) {
        console.error('Error fetching rides:', error);
        return [];
    }
}
async function bookRide(rideId) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$lib$2f$mongodb$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        const passengerEmail = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).get('user_email')?.value;
        if (!passengerEmail) {
            return {
                success: false,
                message: 'Please login to book a ride'
            };
        }
        const ride = await __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$models$2f$Ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findById(rideId);
        if (!ride) {
            return {
                success: false,
                message: 'Ride not found'
            };
        }
        const passenger = await __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
            email: passengerEmail
        });
        const driver = await __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$models$2f$User$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
            email: ride.driverEmail
        });
        if (!passenger || !driver) {
            return {
                success: false,
                message: 'User not found'
            };
        }
        // Add to passenger's history
        passenger.rides = passenger.rides || [];
        passenger.rides.push({
            date: new Date(ride.date),
            origin: ride.from,
            destination: ride.to,
            fare: ride.price,
            status: 'booked',
            otherPartyEmail: ride.driverEmail,
            otherPartyName: ride.driverName
        });
        await passenger.save();
        // Add to driver's history
        driver.rides = driver.rides || [];
        driver.rides.push({
            date: new Date(ride.date),
            origin: ride.from,
            destination: ride.to,
            fare: ride.price,
            status: 'booked',
            otherPartyEmail: passengerEmail,
            otherPartyName: passenger.name || 'Anonymous'
        });
        await driver.save();
        return {
            success: true,
            message: 'Ride booked successfully!'
        };
    } catch (error) {
        console.error('Booking Error:', error);
        return {
            success: false,
            message: 'Booking failed'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createRide,
    getRides,
    bookRide
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createRide, "60044cffaaa846f71c7b8fc8409ede81f83afd2e53", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRides, "40579eb075481ba334af65dd16a85a734b88cdc125", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bookRide, "40901e59c25190201ec8e13dbd88972704f4c44c05", null);
}}),
"[project]/rideshare-connect-main/frontend/.next-internal/server/app/find-ride/page/actions.js { ACTIONS_MODULE0 => \"[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/rideshare-connect-main/backend/src/actions/ride.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/actions/ride.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}}),
"[project]/rideshare-connect-main/frontend/.next-internal/server/app/find-ride/page/actions.js { ACTIONS_MODULE0 => \"[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/rideshare-connect-main/backend/src/actions/ride.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/actions/ride.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$find$2d$ride$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/rideshare-connect-main/frontend/.next-internal/server/app/find-ride/page/actions.js { ACTIONS_MODULE0 => "[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/rideshare-connect-main/backend/src/actions/ride.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/rideshare-connect-main/frontend/.next-internal/server/app/find-ride/page/actions.js { ACTIONS_MODULE0 => \"[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/rideshare-connect-main/backend/src/actions/ride.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00c96da5cf1b0eb260305b505e67e1cb825aeb81c3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"]),
    "00e5f1c8ff044eb9f270ea9d6ff204604f7abd16e6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"]),
    "40579eb075481ba334af65dd16a85a734b88cdc125": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRides"]),
    "40901e59c25190201ec8e13dbd88972704f4c44c05": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bookRide"]),
    "60044cffaaa846f71c7b8fc8409ede81f83afd2e53": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRide"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/actions/ride.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$find$2d$ride$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/rideshare-connect-main/frontend/.next-internal/server/app/find-ride/page/actions.js { ACTIONS_MODULE0 => "[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/rideshare-connect-main/backend/src/actions/ride.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/rideshare-connect-main/frontend/.next-internal/server/app/find-ride/page/actions.js { ACTIONS_MODULE0 => \"[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/rideshare-connect-main/backend/src/actions/ride.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00c96da5cf1b0eb260305b505e67e1cb825aeb81c3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$find$2d$ride$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00c96da5cf1b0eb260305b505e67e1cb825aeb81c3"]),
    "00e5f1c8ff044eb9f270ea9d6ff204604f7abd16e6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$find$2d$ride$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00e5f1c8ff044eb9f270ea9d6ff204604f7abd16e6"]),
    "40579eb075481ba334af65dd16a85a734b88cdc125": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$find$2d$ride$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40579eb075481ba334af65dd16a85a734b88cdc125"]),
    "40901e59c25190201ec8e13dbd88972704f4c44c05": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$find$2d$ride$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40901e59c25190201ec8e13dbd88972704f4c44c05"]),
    "60044cffaaa846f71c7b8fc8409ede81f83afd2e53": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$find$2d$ride$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60044cffaaa846f71c7b8fc8409ede81f83afd2e53"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$find$2d$ride$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/rideshare-connect-main/frontend/.next-internal/server/app/find-ride/page/actions.js { ACTIONS_MODULE0 => "[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/rideshare-connect-main/backend/src/actions/ride.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f2e$next$2d$internal$2f$server$2f$app$2f$find$2d$ride$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/rideshare-connect-main/frontend/.next-internal/server/app/find-ride/page/actions.js { ACTIONS_MODULE0 => "[project]/rideshare-connect-main/backend/src/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/rideshare-connect-main/backend/src/actions/ride.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
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
"[project]/rideshare-connect-main/frontend/src/components/ui/input.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/rideshare-connect-main/frontend/src/components/ui/label.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Label() from the server but Label is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/rideshare-connect-main/frontend/src/components/ui/label.tsx <module evaluation>", "Label");
}}),
"[project]/rideshare-connect-main/frontend/src/components/ui/label.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Label() from the server but Label is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/rideshare-connect-main/frontend/src/components/ui/label.tsx", "Label");
}}),
"[project]/rideshare-connect-main/frontend/src/components/ui/label.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/components/ui/label.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/components/ui/label.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/rideshare-connect-main/frontend/src/components/ui/card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/rideshare-connect-main/frontend/src/components/BookButton.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/rideshare-connect-main/frontend/src/components/BookButton.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/rideshare-connect-main/frontend/src/components/BookButton.tsx <module evaluation>", "default");
}}),
"[project]/rideshare-connect-main/frontend/src/components/BookButton.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/rideshare-connect-main/frontend/src/components/BookButton.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/rideshare-connect-main/frontend/src/components/BookButton.tsx", "default");
}}),
"[project]/rideshare-connect-main/frontend/src/components/BookButton.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$BookButton$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/components/BookButton.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$BookButton$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/components/BookButton.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$BookButton$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FindRidePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/components/ui/input.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/components/ui/label.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/lucide-react/dist/esm/icons/calendar.js [app-rsc] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/lucide-react/dist/esm/icons/users.js [app-rsc] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/lucide-react/dist/esm/icons/search.js [app-rsc] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/backend/src/actions/ride.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$BookButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/components/BookButton.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
// Helper to check if ride has coordinates
const hasCoordinates = (ride)=>{
    return ride.route?.origin?.length === 2 && ride.route?.destination?.length === 2;
};
async function FindRidePage(props) {
    const searchParams = await props.searchParams;
    const search = searchParams.search || "";
    const rides = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$backend$2f$src$2f$actions$2f$ride$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRides"])(search);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto py-12 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-in fade-in slide-in-from-bottom-4 duration-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12 text-center max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-blue-900 mb-4",
                            children: "Find your next ride"
                        }, void 0, false, {
                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-lg",
                            children: "Thousands of rides available. Search by destination or date."
                        }, void 0, false, {
                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                    className: "mb-12 border-none shadow-xl bg-white p-2 rounded-2xl md:rounded-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            action: "/find-ride",
                            className: "flex flex-col md:flex-row items-center gap-2 p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex-grow w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Input"], {
                                            name: "search",
                                            defaultValue: search,
                                            placeholder: "Where do you want to go?",
                                            className: "pl-12 h-14 border-none bg-slate-50 focus-visible:ring-0 text-lg rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    className: "w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 rounded-full text-lg font-bold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "mr-2 h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this),
                                        "Search"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-4 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1 space-y-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-none shadow-sm bg-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6 space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-blue-900",
                                                    children: "Filters"
                                                }, void 0, false, {
                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "sm",
                                                    className: "text-blue-600 h-8 px-2",
                                                    children: "Clear all"
                                                }, void 0, false, {
                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-xs font-bold uppercase tracking-wider text-gray-400",
                                                    children: "Sort by"
                                                }, void 0, false, {
                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        "Earliest",
                                                        "Lowest Price",
                                                        "Recent"
                                                    ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-3 cursor-pointer group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-5 h-5 rounded-full border-2 border-slate-200 group-hover:border-blue-400 transition-colors"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                    lineNumber: 64,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: option
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                    lineNumber: 65,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, option, true, {
                                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                            lineNumber: 63,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-gray-600 font-medium",
                                        children: [
                                            "Available Rides (",
                                            rides.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                rides.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-20 bg-slate-50 rounded-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-lg",
                                            children: "No rides found matching your search."
                                        }, void 0, false, {
                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/offer-ride",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "link",
                                                className: "text-blue-600",
                                                children: "Offer a ride instead?"
                                            }, void 0, false, {
                                                fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this) : rides.map((ride)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-in fade-in slide-in-from-right-4 duration-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white group overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "p-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col md:flex-row md:items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-6 flex-grow border-b md:border-b-0 md:border-r border-slate-100",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start justify-between mb-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-6 relative",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "absolute left-2.5 top-2.5 bottom-2.5 w-0.5 bg-slate-100"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                    lineNumber: 100,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-4 relative",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "w-5 h-5 rounded-full border-4 border-white bg-blue-500 shadow-sm z-10"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                            lineNumber: 102,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-xs font-bold text-gray-400 uppercase tracking-wider",
                                                                                                    children: ride.time
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                                    lineNumber: 104,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-lg font-bold text-blue-900",
                                                                                                    children: ride.from
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                                    lineNumber: 105,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                hasCoordinates(ride) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-xs text-green-600 flex items-center gap-1",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                                            className: "w-3 h-3"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                                            lineNumber: 108,
                                                                                                            columnNumber: 39
                                                                                                        }, this),
                                                                                                        " Map Verified"
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                                    lineNumber: 107,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                            lineNumber: 103,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                    lineNumber: 101,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center gap-4 relative",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "w-5 h-5 rounded-full border-4 border-white bg-blue-600 shadow-sm z-10"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                            lineNumber: 114,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-xs font-bold text-gray-400 uppercase tracking-wider",
                                                                                                    children: "Arrival"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                                    lineNumber: 116,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-lg font-bold text-blue-900",
                                                                                                    children: ride.to
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                                    lineNumber: 117,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                            lineNumber: 115,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                    lineNumber: 113,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                            lineNumber: 98,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-right",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-2xl font-black text-blue-600",
                                                                                    children: [
                                                                                        "₹",
                                                                                        ride.price
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                    lineNumber: 122,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs font-semibold text-gray-400",
                                                                                    children: "per person"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                    lineNumber: 123,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                            lineNumber: 121,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                    lineNumber: 97,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                                    className: "w-4 h-4 text-slate-400"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                    lineNumber: 129,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm text-gray-600",
                                                                                    children: [
                                                                                        ride.seats,
                                                                                        " seats left"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                    lineNumber: 130,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                            lineNumber: 128,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                                    className: "w-4 h-4 text-slate-400"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                    lineNumber: 133,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm text-gray-600",
                                                                                    children: ride.date
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                    lineNumber: 134,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                            lineNumber: 132,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                    lineNumber: 127,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-6 md:w-64 bg-slate-50/50 flex flex-row md:flex-col items-center justify-between md:justify-center gap-4 group-hover:bg-blue-50 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600",
                                                                            children: ride.driverAvatar
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                            lineNumber: 141,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-bold text-blue-900 leading-tight",
                                                                                    children: ride.driverName
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                    lineNumber: 145,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-center",
                                                                                    children: [
                                                                                        1,
                                                                                        2,
                                                                                        3,
                                                                                        4,
                                                                                        5
                                                                                    ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-yellow-400 text-xs",
                                                                                            children: "★"
                                                                                        }, star, false, {
                                                                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                            lineNumber: 148,
                                                                                            columnNumber: 35
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                                    lineNumber: 146,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                            lineNumber: 144,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rideshare$2d$connect$2d$main$2f$frontend$2f$src$2f$components$2f$BookButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                                    rideId: ride._id
                                                                }, void 0, false, {
                                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this)
                                    }, ride._id, false, {
                                        fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}}),
"[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/rideshare-connect-main/frontend/src/app/find-ride/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__bcb8ff1f._.js.map