const getRandom = (max = 100, min = 1) => Math.floor(Math.random() * (max - min) + min);
export { getRandom as default };
