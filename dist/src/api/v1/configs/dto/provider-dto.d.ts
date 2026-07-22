declare enum SmsType {
    OTP = "OTP",
    RESETPASSWORD = "RESETPASSWORD"
}
export declare class ProviderDto {
    mobileTest: string;
    sender: string;
    msg: string;
    apiKey: string;
    type: SmsType;
}
export {};
