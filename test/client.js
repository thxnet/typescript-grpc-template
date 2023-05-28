const { getGreeterClient } = require("../");

async function test() {
  const client = getGreeterClient("localhost:3939");

  const call1 = client.sayHello({ name: "Alice" });

  console.debug(await call1.status, await call1.response);

  const call2 = client.sayHelloStreamReply({ name: "Bob" });

  const responseStream = call2.responses;

  for await (const resp2 of responseStream) {
    console.debug(await call2.status, resp2);
  }
}

test();
