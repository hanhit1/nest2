import { Mediator } from "../common/Mediator";
export class ComponentA {
    private mediator: Mediator;

    setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }

    doA(): void {
        console.log('Component A does A.');
        this.mediator.notify(this, 'A');
    }
}