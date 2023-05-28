import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message hello_world.HelloRequest
 */
export interface HelloRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * @generated from protobuf message hello_world.HelloReply
 */
export interface HelloReply {
    /**
     * @generated from protobuf field: string message = 1;
     */
    message: string;
}
declare class HelloRequest$Type extends MessageType<HelloRequest> {
    constructor();
    create(value?: PartialMessage<HelloRequest>): HelloRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HelloRequest): HelloRequest;
    internalBinaryWrite(message: HelloRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message hello_world.HelloRequest
 */
export declare const HelloRequest: HelloRequest$Type;
declare class HelloReply$Type extends MessageType<HelloReply> {
    constructor();
    create(value?: PartialMessage<HelloReply>): HelloReply;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HelloReply): HelloReply;
    internalBinaryWrite(message: HelloReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message hello_world.HelloReply
 */
export declare const HelloReply: HelloReply$Type;
/**
 * @generated ServiceType for protobuf service hello_world.Greeter
 */
export declare const Greeter: ServiceType;
export {};
