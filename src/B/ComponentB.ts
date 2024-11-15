import { Mediator } from '../common/Mediator';
export class ComponentB {
  private mediator: Mediator;

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  doB(): void {
    console.log('Component B does B.');
    this.mediator.notify(this, 'B');
  }
}
