import { ChannelCredentials } from "@grpc/grpc-js";

import { GrpcTransport } from "@protobuf-ts/grpc-transport";

import { GreeterClient } from "./protos_helpers/hello_world.client";

export function getGreeterClient(host: string) {
  const transport = new GrpcTransport({
    host,
    channelCredentials: ChannelCredentials.createInsecure(),
  });

  return new GreeterClient(transport);
}

export { GreeterClient };
