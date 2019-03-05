// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.Node
};

type State = {
  isOffline: boolean,
};

export default class App extends React.Component<Props, State> {
  props: Props;
  constructor(props: any) {
    super(props);
    this.state = {
      isOffline: !navigator.onLine,
    };
  }
  componentDidMount() {
    window.addEventListener('online', this.alertOnlineStatus);
    window.addEventListener('offline', this.alertOnlineStatus);
  }
  alertOnlineStatus = () => {
    this.setState({
      isOffline: !navigator.onLine,
    })
  }
  componentWillUnmount() {
    window.removeEventListener('online', this.alertOnlineStatus);
    window.removeEventListener('offline', this.alertOnlineStatus);
  }
  render() {
    const { children } = this.props;
    const { isOffline } = this.state;
    return (<React.Fragment>
      {isOffline && (
        <OfflineScreen>
          You're Offline! Check your internet connection.
        </OfflineScreen>
      )}
      {children}
    </React.Fragment>);
  }
}


const OfflineScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
