
const url = 'http://admin.spiritpedia.xceedtech.in/index.php?r=API/getFavouriteMixers';

fetch(url, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
      },
}).then(response=>response.json())
.then(resjson=> {
    let MixerList = resjson;
    return MixerList
}).then((MixerList)=>{
  MixerNames = MixerList.map(mixer=>mixer.name),
  filterMixers = value => MixerNames.filter(
  state => state.toLowerCase().startsWith(value.toLowerCase()),
)}
)

const fetchMixers = (value) => {
  const promise = new Promise((resolve) => {
    const filteredMixers = value === ''
      ? []
      : filterMixers(value);
    setTimeout(() => resolve(filteredMixers), 400);
  });
  return promise;
};
export default fetchMixers