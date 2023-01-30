import { StyleSheet } from 'react-native/';

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 40,
  },

  titleContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 8
  },
  subtitle: {
    fontSize: 16,
  },
  color: {
    color: '#f3f3f3',
    fontFamily: 'Roboto',
  },
});

export default styles;
