// import React from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { Container } from '../components/layout/Container';
// import { BookItem } from '../components/common/BookItem';
// import { useBookViewModel } from '../viewmodels/BookViewModel';
// import { Book } from '../models/Book';
// import { theme } from '../constants/theme';
// import { strings } from '../constants/strings';
// import { isWeb } from '../utils/platform';

// interface BookListScreenProps {
//   onBookSelect: (book: Book) => void;
//   selectedBookId?: string;
// }

// export const BookListScreen: React.FC<BookListScreenProps> = ({
//   onBookSelect,
//   selectedBookId,
// }) => {
//   const { selectBook, books } = useBookViewModel();

//   const handleBookPress = (book: Book) => {
//     selectBook(book.id).then(() => {
//       onBookSelect(book);
//     });
//   };

//   const renderBookItem = ({ item }: { item: Book }) => (
//     <BookItem
//       book={item}
//       onPress={handleBookPress}
//       isSelected={isWeb && item.id === selectedBookId}
//     />
//   );

//   return (
//     <Container>
//       <View style={styles.header}>
//         <Text style={styles.title}>{strings.bookListTitle}</Text>
//       </View>
      
//       <FlatList
//         data={books}
//         renderItem={renderBookItem}
//         keyExtractor={(item) => item.id}
//         style={styles.list}
//       />
//     </Container>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     paddingHorizontal: theme.spacing.md,
//     paddingVertical: theme.spacing.md,
//     borderBottomWidth: 1,
//     borderBottomColor: theme.colors.border,
//   },
//   title: {
//     ...theme.typography.h2,
//     color: theme.colors.text,
//   },
//   list: {
//     flex: 1,
//   },
// });

import React from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet, Platform } from 'react-native';
import { Book } from '../models/Book';
import { useBookViewModel } from '../viewmodels/BookViewModel';
import { useNavigation } from '@react-navigation/native';

const BookListScreen = () => {
  const { books, selectedBook, selectBook  } = useBookViewModel();
  const navigation = useNavigation();

  const handleBookPress = (book: Book) => {
    if (Platform.OS === 'web') {
      selectBook(book.id); // show details on right side
    } else {
      navigation.navigate('BookDetails', { bookId: book.id }); // navigate to detail screen
    }
  };

  const renderBookItem = ({ item }: { item: Book }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleBookPress(item)}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={item => item.id}
        renderItem={renderBookItem}
        style={styles.list}
      />

      {Platform.OS === 'web' && selectedBook && (
        <View style={styles.detailPanel}>
          <Text style={styles.detailTitle}>{selectedBook.title}</Text>
          <Text style={styles.detailAuthor}>by {selectedBook.author}</Text>
          <Text style={styles.detailSummary}>{selectedBook.summary}</Text>
        </View>
      )}
    </View>
  );
};

export default BookListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    padding: 16,
  },
  list: {
    flex: 1,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  detailPanel: {
    flex: 1,
    padding: 16,
    marginLeft: 16,
    backgroundColor: '#f9f9f9',
    borderLeftWidth: 1,
    borderColor: '#ccc',
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailAuthor: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 8,
  },
  detailSummary: {
    fontSize: 14,
    color: '#333',
  },
});
