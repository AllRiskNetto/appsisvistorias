import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  page: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 300,
  },
  divider: {
    borderWidth: 0.5,
    width: 300,
    marginTop: 10,
    borderColor: '#d9d9d9',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 14,
    borderRadius: 10,
    fontFamily: 'Roboto_400Regular',
  },
  label: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 15,
    marginTop: 10,
  },
  loadingBody: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
    margin: 16,
    textAlign: 'center',
  },
  main: {
    flex: 0.5,
    justifyContent: 'center',
  },
  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
  footer: {},
  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 15,
    marginTop: 10,
    color: '#0d47a1',
  },
});

export default style;
