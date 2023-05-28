import { RpcInputStream } from "@protobuf-ts/runtime-rpc";
import { HelloReply } from "./hello_world";
import { HelloRequest } from "./hello_world";
import { ServerCallContext } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service hello_world.Greeter
 */
export interface IGreeter<T = ServerCallContext> {
    /**
     * @generated from protobuf rpc: SayHello(hello_world.HelloRequest) returns (hello_world.HelloReply);
     */
    sayHello(request: HelloRequest, context: T): Promise<HelloReply>;
    /**
     * @generated from protobuf rpc: SayHelloStreamReply(hello_world.HelloRequest) returns (stream hello_world.HelloReply);
     */
    sayHelloStreamReply(request: HelloRequest, responses: RpcInputStream<HelloReply>, context: T): Promise<void>;
}
