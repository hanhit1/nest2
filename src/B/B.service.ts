import { Injectable } from '@nestjs/common';
import { AService } from '../A/A.service';

@Injectable()
export class BService{
    private aService: AService;
    constructor() {
        this.aService = new AService();
    }
    B() {
        this.aService.A();
 }
}