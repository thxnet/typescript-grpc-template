"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const grpc = require("@grpc/grpc-js");
const grpc_backend_1 = require("@protobuf-ts/grpc-backend");
const hello_world_1 = require("./server_side_handlers/hello_world");
const health_1 = require("./server_side_handlers/health");
function startServer() {
    const host = process.env.GRPC_HOST || "0.0.0.0:3939";
    const server = new grpc.Server();
    server.addService(...(0, grpc_backend_1.adaptService)(hello_world_1.Greeter, hello_world_1.greeterService));
    server.addService(...(0, grpc_backend_1.adaptService)(health_1.Health, health_1.healthService));
    server.bindAsync(host, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            console.error(`Server error: ${err.message}`);
            process.exit(1);
        }
        else {
            console.log(`Server bound on port: ${port}`);
            server.start();
        }
    });
}
startServer();
