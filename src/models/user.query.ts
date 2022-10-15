import { User } from "src/users/user.entity";
import { Repository } from "typeorm";

export function topUserQuery(userRepo: Repository<User>, id: number): Promise<User> {
    const users = userRepo
        .createQueryBuilder("user")
        .where("user.id = :idUser", { idUser: id })
        .getOne();

    return users;
}

export function findUserById(userRepo: Repository<User>, id: number): Promise<User> {
    const user = userRepo
        .createQueryBuilder('user')
        .where('user.id = :userId', { userId: id })
        .getOne();

    return user;
}





