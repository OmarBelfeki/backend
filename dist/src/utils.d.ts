export declare function normalizePhone(phone: any): string | null;
export declare function parseCSV(buffer: any): unknown[];
export declare function parseExcel(buffer: any): unknown[];
export declare function importContacts(file: Express.Multer.File): unknown[];
export declare function calculateCost(messageContent: string): Promise<number>;
