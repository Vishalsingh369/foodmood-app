import ResList from "./ResList";
import ResCard from "./ResCard";
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search Bar</div>
        <div className="res-container">
          {ResList.map((restaurant) => (
            <ResCard key={restaurant.info.id}resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;