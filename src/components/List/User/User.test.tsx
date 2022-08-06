import { render } from "@testing-library/react";
import WrapperMock from "../../../utils/wrapperMock";
import ListUser from "./User";

describe("List User Component", () => {

  const rendered = () =>
    render(
      <WrapperMock>
        <ListUser  />
      </WrapperMock>
    );

  it("render", () => {
    const { getByTestId, asFragment } = rendered();

    const element = getByTestId(`list-user`);

    expect(element).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

});
