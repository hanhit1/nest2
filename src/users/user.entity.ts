import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    age: number;
    @Column()
    gender: string;
    @Column({ nullable: true }) 
    address?: string;
}
