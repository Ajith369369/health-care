import { PrescriptionRepositoryMongodbType } from "../../frameworks/database/mongodb/repositories/prescriptionRepositoryMongodb";

export const prescriptionDbRepository = (
  repository: ReturnType<PrescriptionRepositoryMongodbType>
) => {
  const addPrescription = async (data: any) =>
    await repository.addPrescriptions(data);

  const fetchPrescription = async (data: any) =>
    await repository.fetPrescriptions(data);

  const uploadDocuments = async (appointmentId: string, data: any) => {
    await repository.uploadDocument(appointmentId, data);
  };

  const getLabDocuments = async (appointmentId: string) =>
    await repository.getLabDocument(appointmentId);

  const fetchPrescriptionDoctor = async (data: any) =>
    await repository.fetchPrescriptionlist(data);

  const deletePrescriptionDetails = async (prescriptionId: any) =>
    await repository.deletePrescriptionDetail(prescriptionId);

  const deleteDocumentSingle = async (id: any) => {
    await repository.deleteDocumentSingles(id);
  };

  return {
    addPrescription,
    fetchPrescription,
    uploadDocuments,
    getLabDocuments,
    fetchPrescriptionDoctor,
    deletePrescriptionDetails,
    deleteDocumentSingle,
  };
};
export type PrescriptionDbInterface = typeof prescriptionDbRepository;
