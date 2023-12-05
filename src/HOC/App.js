import React, { Component } from 'react';
const withLogger = (WrappedComponent) => {
  class WithLogger extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} will unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLogger;
};

class MyComponent extends Component {
  render() {
    return <div>MyComponent</div>;
  }
}

const MyComponentWithLogger = withLogger(MyComponent);

const App = () => {
  return (
    <div>
      <MyComponentWithLogger />
    </div>
  );
};

export default App;
