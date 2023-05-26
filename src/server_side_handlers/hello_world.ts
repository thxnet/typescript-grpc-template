import {
  RpcInputStream,
  // RpcOutputStream,
  ServerCallContext,
} from "@protobuf-ts/runtime-rpc";

import {
  HelloRequest,
  HelloReply,
  Greeter,
} from "../protos_helpers/hello_world";

import { IGreeter } from "../protos_helpers/hello_world.server";

export { Greeter };

export const greeterService: IGreeter = {
  async sayHello(
    request: HelloRequest,
    context: ServerCallContext
  ): Promise<HelloReply> {
    console.debug("sayHello", request);

    const name = request.name;

    return HelloReply.create({
      message: `Hello, ${name}!`,
    });
  },

  async sayHelloStreamReply(
    request: HelloRequest,
    responses: RpcInputStream<HelloReply>,
    context: ServerCallContext
  ): Promise<void> {
    console.debug("sayHelloStreamReply", request);

    const name = request.name;

    await responses.send(
      HelloReply.create({
        message: `Hello, ${name}! 1`,
      })
    );

    await responses.send(
      HelloReply.create({
        message: `Hello, ${name}! 2`,
      })
    );

    await responses.complete();
  },
};
