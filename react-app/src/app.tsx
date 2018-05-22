import { Card } from 'antd';
import * as React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component<{}, {}> {

  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <Card title='React / Node App'>
        hello world
      </Card>
    );
  }
}

export default hot(module)(App);
