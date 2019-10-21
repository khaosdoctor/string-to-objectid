"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bson_objectid_1 = __importDefault(require("bson-objectid"));
function stringToObjectId(data) {
    if (!bson_objectid_1.default.isValid(data))
        throw new TypeError('This is not a valid ObjectId');
    return new bson_objectid_1.default(data);
}
exports.default = stringToObjectId;
module.exports = stringToObjectId;
//# sourceMappingURL=index.js.map