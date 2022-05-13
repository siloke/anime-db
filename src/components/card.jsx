function Card({ cardInfo }) {
  return (
    <div className="col-md-12 col-lg-6 mb-3">
      <div className="card h-100">
        <div className="row g-0 h-100">
          <div className="col-md-4">
            <img
              src={cardInfo.images.jpg.image_url}
              alt=""
              className="img-fluid rounded-start w-100 h-100"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{cardInfo.title}</h5>
              <p className="card-text">{cardInfo.synopsis.slice(0, 187)}...</p>
              <a href={cardInfo.url} className="btn btn-primary">
                MyAnimeList
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
