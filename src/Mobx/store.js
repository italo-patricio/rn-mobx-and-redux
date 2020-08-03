import {observable, decorate, action} from 'mobx';

class CounterMobxStore {
  count = 0;
  increment = () => (this.count += 1);
  decrement = () => (this.count -= 1);
}

decorate(CounterMobxStore, {
  count: observable,
  increment: action,
  decrement: action,
});

export default new CounterMobxStore();
