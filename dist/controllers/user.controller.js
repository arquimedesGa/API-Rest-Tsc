"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
class userController {
    getUsers(req, res) {
        res.status(200).json({ message: "soy los Usuarios" });
    }
}
exports.userController = userController;
