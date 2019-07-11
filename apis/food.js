
const url = 'http://admin.spiritpedia.xceedtech.in/index.php?r=API/getFavouriteFood';

fetch(url, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
      },
}).then(response=>response.json())
.then(resjson=> {
    let FoodList = resjson 
    return FoodList
}).then((FoodList)=>{
  foodNames = FoodList.map(food=>food.name),
  filterFood = value => foodNames.filter(
  state => state.toLowerCase().startsWith(value.toLowerCase()),
)}
)

const fetchFoods = (value) => {
  const promise = new Promise((resolve) => {
    const filteredFood = value === ''
      ? []
      : filterFood(value);
    setTimeout(() => resolve(filteredFood), 400);
  });
  return promise;
};
export default fetchFoods