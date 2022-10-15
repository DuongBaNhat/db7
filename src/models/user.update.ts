import { User } from "src/users/user.entity";
import { Repository } from "typeorm";

export function updateFirstNameByQuery(id: number, newFirstName: string, userRepo: Repository<User>) {
    let result = userRepo.createQueryBuilder()
        .update(User)
        .set({
            firstName: newFirstName,
        })
        .where('user.id = :idUser', { idUser: id })
        .execute();

    return result;
}