function SuggListItem({ place, setEntry }) {
  const handleSelect = () => {
    setEntry(place);
  };
  return (
    <div className="suggs__item" onClick={handleSelect}>
      {place.name}
    </div>
  );
}
export default SuggListItem;
