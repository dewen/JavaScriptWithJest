import { myFunction } from "../../src/es6/promise";

// const willNotDo = new Promise(myFunction(200, 100));
const willDo = new Promise(myFunction(100, 200));

describe("promise", () => {
  it("will fail on slow resolve", () => {
    willDo
      .then((output) => {
        // console.log(output);
        fail("it should not resolve");
      })
      .catch((err) => {
        // console.log(`Failed: ${err}`);
        expect(err).toEqual('Scheduled task failed here!');
      });
  });
});
