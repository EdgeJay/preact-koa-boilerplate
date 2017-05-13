import React from 'react';
import { connect } from 'preact-redux';
import * as actions from './actions/counter';
import bindActions from './utils/bindActions';
import mapStateToProps from './utils/mapStateToProps';
import styles from './styles/counter.css';

class Counter extends React.Component {
  render(props) {
    return (
      <section>
        <span className={styles.counter}
          onClick={this.onClick.bind(this)}>{props.counterValue}</span>
      </section>
    );
  }

  onClick() {
    this.props.actions.incrementCounter();
  }
}

export default connect(mapStateToProps('counter'), bindActions(actions))(Counter);
