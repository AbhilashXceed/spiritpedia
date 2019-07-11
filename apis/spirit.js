
const url = 'http://admin.spiritpedia.xceedtech.in/index.php?r=API/getFavouriteSpirit';

fetch(url, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
      },
}).then(response=>response.json())
.then(resjson=> {
    let SpiritList = resjson 
    return SpiritList
}).then((SpiritList)=>{
  spiritNames = SpiritList.map(spirit=>spirit.name),
  filterSpirits = value => spiritNames.filter(
  state => state.toLowerCase().startsWith(value.toLowerCase()),
)}
)

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