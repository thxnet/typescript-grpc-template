"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthService = exports.Health = void 0;
const health_1 = require("../protos_helpers/health");
Object.defineProperty(exports, "Health", { enumerable: true, get: function () { return health_1.Health; } });
async function awaitSec(sec) {
    return new Promise((res) => {
        setTimeout(() => {
            res(true);
        }, sec * 1000);
    });
}
exports.healthService = {
    async check(request, context) {
        console.debug("Health check", request);
        // const service = request.service;
        // if service is an empty string, means all services
        return health_1.HealthCheckResponse.create({
            status: health_1.HealthCheckResponse_ServingStatus.SERVING,
        });
    },
    async watch(request, responses, context) {
        console.debug("Health watch", request);
        // const service = request.service;
        // if service is an empty string, means all services
        // this section is just an example, since:
        // `watch` method should subsequently send a new message to the client whenever the service's serving status changes.
        const status = [
            health_1.HealthCheckResponse_ServingStatus.UNKNOWN,
            health_1.HealthCheckResponse_ServingStatus.SERVING,
            health_1.HealthCheckResponse_ServingStatus.NOT_SERVING,
            health_1.HealthCheckResponse_ServingStatus.SERVICE_UNKNOWN,
        ];
        let index = 0;
        while (true) {
            await responses.send(health_1.HealthCheckResponse.create({
                status: status[index],
            }));
            await awaitSec(10);
            index++;
            if (index > 3)
                index = 0;
        }
        // await responses.complete();
    },
};
