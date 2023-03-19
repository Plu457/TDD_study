// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { server } from "./mocks/server";

beforeAll(() => server.listen());

//* 각 테스트 케이스는 서로 영향을 미치지 않도록 독립적으로 실행되어야 한다.
//* 만약 이전 테스트 케이스에서 사용된 mock 핸들러 함수들의 상태가 그대로 유지되어 있다면, 이전 테스트 케이스에서의 결과가 다음 테스트 케이스에 영향을 미치게 된다.
afterEach(() => server.resetHandlers());

afterAll(() => server.close());
