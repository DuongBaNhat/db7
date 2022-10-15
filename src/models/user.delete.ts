import { User } from "src/users/user.entity";
import { Repository } from "typeorm";

export function deleteByQuery(id: number, userRepo: Repository<User>) {
    return userRepo
        .createQueryBuilder()
        .softDelete()
        .from(User, 'user')
        .where("user.id = :idUser", { idUser: id })
        .execute();
}