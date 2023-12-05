import React, { Component } from 'react';

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor: Component is being constructed');
    this.state = { data: 'Initial data' };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps: Called before every render, when props or state change', nextProps, nextState);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Determines if the component should re-render', nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Called right before the changes from the virtual DOM are to be reflected in the DOM', prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Called after the component is updated in the DOM', prevProps, prevState, snapshot);
  }

  componentDidMount() {
    console.log('componentDidMount: Component is now mounted to the DOM');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be unmounted');
  }

  componentDidCatch(error, errorInfo) {
    console.error('componentDidCatch: Called when an error occurs during rendering', error, errorInfo);
  }

  handleStateUpdate = () => {
    this.setState({ data: 'Updated data' });
  };

  render() {
    console.log('Render: Component is rendering');
    return (
      <div>
        <p>Data: {this.state.data}</p>
        <button onClick={this.handleStateUpdate}>Update State</button>
      </div>
    );
  }
}

export default LifecycleComponent;
