import {
  RpcInputStream,
  // RpcOutputStream,
  ServerCallContext,
} from "@protobuf-ts/runtime-rpc";

import {
  HealthCheckRequest,
  HealthCheckResponse,
  Health,
  HealthCheckResponse_ServingStatus,
} from "../protos_helpers/health";

import { IHealth } from "../protos_helpers/health.server";

export { Health };

async function awaitSec(sec: number): Promise<boolean> {
  return new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, sec * 1000);
  });
}

export const healthService: IHealth = {
  async check(
    request: HealthCheckRequest,
    context: ServerCallContext
  ): Promise<HealthCheckResponse> {
    console.debug("Health check", request);

    // const service = request.service;

    // if service is an empty string, means all services

    return HealthCheckResponse.create({
      status: HealthCheckResponse_ServingStatus.SERVING,
    });
  },

  async watch(
    request: HealthCheckRequest,
    responses: RpcInputStream<HealthCheckResponse>,
    context: ServerCallContext
  ): Promise<void> {
    console.debug("Health watch", request);

    // const service = request.service;

    // if service is an empty string, means all services

    for (let i = 0; i < 1000000; i++) {
      await responses.send(
        HealthCheckResponse.create({
          status: HealthCheckResponse_ServingStatus.SERVING,
        })
      );

      await awaitSec(3);
    }

    await responses.complete();
  },
};
