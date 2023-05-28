import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { HealthCheckResponse } from "./health";
import type { HealthCheckRequest } from "./health";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service grpc.health.v1.Health
 */
export interface IHealthClient {
    /**
     * If the requested service is unknown, the call will fail with status
     * NOT_FOUND.
     *
     * @generated from protobuf rpc: Check(grpc.health.v1.HealthCheckRequest) returns (grpc.health.v1.HealthCheckResponse);
     */
    check(input: HealthCheckRequest, options?: RpcOptions): UnaryCall<HealthCheckRequest, HealthCheckResponse>;
    /**
     * Performs a watch for the serving status of the requested service.
     * The server will immediately send back a message indicating the current
     * serving status.  It will then subsequently send a new message whenever
     * the service's serving status changes.
     *
     * If the requested service is unknown when the call is received, the
     * server will send a message setting the serving status to
     * SERVICE_UNKNOWN but will *not* terminate the call.  If at some
     * future point, the serving status of the service becomes known, the
     * server will send a new message with the service's serving status.
     *
     * If the call terminates with status UNIMPLEMENTED, then clients
     * should assume this method is not supported and should not retry the
     * call.  If the call terminates with any other status (including OK),
     * clients should retry the call with appropriate exponential backoff.
     *
     * @generated from protobuf rpc: Watch(grpc.health.v1.HealthCheckRequest) returns (stream grpc.health.v1.HealthCheckResponse);
     */
    watch(input: HealthCheckRequest, options?: RpcOptions): ServerStreamingCall<HealthCheckRequest, HealthCheckResponse>;
}
/**
 * @generated from protobuf service grpc.health.v1.Health
 */
export declare class HealthClient implements IHealthClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * If the requested service is unknown, the call will fail with status
     * NOT_FOUND.
     *
     * @generated from protobuf rpc: Check(grpc.health.v1.HealthCheckRequest) returns (grpc.health.v1.HealthCheckResponse);
     */
    check(input: HealthCheckRequest, options?: RpcOptions): UnaryCall<HealthCheckRequest, HealthCheckResponse>;
    /**
     * Performs a watch for the serving status of the requested service.
     * The server will immediately send back a message indicating the current
     * serving status.  It will then subsequently send a new message whenever
     * the service's serving status changes.
     *
     * If the requested service is unknown when the call is received, the
     * server will send a message setting the serving status to
     * SERVICE_UNKNOWN but will *not* terminate the call.  If at some
     * future point, the serving status of the service becomes known, the
     * server will send a new message with the service's serving status.
     *
     * If the call terminates with status UNIMPLEMENTED, then clients
     * should assume this method is not supported and should not retry the
     * call.  If the call terminates with any other status (including OK),
     * clients should retry the call with appropriate exponential backoff.
     *
     * @generated from protobuf rpc: Watch(grpc.health.v1.HealthCheckRequest) returns (stream grpc.health.v1.HealthCheckResponse);
     */
    watch(input: HealthCheckRequest, options?: RpcOptions): ServerStreamingCall<HealthCheckRequest, HealthCheckResponse>;
}
