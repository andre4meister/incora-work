import { Redirect, Route } from "react-router-dom";
import { SettingsProps } from "./Settings";

type Props = {
  setPerPage: (page: number) => void;
  perPage: number;
};

function PrivateRoute(login: boolean, Component: React.ElementType<SettingsProps>, props: Props) {
  const onValueChange: (page: number) => void = props.setPerPage;
  const perPage: number = props.perPage;

  return (
    <Route>
      {login ? (
        <Component perPage={perPage} onValueChange={onValueChange} />
      ) : (
        <Redirect to='/task2' from='/settings' />
      )}
    </Route>
  );
}

export default PrivateRoute;
