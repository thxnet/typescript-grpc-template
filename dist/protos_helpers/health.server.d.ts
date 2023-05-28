import { RpcInputStream } from "@protobuf-ts/runtime-rpc";
import { HealthCheckResponse } from "./health";
import { HealthCheckRequest } from "./health";
import { ServerCallContext } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service grpc.health.v1.Health
 */
export interface IHealth<T = ServerCallContext> {
    /**
     * If the requested service is unknown, the call will fail with status
     * NOT_FOUND.
     *
     * @generated from protobuf rpc: Check(grpc.health.v1.HealthCheckRequest) returns (grpc.health.v1.HealthCheckResponse);
     */
    check(request: HealthCheckRequest, context: T): Promise<HealthCheckResponse>;
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
    watch(request: HealthCheckRequest, responses: RpcInputStream<HealthCheckResponse>, context: T): Promise<void>;
}
