export type TUser = {
    readonly userId: number;
    aboutMe: string;
    birthdate: Date;
    country: string;
    createdAt: Date;
    email: string;
    firstName: string;
    lastName: string;
    observations: string;
    password: string;
    postalCode: string;
    updatedAt: Date;
    address?: string;
};