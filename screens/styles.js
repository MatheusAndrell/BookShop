import { StyleSheet } from 'react-native';

const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#1e1e2a',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    height: 40,
    alignItems: 'center',
    width: 40,
    padding: 8,
    backgroundColor: '#2a2a38',
    borderRadius: 8,
  },
  title: {
    marginTop: 50,
    fontSize: 24, 
    marginBottom: 16,
    textAlign: 'left',
    color: 'white',
  },
  titleBook: {
    marginTop: 200,
    fontSize: 24, 
    marginBottom: 16,
    textAlign: 'left',
    color: 'white',
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 16,
    textAlign: 'left',
    color: 'gray',
  },
  subtitleGet: {
    fontSize: 15,
    marginBottom: 16,
    textAlign: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    color: 'gray',
  },
  inputContainer: {
    backgroundColor: '#2b2b39',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  inputLabel: {
    color: 'white',
    marginBottom: 5,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#3535419c',
    height: 45,
    color: 'white',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    color: 'white',
  },
  forgetPassword: {
    color: '#b51a28',
  },
  buttonLogin: {
    marginTop: 16,
    borderRadius: 6,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: '#b51a28',
  },
  loginButtonLabel: {
    color: 'white',
  },
  buttonRegister: {
    marginTop: 16,
    backgroundColor: 'transparent',
  },
  registerButtonLabel: {
    color: '#b51a28',
  },
});

const loginStyles = StyleSheet.create({
  // Add specific styles for LoginScreen if necessary
});

const registerStyles = StyleSheet.create({
  // Add specific styles for RegisterScreen if necessary
});

export { sharedStyles, loginStyles, registerStyles };
