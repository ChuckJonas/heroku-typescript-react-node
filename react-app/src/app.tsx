import { Card } from 'antd';
import { hot } from 'react-hot-loader';
import * as React from 'react';

class App extends React.Component<{}, {}> {

  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <Card title='Doctor Finder'>

      </Card>
    );
  }
}

export default hot(module)(App);
