
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateDogInput {
    name: string;
    ownerId?: Nullable<number>;
}

export class UpdateDogInput {
    id: number;
    name: string;
}

export class CreateOwnerInput {
    name: string;
}

export class Dog {
    id: number;
    name: string;
}

export abstract class IQuery {
    abstract dogs(): Nullable<Dog>[] | Promise<Nullable<Dog>[]>;

    abstract dog(id: number): Nullable<Dog> | Promise<Nullable<Dog>>;

    abstract owner(id: number): Nullable<Owner> | Promise<Nullable<Owner>>;
}

export abstract class IMutation {
    abstract createDog(createDogInput: CreateDogInput): Dog | Promise<Dog>;

    abstract updateDog(updateDogInput: UpdateDogInput): Dog | Promise<Dog>;

    abstract removeDog(id: number): Nullable<Dog> | Promise<Nullable<Dog>>;

    abstract createOwner(createOwnerInput: CreateOwnerInput): Owner | Promise<Owner>;

    abstract removeOwner(id: number): Nullable<Owner> | Promise<Nullable<Owner>>;
}

export class Owner {
    id: number;
    name: string;
    dogs: Dog[];
}

type Nullable<T> = T | null;
