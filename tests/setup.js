import { expect, afterEach, beforeAll, afterAll } from "vitest";
import { rest } from "msw";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { advicesResponse } from "./mockAdvices";
import { setupServer } from "msw/node";

expect.extend(matchers);

export const restHandlers = [
  rest.get("https://api.adviceslip.com/advice", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(advicesResponse))
  })
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
