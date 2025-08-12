import { StyleSheet } from 'react-native';
import { colors } from '../../utils/color';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: moderateScale(22),
    color: colors.black,
  },

  loaderContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: colors.red,
    fontSize: moderateScale(10),
  },
});

export default styles;
