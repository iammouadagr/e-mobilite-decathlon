import { recommendedItemsList } from "../stores/recommendedItemsList";
export const fetchSuggestions = (currentItem, items) => {

    let distance = 0;
    const recommendedItems = [];



    for(const item of items){

        if (item.id != currentItem.id) {

            for (const key of Object.keys(currentItem.profiles)) {
               
                distance += Math.pow(currentItem.profiles[key] - item.profiles[key], 2);
                
            }
            
            distance = Math.sqrt(distance);
            recommendedItems.push({item: item, distance: distance});
            distance = 0;
        }


        
    }

    recommendedItems.sort((x, y) => x.distance - y.distance);    
    console.log("----- Recommendation ------");
    recommendedItems.forEach(element => console.log(element.item));
    recommendedItemsList.update(recommendedItemsList => recommendedItems);
    return recommendedItems

}