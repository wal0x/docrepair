import { UsedPart } from "./used-part";

export class Report {
    jobNumber: string;
    date: string;
    customerName: string;
    customerPhoneNumber: string;
    device: string;
    brand: string;
    model: string;
    sn: string;
    complainNotes: string;
    techRepairNotes: string;
    techRepairNotesPrice: number;
    usedParts: UsedPart[] = new Array<UsedPart>();
    total: number;
}
