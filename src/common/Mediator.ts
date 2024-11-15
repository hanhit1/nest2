import { ComponentA } from '../A/ComponentA'
import { ComponentB } from '../B/ComponentB';
export interface Mediator {
    notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
    private componentA: ComponentA;
    private componentB: ComponentB;

    constructor(cA: ComponentA, cB: ComponentB) {
        this.componentA = cA;
        this.componentA.setMediator(this);
        this.componentB = cB;
        this.componentB.setMediator(this);
    }

    notify(sender: object, event: string): void {
        if (event === 'A') {
            console.log('Mediator reacts on A and triggers following operations:');
            this.componentB.doB();
        }

        if (event === 'B') {
            console.log('Mediator reacts on B and triggers following operations:');
            this.componentA.doA();
        }
    }
}



const componentA = new ComponentA();
const componentB = new ComponentB();
const mediator = new ConcreteMediator(componentA, componentB);
componentA.doA();
componentB.doB();