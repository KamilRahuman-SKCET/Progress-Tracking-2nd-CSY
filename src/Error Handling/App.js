import React, { Component } from 'react';
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
        console.error('Error caught by componentDidCatch:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
class MyComponent extends Component {
  componentDidMount() {
    throw new Error('Simulated error in componentDidMount');
  }
  render() {
    return <div>MyComponent</div>;
  }
}
const App = () => {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
};

export default App;
