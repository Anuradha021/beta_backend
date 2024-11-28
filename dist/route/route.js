"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const cost_1 = __importDefault(require("../controllers/cost"));
exports.route = (0, express_1.Router)();
const controller = new cost_1.default();
exports.route.get('/getCost', controller.getCostData);
exports.default = exports.route;
