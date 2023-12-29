//restaurant card component

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId,avgRating,cuisines,areaName,sla } = props.resData;

  return (
    <div className="restaurant-card">
      <div className="card-image-container">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          className="card-img"
          alt=""
        />
      </div>
      <div className="card-content-container">
        <h2>{name}</h2>
        <div className="card-ratings">
          <div className="card-icons">
            <i className="bi bi-star-fill"></i>
           
          </div>
          <p>{avgRating}. {sla.deliveryTime}  mins</p>
        </div>
      </div>
      <div className="card-list-items">
        <ul className="cuisines">
          <li>{cuisines[0]}</li>
          <li>{cuisines[1]}</li>
          <li>{cuisines[1]}</li>
        </ul>
        <p className="area-name">{areaName}</p>
      </div>
      
    </div>
  );
};
export default RestaurantCard;
