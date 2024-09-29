"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/verifyTokens');
const { addLike, deleteLike } = require('../utility/functionUtilities');
const Like = require('../models/Like');
const Dislike = require('../models/Dislike');
const Post = require('../models/Post');
// POST => {url}/api/likes
router.post('/', authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const post = yield addLike((_a = req.decoded) === null || _a === void 0 ? void 0 : _a.userId, req.body.postId);
        res.status(201).json({ data: post });
    }
    catch (err) {
        console.log(err.message);
        res.status(401).json({ message: err.message || "something went wrong with your comment" });
    }
}));
// DELETE => {url}/api/likes
router.delete('/', authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const post = yield deleteLike((_a = req.decoded) === null || _a === void 0 ? void 0 : _a.userId, req.body.postId);
        res.status(201).json({ data: post });
    }
    catch (err) {
        console.log(err.message);
        res.status(401).json({ message: err.message || "something went wrong with your comment" });
    }
}));
module.exports = router;
