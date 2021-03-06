import { bindActionCreators } from 'redux';

export default function bindActions(actions) {
  return dispatch => ({
    actions: { ...bindActionCreators(actions, dispatch) },
  });
}
