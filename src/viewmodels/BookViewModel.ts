import { useState, useEffect, useCallback } from 'react';
import { Book } from '../models/Book';
import BookService from '../services/BookService';

export const useBookViewModel = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadBooks = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await BookService.getBooks();
      setBooks(data);
    } catch {
      setError('Failed to load books');
    } finally {
      setLoading(false);
    }
  }, []);

  const selectBook = useCallback(async (bookId: string) => {
    setLoading(true);
    try {
      const book = await BookService.getBookById(bookId);
      setSelectedBook(book);
    } catch {
      setError('Failed to load book details');
    } finally {
      setLoading(false);
    }
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedBook(null);
  }, []);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  return {
    books,
    selectedBook,
    loading,
    error,
    loadBooks,
    selectBook,
    clearSelection,
  };
};
