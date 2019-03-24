const format = num => {
  return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

export default {
  format
};
