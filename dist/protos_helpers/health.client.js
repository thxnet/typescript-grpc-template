"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthClient = void 0;
const health_1 = require("./health");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * @generated from protobuf service grpc.health.v1.Health
 */
class HealthClient {
    _transport;
    typeName = health_1.Health.typeName;
    methods = health_1.Health.methods;
    options = health_1.Health.options;
    constructor(_transport) {
        this._transport = _transport;
    }
    /**
     * If the requested service is unknown, the call will fail with status
     * NOT_FOUND.
     *
     * @generated from protobuf rpc: Check(grpc.health.v1.HealthCheckRequest) returns (grpc.health.v1.HealthCheckResponse);
     */
    check(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
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
    watch(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("serverStreaming", this._transport, method, opt, input);
    }
}
exports.HealthClient = HealthClient;
