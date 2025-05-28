import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Book } from '../../models/Book';
import { theme } from '../../constants/theme';

interface BookItemProps {
  book: Book;
  onPress: (book: Book) => void;
  isSelected?: boolean;
}

export const BookItem: React.FC<BookItemProps> = ({ book, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={() => onPress(book)}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  selectedContainer: {
    backgroundColor: theme.colors.surface,
  },
  content: {
    flex: 1,
  },
  title: {
    ...theme.typography.h3,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  author: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
  },
});