function Pagination({ totalItems, animePerPage, togglePage }) {
  const pageItems = [];

  for (let i = 1; i <= Math.ceil(totalItems / animePerPage); i++) {
    pageItems.push(i);
  }

  return (
    <nav className="mt-2">
      <ul className="pagination">
        {pageItems.map((item) => (
          <li className="page-item" key={item}>
            <a className="page-link" href="#" onClick={() => togglePage(item)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
