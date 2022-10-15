import { User } from "src/users/user.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    city: string;

    @Column()
    district: string;

    @Column({default: true})
    isActive: boolean;

    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    deletedAt: Date;

    @ManyToOne(type => User, user => user.address)
    @JoinColumn()
    user: User;
}
