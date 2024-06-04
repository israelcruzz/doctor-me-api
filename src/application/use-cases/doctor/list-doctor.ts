import { DoctorNotFound } from "@/src/helpers/errors/doctor-not-found";
import { DatabaseService } from "@/src/infra/database/database-service";

export class ListDoctorUseCase {
  constructor(private database: DatabaseService) {}

  public async execute(doctorId: number) {
    const doctor = await this.database.findDoctor(doctorId);

    if (!doctor) {
      throw new DoctorNotFound();
    }

    return doctor;
  }
}
