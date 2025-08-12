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
  separator: {
    height: 1,
    backgroundColor: colors.offWhite,
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
});

export default styles;
