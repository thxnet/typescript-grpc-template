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

    // this section is just an example, since:
    // `watch` method should subsequently send a new message to the client whenever the service's serving status changes.

    const status = [
      HealthCheckResponse_ServingStatus.UNKNOWN,
      HealthCheckResponse_ServingStatus.SERVING,
      HealthCheckResponse_ServingStatus.NOT_SERVING,
      HealthCheckResponse_ServingStatus.SERVICE_UNKNOWN,
    ];
    let index = 0;

    while (true) {
      await responses.send(
        HealthCheckResponse.create({
          status: status[index],
        })
      );

      await awaitSec(10);

      index++;

      if (index > 3) index = 0;
    }

    // await responses.complete();
  },
};
