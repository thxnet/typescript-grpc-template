import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message grpc.health.v1.HealthCheckRequest
 */
export interface HealthCheckRequest {
    /**
     * @generated from protobuf field: string service = 1;
     */
    service: string;
}
/**
 * @generated from protobuf message grpc.health.v1.HealthCheckResponse
 */
export interface HealthCheckResponse {
    /**
     * @generated from protobuf field: grpc.health.v1.HealthCheckResponse.ServingStatus status = 1;
     */
    status: HealthCheckResponse_ServingStatus;
}
/**
 * @generated from protobuf enum grpc.health.v1.HealthCheckResponse.ServingStatus
 */
export declare enum HealthCheckResponse_ServingStatus {
    /**
     * @generated from protobuf enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from protobuf enum value: SERVING = 1;
     */
    SERVING = 1,
    /**
     * @generated from protobuf enum value: NOT_SERVING = 2;
     */
    NOT_SERVING = 2,
    /**
     * Used only by the Watch method.
     *
     * @generated from protobuf enum value: SERVICE_UNKNOWN = 3;
     */
    SERVICE_UNKNOWN = 3
}
declare class HealthCheckRequest$Type extends MessageType<HealthCheckRequest> {
    constructor();
    create(value?: PartialMessage<HealthCheckRequest>): HealthCheckRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HealthCheckRequest): HealthCheckRequest;
    internalBinaryWrite(message: HealthCheckRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.health.v1.HealthCheckRequest
 */
export declare const HealthCheckRequest: HealthCheckRequest$Type;
declare class HealthCheckResponse$Type extends MessageType<HealthCheckResponse> {
    constructor();
    create(value?: PartialMessage<HealthCheckResponse>): HealthCheckResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HealthCheckResponse): HealthCheckResponse;
    internalBinaryWrite(message: HealthCheckResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message grpc.health.v1.HealthCheckResponse
 */
export declare const HealthCheckResponse: HealthCheckResponse$Type;
/**
 * @generated ServiceType for protobuf service grpc.health.v1.Health
 */
export declare const Health: ServiceType;
export {};
