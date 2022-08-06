import { Provider } from "react-redux";
import store from "./../effects/store";

interface IWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const WrapperMock = ({
  children
}: IWrapperProps): React.ReactElement => {
  return (
    <>
        <Provider store={store}>
            {children}
        </Provider>
    </>
  );
};

export default WrapperMock;
