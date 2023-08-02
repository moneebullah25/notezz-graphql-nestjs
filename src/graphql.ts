
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Book {
    id: number;
    title: string;
    price?: Nullable<number>;
}

export interface IQuery {
    books(): Book[] | Promise<Book[]>;
    findBookById(bookId: number): Nullable<Book> | Promise<Nullable<Book>>;
}

type Nullable<T> = T | null;
