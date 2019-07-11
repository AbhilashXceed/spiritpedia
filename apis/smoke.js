
const url = 'http://admin.spiritpedia.xceedtech.in/index.php?r=API/getFavouriteSmoke';

fetch(url, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
      },
}).then(response=>response.json())
.then(resjson=> {
    let SmokeList = resjson 
    return SmokeList
}).then((SmokeList)=>{
  smokeNames = SmokeList.map(smoke=>smoke.name),
  filterSmokes = value => smokeNames.filter(
  state => state.toLowerCase().startsWith(value.toLowerCase()),
)}
)

const fetchSmokes = (value) => {
  const promise = new Promise((resolve) => {
    const filteredSmokes = value === ''
      ? []
      : filterSmokes(value);
    setTimeout(() => resolve(filteredSmokes), 400);
  });
  return promise;
};
export default fetchSmokes