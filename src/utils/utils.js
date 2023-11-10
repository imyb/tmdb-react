/**
 * :root에 정의된 --vw-num-{pointName} 의 값을 리턴
 * @param {Number | String} pointName
 * @returns {Number}
 */
export const getBreakPointValue = (pointName) => {
  const rootStyle = getComputedStyle(document.documentElement);
  const vwNum = parseFloat(rootStyle.getPropertyValue(`--vw-num-${pointName}`));

  return vwNum;
};

/**
 * 분을 시와 분으로 리턴
 * @param {Number} num
 * @returns {Object}
 */
export const convertMinutesToTime = (num) => {
  const totalMinutes = num;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return {
    hours,
    minutes,
  };
};
