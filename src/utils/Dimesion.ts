import { scale, verticalScale } from 'react-native-size-matters';

const ResponsiveHeight = (value: number) => verticalScale(value);
const ResponsiveWidth = (value: number) => scale(value);

export { ResponsiveHeight, ResponsiveWidth };
