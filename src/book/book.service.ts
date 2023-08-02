import { Injectable } from '@nestjs/common';
import { BookEntity } from './entity/book.entity';

@Injectable()
export class BookService {
  public booksData: BookEntity[] = [
    { id: 1, title: 'Harry Potter', price: 250 },
  ];

  addBook(book: BookEntity): string {
    this.booksData.push(book);
    return 'Book Added Successfully';
  }

  updateBook(id: number, updateBook: BookEntity): string {
    for (let x = 0; x < this.booksData.length; x++) {
      if (this.booksData[x].id == id) {
        this.booksData[x] = updateBook;
      }
    }
    return 'Book Updated Succesfully';
  }

  deleteBook(id: number): string {
    this.booksData = this.booksData.filter((book) => book.id !== id);
    return 'Book has been deleted';
  }

  findBookById(id: number): BookEntity {
    for (let x = 0; x < this.booksData.length; x++) {
      if (this.booksData[x].id === id) {
        return this.booksData[x];
      }
    }
  }

  findAllBooks(): BookEntity[] {
    return this.booksData;
  }
}
