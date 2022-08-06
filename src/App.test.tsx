import { fireEvent, render } from "@testing-library/react";
import WrapperMock from "./utils/wrapperMock";
import App from "./App";

describe("App", () => {

  const rendered = () =>
    render(
      <WrapperMock>
        <App  />
      </WrapperMock>
    );

  it("render", () => {
    const { getByTestId, asFragment } = rendered();

    const element = getByTestId(`app`);

    expect(element).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it("onSearch", () => {
    const { getByTestId, asFragment, container } = rendered();

    const element = getByTestId(`app`);
    const search = container.querySelector("#search-user") as HTMLInputElement;

    fireEvent.change(search, { target: { value: "bret"}});
    
    expect(element).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

});
