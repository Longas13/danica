import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import Films from "./Films";
import People from "./People";
import axios from "axios";

// import "swiper/css";

import "../../node_modules/swiper/components/navigation/navigation.scss";

const Filmlist = () => {
  const [movies, setMovies] = useState([]);
  const [people, SetPeople] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const response = await axios.get("https://swapi.dev/api/films");
      setMovies([...response.data.results]);
    };

    fetchFilms();
  }, []);

  const showPeople = async (episodeId) => {
    SetPeople([]);
    const selectedMovie = movies.find(
      (movies) => movies.episode_id === episodeId
    );
    const peopleApiLinks = selectedMovie.characters;

    for (const link of peopleApiLinks) {
      const response = await axios.get(link);

      const person = {
        name: response.data.name,
        gender: response.data.gender,
        birthYear: response.data.birth_year,
        mass: response.data.mass,
      };
      SetPeople((people) => [...people, person]);
      //   console.log(person);
    }
    console.log("people", people);
  };

  return (
    <div className="movies-list">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={10}
        slidesPerView={2}
        scrollbar={{ draggable: true }}
        navigation
        pagination={{ clickable: true }}
      >
        {movies.map((movie) => (
          <SwiperSlide>
            <Films
              key={movie.episode_id}
              title={movie.title}
              date={movie.release_date}
              episodeId={movie.episode_id}
              showPeopleHandler={showPeople}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="movie-actors-list">
        <table>
          <tr>
            <th colspan="4" className="in-movie">
              People/actors in movie
            </th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Year of birth</th>
            <th>Mass (kg)</th>
          </tr>

          {people.map((person) => (
            <People
              key={person.name}
              name={person.name}
              gender={person.gender}
              birthYear={person.birth_year}
              mass={person.mass}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Filmlist;
