"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greeterService = exports.Greeter = void 0;
const hello_world_1 = require("../protos_helpers/hello_world");
Object.defineProperty(exports, "Greeter", { enumerable: true, get: function () { return hello_world_1.Greeter; } });
exports.greeterService = {
    async sayHello(request, context) {
        console.debug("Greeter sayHello", request);
        const name = request.name;
        return hello_world_1.HelloReply.create({
            message: `Hello, ${name}!`,
        });
    },
    async sayHelloStreamReply(request, responses, context) {
        console.debug("Greeter sayHelloStreamReply", request);
        const name = request.name;
        await responses.send(hello_world_1.HelloReply.create({
            message: `Hello, ${name}! 1`,
        }));
        await responses.send(hello_world_1.HelloReply.create({
            message: `Hello, ${name}! 2`,
        }));
        await responses.complete();
    },
};
