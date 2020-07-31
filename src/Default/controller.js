import {RouteMobx, RouteRedux} from '../shared/routenames';

export class StateController {
  constructor(component) {
    this.component = component;
    this.component.state = {count: 0};
  }

  increment = () => this.setState({count: this.state.count + 1});

  decrement = () => this.setState({count: this.state.count - 1});

  navigateToMobx = () => this.component.navigation.navigate(RouteMobx);

  navigateToRedux = () => this.component.navigation.navigate(RouteRedux);
}
