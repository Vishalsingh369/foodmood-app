import { item_URL } from "../utils/constants";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items,dummy }) => {
  console.log(dummy);
  return (
    <div>
      {items.map((items) => (
        <div
          key={items.card.info.id}
          className="p-2 m-2 border-gray-200 text-left flex border-b-2 justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{items.card.info.name}</span>
              <span>
                {" "}
                - Rs.
                {items.card.info.price
                  ? items.card.info.price / 100
                  : items.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{items.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 bg-black shadow-lg text-white mx-16 rounded-lg">
                Add +
              </button>
            </div>
            <img src={CDN_URL + items.card.info.imageId} className="w-full h-32 object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
