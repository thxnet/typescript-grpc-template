import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { HelloReply } from "./hello_world";
import type { HelloRequest } from "./hello_world";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service hello_world.Greeter
 */
export interface IGreeterClient {
    /**
     * @generated from protobuf rpc: SayHello(hello_world.HelloRequest) returns (hello_world.HelloReply);
     */
    sayHello(input: HelloRequest, options?: RpcOptions): UnaryCall<HelloRequest, HelloReply>;
    /**
     * @generated from protobuf rpc: SayHelloStreamReply(hello_world.HelloRequest) returns (stream hello_world.HelloReply);
     */
    sayHelloStreamReply(input: HelloRequest, options?: RpcOptions): ServerStreamingCall<HelloRequest, HelloReply>;
}
/**
 * @generated from protobuf service hello_world.Greeter
 */
export declare class GreeterClient implements IGreeterClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: SayHello(hello_world.HelloRequest) returns (hello_world.HelloReply);
     */
    sayHello(input: HelloRequest, options?: RpcOptions): UnaryCall<HelloRequest, HelloReply>;
    /**
     * @generated from protobuf rpc: SayHelloStreamReply(hello_world.HelloRequest) returns (stream hello_world.HelloReply);
     */
    sayHelloStreamReply(input: HelloRequest, options?: RpcOptions): ServerStreamingCall<HelloRequest, HelloReply>;
}
