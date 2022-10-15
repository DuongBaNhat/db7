import { Address } from "src/address/add.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({default: true})
    isActive: boolean;

    @DeleteDateColumn({name: 'deleted_at', default: null})
    deleteDate: Date;

    @OneToMany(type => Address, address => address.user)
    // @JoinColumn()
    address: Address[];
}
