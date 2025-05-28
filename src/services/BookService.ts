import { Book } from '../models/Book';

const books: Book[] = [
  {
    id: '1',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    summary:
      'A comprehensive guide to writing clean, maintainable code that focuses on best practices, principles, and techniques for software craftsmanship.',
  },
  {
    id: '2',
    title: 'React Native in Action',
    author: 'Nader Dabit',
    summary:
      'Learn how to build native mobile applications for iOS and Android using React Native, covering navigation, state management, and platform-specific features.',
  },
  {
    id: '3',
    title: 'TypeScript Deep Dive',
    author: 'Basarat Ali Syed',
    summary:
      'An in-depth exploration of TypeScript, covering advanced types, decorators, and modern JavaScript features with practical examples.',
  },
  {
    id: '4',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    summary:
      'Timeless principles and practical advice for becoming a better programmer, covering topics from code organization to career development.',
  },
  {
    id: '5',
    title: 'Design Patterns',
    author: 'Gang of Four',
    summary:
      'Classic software design patterns that provide reusable solutions to common programming problems in object-oriented design.',
  },
  {
    id: '6',
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    summary:
      "Explores the elegant subset of JavaScript, focusing on the language's best features while avoiding its problematic aspects.",
  },
];

const getBooks = async (): Promise<Book[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(books), 500);
  });
};

const getBookById = async (id: string): Promise<Book | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const book = books.find((b) => b.id === id);
      resolve(book || null);
    }, 300);
  });
};

export default {
  getBooks,
  getBookById,
};
