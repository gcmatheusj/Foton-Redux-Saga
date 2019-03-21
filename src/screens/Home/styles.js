import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffdd0d',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 30,
  },

  title: {
    textAlign: 'center',
    color: '#2C2605',
    fontSize: 24,
    fontWeight: 'bold',
  },

  subtitle: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 15,
    color: '#2C2605',
    lineHeight: 21,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 20,
    height: 52,
    fontSize: 16,
    color: '#333',
  },

  button: {
    backgroundColor: '#42a5f5',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
