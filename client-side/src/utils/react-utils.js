import { WHITE_SPACE } from "../constants/constants";

const getClassName = (classNamesMap) =>
  Object.keys(classNamesMap)
    .filter((className) => classNamesMap[className])
    .join(WHITE_SPACE)
    .trim();

export { getClassName };
