import { DoctorsNotFound } from "@/src/helpers/errors/doctors-not-found";
import { DatabaseService } from "@/src/infra/database/database-service";

export class ListDoctorsUseCase {
  constructor(private database: DatabaseService) {}

  public async execute() {
    const doctors = await this.database.findDoctors();

    if (!doctors) {
      throw new DoctorsNotFound();
    }

    return doctors;
  }
}
