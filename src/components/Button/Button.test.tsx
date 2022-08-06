import { fireEvent, render } from "@testing-library/react";
import WrapperMock from "../../utils/wrapperMock";
import Button, { ButtonProps } from "./Button";

describe("Button Component", () => {
  const defaultProps: ButtonProps = {
    id: "test",
    label: "Label",
    onClick: jest.fn()
  };

  const rendered = (props: ButtonProps) =>
    render(
      <WrapperMock>
        <Button {...props} />
      </WrapperMock>
    );

  it("render", () => {
    const { getByTestId, asFragment } = rendered(defaultProps);

    const element = getByTestId(`button-${defaultProps.id}`);

    expect(element).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it("onClick", () => {
    const onClickSpy = jest.spyOn(defaultProps, "onClick");
    const { getByTestId } = rendered(defaultProps);

    const btnCommon = getByTestId(`button-${defaultProps.id}`);
    fireEvent.click(btnCommon);

    expect(onClickSpy).toHaveBeenCalled();
  });
});
