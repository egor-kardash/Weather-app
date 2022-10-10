import { Component, ErrorInfo } from 'react';

import { ErrorHeader } from './styled';
import { Props, State } from './types';

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorHeader>Sorry.. Аn error has occurred</ErrorHeader>;
    }

    return this.props.children;
  }
}
