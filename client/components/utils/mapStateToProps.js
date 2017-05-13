export default function mapStateToProps(key) {
  return state => (state && state[key] ? state[key] : null);
}
