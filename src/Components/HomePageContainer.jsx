import { CustomLink, MovieBox, MovieCard, MovieTitle } from "./Movies.styled";

const HomePageContainer = ({collection, location}) => {
    return ( <MovieBox>
        {collection?.map((movie) => (
          <MovieCard key={movie.id}>
            <CustomLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <MovieTitle>{movie.title}</MovieTitle>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                width="300"
              />
            </CustomLink>
          </MovieCard>
        ))}
      </MovieBox> );
}
 
export default HomePageContainer;