import { fireEvent, render } from "@testing-library/react";
import WrapperMock from "../../../utils/wrapperMock";
import InputText, { InputTextProps } from "./Text";

describe("Input Text Component", () => {
  const defaultProps: InputTextProps = {
    id: "unit-text", 
    label: "label", 
    defaultValue: 0,
    onChange: jest.fn()
  };

  const rendered = (props: InputTextProps) =>
    render(
      <WrapperMock>
        <InputText {...props} />
      </WrapperMock>
    );

  it("render", () => {
    const onChangeSpy = jest.spyOn(defaultProps, "onChange");
    const { asFragment, container } = rendered(defaultProps);

    const element = container.querySelector("#unit-text") as HTMLInputElement;

    expect(element).toBeDefined();
    expect(element.defaultValue).toBe("0");
    fireEvent.change(element, {target: {value: 3}});
    
    expect(onChangeSpy).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });

});
