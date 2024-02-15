import Snackbar from "react-native-snackbar";

const snackBar = (txt, color = '#000') => {
  Snackbar.show({
    text: txt,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: color,
    numberOfLines: 50,
  });
};

export { snackBar };
