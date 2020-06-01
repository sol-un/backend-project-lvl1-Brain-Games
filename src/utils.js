const getRandom = (min = 1, max = 100) => Math.floor(Math.random() * ((max + 1) - min) + min);
export { getRandom as default };
