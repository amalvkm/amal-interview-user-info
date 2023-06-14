import { Address } from "./address";
import { Education } from "./education";
import { Experience } from "./experience";

export class UserInfo {
    first_name: string = '';
    last_name: string = '';
    age: number = 0;
    profile: any;
    address: Address = new Address;
    experences: Experience[] = [];
    educations: Education[] = [];
}