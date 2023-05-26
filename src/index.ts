import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import * as grpc from "@grpc/grpc-js";

import { adaptService } from "@protobuf-ts/grpc-backend";

import { greeterService, Greeter } from "./server_side_handlers/hello_world";

function startServer() {
  const host = (process.env.GRPC_HOST as string) || "0.0.0.0:3939";

  const server = new grpc.Server();
  server.addService(...adaptService(Greeter, greeterService));

  server.bindAsync(
    host,
    grpc.ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err) {
        console.error(`Server error: ${err.message}`);
        process.exit(1);
      } else {
        console.log(`Server bound on port: ${port}`);
        server.start();
      }
    }
  );
}

startServer();
