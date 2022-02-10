import {StyleSheet} from 'react-native';
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems:'center',
    // justifyContent:'center'
  },
  greeting: {
    marginVertical: 50,
    fontSize: 21,
    fontWeight: '400',
    textAlign: 'center',
  },
  errorMessage: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color: '#e9446a',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  form: {
    marginBottom: 40,
    marginHorizontal: 20,
  },
  inputTitle: {
    color: '#8a8f9e',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: '#8a8f9e',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 16,
    color: '#161f3d',
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: '#306AF8',
    borderRadius: 4,
    height: 50,
    // paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxes: {
    height: 50,
    width: '80%',
    backgroundColor: '#23A9F7',
    justifyContent: 'center',
    marginVertical: 10,
  },
  card: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 150,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cardText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
    paddingVertical: 10,
  },
  CardHome: {
    height: 120,
    width: '95%',
    marginVertical: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardHomeText: {
    fontSize: 21,
    fontWeight: '600',
  },
  heading: {
    fontSize: 23,
    fontWeight: '700',
    marginVertical: 20,
    textAlign: 'center',
    marginHorizontal: 50,
  },
});
