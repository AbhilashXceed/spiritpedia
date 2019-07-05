import SpiritList from './spiritlist';

const spiritNames = SpiritList.map(spirit=>spirit.name)
const filterSpirits = value => spiritNames.filter(
  state => state.toLowerCase().startsWith(value.toLowerCase()),
);
const fetchSpirits = (value) => {
  const promise = new Promise((resolve) => {
    const filteredSpirits = value === ''
      ? []
      : filterSpirits(value);
    setTimeout(() => resolve(filteredSpirits), 400);
  });
  return promise;
};
export default fetchSpirits