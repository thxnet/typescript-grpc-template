"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreeterClient = exports.getGreeterClient = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const grpc_transport_1 = require("@protobuf-ts/grpc-transport");
const hello_world_client_1 = require("./protos_helpers/hello_world.client");
Object.defineProperty(exports, "GreeterClient", { enumerable: true, get: function () { return hello_world_client_1.GreeterClient; } });
function getGreeterClient(host) {
    const transport = new grpc_transport_1.GrpcTransport({
        host,
        channelCredentials: grpc_js_1.ChannelCredentials.createInsecure(),
    });
    return new hello_world_client_1.GreeterClient(transport);
}
exports.getGreeterClient = getGreeterClient;
