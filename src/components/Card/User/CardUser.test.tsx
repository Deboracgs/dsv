/* eslint-disable jest/no-mocks-import */
import { fireEvent, render } from "@testing-library/react";
import users from "./../../../__mocks__/users";
import WrapperMock from "../../../utils/wrapperMock";
import CardUser, { CardUserProps } from "./CardUser";
import { IUser } from "../../../typings";

describe("Card User Component", () => {
  const defaultProps: CardUserProps = {
    id: "test",
    user: users[0] as unknown as IUser,
    onRemove: jest.fn(),
    onRestore: jest.fn()
  };

  const rendered = (props: CardUserProps) =>
    render(
      <WrapperMock>
        <CardUser {...props} />
      </WrapperMock>
    );

  it("render", () => {
    const { getByTestId, asFragment } = rendered(defaultProps);

    const element = getByTestId(`card-user-${defaultProps.id}`);

    expect(element).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it("onRemove", () => {
    const onClickSpy = jest.spyOn(defaultProps, "onRemove");
    const { getByTestId } = rendered(defaultProps);

    const btnCommon = getByTestId(`button-Remove-usertest`);
    fireEvent.click(btnCommon);

    expect(onClickSpy).toHaveBeenCalled();
  });

  it("onRestore", () => {
    const onClickSpy = jest.spyOn(defaultProps, "onRestore");
    const { getByTestId } = rendered({...defaultProps, user: {...defaultProps.user, deleted: true}});

    const btnCommon = getByTestId(`button-Restore-usertest`);
    fireEvent.click(btnCommon);

    expect(onClickSpy).toHaveBeenCalled();
  });
});
