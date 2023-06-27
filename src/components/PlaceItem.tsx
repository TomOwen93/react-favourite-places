export interface PlaceProps {
  title: string;
  placeName: string;
  countryName: string;
  mainImage?: string;
  mapLocation?: string;
  explanation: string;
}

function PlaceItem({
  title,
  placeName,
  countryName,
  mainImage,
  mapLocation,
  explanation,
}: PlaceProps): JSX.Element {
  return (
    <div className="placeStyle">
      <h1 className="placeTitle">{title}</h1>
      <h2 className="countryTitle">
        {placeName} - {countryName}
      </h2>
      <img className="placeImage" src={mainImage} alt={placeName}></img>
      <p>
        <strong>Reason:</strong> {explanation}
      </p>
    </div>
  );
}

export default PlaceItem

