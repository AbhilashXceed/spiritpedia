
const url = 'http://admin.spiritpedia.xceedtech.in/index.php?r=API/getFavouriteMusic';

fetch(url, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
      },
}).then(response=>response.json())
.then(resjson=> {
    let MusicList = resjson 
    return MusicList
}).then((MusicList)=>{
  musicNames = MusicList.map(music=>music.name),
  filterMusics = value => musicNames.filter(
  state => state.toLowerCase().startsWith(value.toLowerCase()),
)}
)

const fetchMusics = (value) => {
  const promise = new Promise((resolve) => {
    const filterdMusic = value === ''
      ? []
      : filterMusics(value);
    setTimeout(() => resolve(filterdMusic), 400);
  });
  return promise;
};
export default fetchMusics