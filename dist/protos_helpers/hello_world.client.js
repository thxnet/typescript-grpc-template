"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreeterClient = void 0;
const hello_world_1 = require("./hello_world");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * @generated from protobuf service hello_world.Greeter
 */
class GreeterClient {
    _transport;
    typeName = hello_world_1.Greeter.typeName;
    methods = hello_world_1.Greeter.methods;
    options = hello_world_1.Greeter.options;
    constructor(_transport) {
        this._transport = _transport;
    }
    /**
     * @generated from protobuf rpc: SayHello(hello_world.HelloRequest) returns (hello_world.HelloReply);
     */
    sayHello(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SayHelloStreamReply(hello_world.HelloRequest) returns (stream hello_world.HelloReply);
     */
    sayHelloStreamReply(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("serverStreaming", this._transport, method, opt, input);
    }
}
exports.GreeterClient = GreeterClient;
