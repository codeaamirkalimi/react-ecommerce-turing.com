function App() {
  const categories = [
    {
      id: 1,
      title: "Jackets",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Jackets",
    },
    {
      id: 4,
      title: "Jackets",
    },
    {
      id: 5,
      title: "Jackets",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => {
        const { id, title } = category;
        return (
          <div className="category-container" key={id}>
            {/*<img/>*/}
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
