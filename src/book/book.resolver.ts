import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './schema/book.schema';

@Resolver((of) => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}
  // Queries and mutations

  @Query((returns) => [Book], { name: 'books' })
  getAllBooks(): Book[] {
    return this.bookService.findAllBooks();
  }

  @Query((returns) => Book, { name: 'findBookById', nullable: true })
  getBookById(@Args({ name: 'bookId', type: () => Int }) id: number) {
    return this.bookService.findBookById(id);
  }
}
