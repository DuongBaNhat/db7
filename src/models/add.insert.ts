import { Address } from "src/address/add.entity";
import { Repository } from "typeorm";

export function addInsert(address: Address, addRepo: Repository<Address>) {
    const result = addRepo
        .createQueryBuilder()
        .insert()
        .into(Address)
        .values([address])
        .execute()

        return result;
}