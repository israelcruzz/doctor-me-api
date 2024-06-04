import { PrismaClient } from "@prisma/client";

interface IPatient {
  id?: number;
  name: string;
  phone: string;
  createdAt?: string;
  userId: number;
}

export class DatabaseService {
  constructor(readonly db: PrismaClient) {}

  public async findDoctors() {
    const doctors = await this.db.doctor.findMany({
      include: {
        agendas: true,
      },
    });

    return doctors;
  }

  public async findDoctor(doctorId: number) {
    const doctor = await this.db.doctor.findUnique({
      where: {
        id: doctorId,
      },
      include: {
        agendas: true,
      },
    });

    return doctor;
  }

  public async findPatient(patientId: number) {
    const patient = await this.db.patient.findUnique({
      where: {
        id: patientId,
      },
      include: {
        appointments: true,
      },
    });

    return patient;
  }

  public async storePatient({ name, phone, userId }: IPatient) {
    const patient = await this.db.patient.create({
      data: {
        name,
        phone,
        userId,
      },
    });

    return patient;
  }

  public async storeAppointment(
    patientId: number,
    doctorId: number,
    date: Date
  ) {
    const appointment = await this.db.appointment.create({
      data: {
        date,
        patientId,
        doctorId,
      },
    });

    return appointment;
  }
}
