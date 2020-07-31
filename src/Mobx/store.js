import {observable, decorate} from 'mobx';

export class CounterStore {
  count = 0;

  increment = () => (this.count += 1);
  decrement = () => (this.count -= 1);
}

decorate(CounterStore, {
  count: observable,
});
