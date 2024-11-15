import { Injectable } from '@nestjs/common';
import { BService } from '../B/B.service';

@Injectable()
export class AService{
    private bService: BService;
    constructor() {
        this.bService = new BService();
    }
    A() {
        this.bService.B();
    }
    
}