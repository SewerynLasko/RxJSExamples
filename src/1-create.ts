import { Observable, of, interval, fromEvent, from, asyncScheduler } from 'rxjs';
import { printOnScreen } from './print';

export function createObservable() {
  const basic = Observable.create(observer => {
    observer.next('A');
    observer.next('B');
    observer.complete();
    observer.next('C');
  });

  basic.subscribe(printOnScreen);

  const hello = of('hello');
  hello.subscribe(printOnScreen);

  const world = from('world', asyncScheduler);
  world.subscribe(printOnScreen);

  const event = fromEvent(document, 'click').subscribe(printOnScreen);

  setTimeout(() => {
    event.unsubscribe();
  }, 1000);

  // const periodic = interval(500);
  // periodic.subscribe(printOnScreen);
}
