import { User } from "src/users/user.entity";
import { InsertResult, Repository } from "typeorm";


export function insertOne(userRepo: Repository<User>, user: User): Promise<InsertResult> {
    const isInsert = userRepo
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([user])
        .execute();
    
    return isInsert;
}