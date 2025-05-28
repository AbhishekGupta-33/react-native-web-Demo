import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Container} from '../components/layout/Container';
import {Button} from '../components/common/Button';
import {Book} from '../models/Book';
import {theme} from '../constants/theme';
import {strings} from '../constants/strings';
import {isWeb} from '../utils/platform';
import {useRoute} from '@react-navigation/native';
import {useBookViewModel} from '../viewmodels/BookViewModel';



const BookDetailScreen = () => {

  const {selectedBook, selectBook} = useBookViewModel();
  const route = useRoute();

  useEffect(() => {
    const bookId = route.params?.bookId;
    
    if (bookId) {
      selectBook(bookId);
    }
  }, []);

  if (!selectedBook) {
    return (
      <Container style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Select a book to view details</Text>
      </Container>
    );
  }

  return (
    <Container>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>{selectedBook?.title}</Text>

        <View style={styles.section}>
          <Text style={styles.label}>{strings.authorLabel}</Text>
          <Text style={styles.author}>{selectedBook?.author}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>{strings.summaryLabel}</Text>
          <Text style={styles.summary}>{selectedBook?.summary}</Text>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
  },
  header: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.md,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text,
    marginVertical: theme.spacing.lg,
  },
  section: {
    marginBottom: theme.spacing.lg,
  },
  label: {
    ...theme.typography.h3,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  author: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
  },
  summary: {
    ...theme.typography.body,
    color: theme.colors.text,
    lineHeight: 24,
  },
});

export default BookDetailScreen;
