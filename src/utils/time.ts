//封装一个函数，判断是早上还是下午还是晚上
export const getTime = () => {
  let hour = new Date().getHours()
  if (hour >= 6 && hour < 12) {
    return '早上好'
  } else if (hour >= 12 && hour < 18) {
    return '下午好'
  } else {
    return '晚上好'
  }
}
