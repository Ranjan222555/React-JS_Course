import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Helloworld from "../component/helloWorld";

test("render Hello World text", () => {
  const { getByText } = render(<Helloworld />);
  const checkword = getByText("Hello World");

  expect(checkword).toBeInTheDocument();
});
