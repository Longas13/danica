const Films = (props) => {
  const { title, date, episodeId, showPeopleHandler } = props;

  return (
    <div className="movie-preview" key={episodeId}>
      <div className="movie-info">
        <div className="movie-title">{title}</div>
        <div className="movie-episode">
          <span className="text">Episode</span>
          <span className="episode-number">{episodeId}</span>
        </div>
      </div>
      <div className="movie-release_date">
        <span>Release date: </span>
        {date}
      </div>
      <div className="movie-actors">
        <span onClick={() => showPeopleHandler(episodeId)}>Show actors {">>>"}</span>
      </div>
    </div>
  );
};

export default Films;
