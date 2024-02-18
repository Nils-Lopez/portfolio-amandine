import { useEffect } from 'react';

import {
  useLocation,
  useNavigate,
  useParams,
  useHistory
} from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    const history = useHistory()

    return (
      <Component
        {...props}
        router={{ location, navigate, params, history }}
      />
    );
  }

  return ComponentWithRouterProp;
}

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);