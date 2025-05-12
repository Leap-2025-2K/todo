export const Filter = ({ setFilter }) => {
  const filterOptions = ["all", "completed", "active"];
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {filterOptions.map((filter, index) => (
        <div key={index}>
          <button onClick={() => setFilter(filter)}>{filter}</button>
        </div>
      ))}
    </div>
  );
};
