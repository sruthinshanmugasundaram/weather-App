import React from 'react';
import styled from 'styled-components';

const movies = [
  {
    title: "Naruto",
    image: "https://c4.wallpaperflare.com/wallpaper/854/243/605/naruto-the-film-naruto-uzumaki-naruto-wallpaper-preview.jpg",
    description: "The latest opus in the acclaimed STORM series is taking you on a colourful and breathtaking ride. Take advantage of the totally revamped battle system and prepare to dive into the most epic fights you’ve ever seen"
  },
  {
    title: "Inception",
    image: "https://c4.wallpaperflare.com/wallpaper/574/531/642/2010-inception-movie-inception-poster-wallpaper-preview.jpg",
    description: "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas."
  },
  {
    title: "The Shawshank Redemption",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*ZuyHle2wBnM1MY0xkIa9hA.jpeg",
    description: "The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption."
  },
  {
    title: "The Godfather",
    image: "https://th-thumbnailer.cdn-si-edu.com/q4pSR0jGcmWxCfMfiSUFB4uqaMY=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/The-Godfather-Effect-Don-Vito-631.jpg",
    description: "The Godfather is a 1972 American crime film directed by Francis Ford Coppola and produced by Albert S. Ruddy, based on the 1969 novel of the same name by Mario Puzo."
  },
  {
    title: "The Dark Knight",
    image: "https://m.media-amazon.com/images/S/pv-target-images/fd2a62ebf8534a10465dfc63ea11635bd42ed1692ad3af11d5e83ab553e3d0ae.jpg",
    description: "The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy."
  },
  {
    title: "Pulp Fiction",
    image: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/04d2059a-0056-4693-93cd-5fd1b7b02d4e/394696225b571c335b42a7a9329992b5f33ba8fb.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom",
    description: "Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Ving Rhames, and Uma Thurman."
  },
  {
    title: "Forrest Gump",
    image: "https://www.koimoi.com/wp-content/new-galleries/2022/08/did-you-know-tom-hanks-had-to-fund-a-certain-portion-of-the-forrest-gump-01.jpg",
    description: "Forrest Gump is a 1994 American epic romantic comedy-drama film directed by Robert Zemeckis and written by Eric Roth. It is based on the 1986 novel of the same name by Winston Groom and stars Tom Hanks, Robin Wright."
  },
  {
    title: "The Shawshank Redemption",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*ZuyHle2wBnM1MY0xkIa9hA.jpeg",
    description: "The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption."
  },
  {
    title: "The Godfather",
    image: "https://th-thumbnailer.cdn-si-edu.com/q4pSR0jGcmWxCfMfiSUFB4uqaMY=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/The-Godfather-Effect-Don-Vito-631.jpg",
    description: "The Godfather is a 1972 American crime film directed by Francis Ford Coppola and produced by Albert S. Ruddy, based on the 1969 novel of the same name by Mario Puzo."
  },
  {
    title: "The Dark Knight",
    image: "https://m.media-amazon.com/images/S/pv-target-images/fd2a62ebf8534a10465dfc63ea11635bd42ed1692ad3af11d5e83ab553e3d0ae.jpg",
    description: "The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy."
  },
  {
    title: "Pulp Fiction",
    image: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/04d2059a-0056-4693-93cd-5fd1b7b02d4e/394696225b571c335b42a7a9329992b5f33ba8fb.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom",
    description: "Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Ving Rhames, and Uma Thurman."
  },
  {
    title: "Forrest Gump",
    image: "https://www.koimoi.com/wp-content/new-galleries/2022/08/did-you-know-tom-hanks-had-to-fund-a-certain-portion-of-the-forrest-gump-01.jpg",
    description: "Forrest Gump is a 1994 American epic romantic comedy-drama film directed by Robert Zemeckis and written by Eric Roth. It is based on the 1986 novel of the same name by Winston Groom and stars Tom Hanks, Robin Wright."
  },
  {
    title: "Naruto",
    image: "https://c4.wallpaperflare.com/wallpaper/854/243/605/naruto-the-film-naruto-uzumaki-naruto-wallpaper-preview.jpg",
    description: "The latest opus in the acclaimed STORM series is taking you on a colourful and breathtaking ride. Take advantage of the totally revamped battle system and prepare to dive into the most epic fights you’ve ever seen"
  },
  {
    title: "Inception",
    image: "https://c4.wallpaperflare.com/wallpaper/574/531/642/2010-inception-movie-inception-poster-wallpaper-preview.jpg",
    description: "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas."
  },
  {
    title: "The Godfather",
    image: "https://th-thumbnailer.cdn-si-edu.com/q4pSR0jGcmWxCfMfiSUFB4uqaMY=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/The-Godfather-Effect-Don-Vito-631.jpg",
    description: "The Godfather is a 1972 American crime film directed by Francis Ford Coppola and produced by Albert S. Ruddy, based on the 1969 novel of the same name by Mario Puzo."
  },
  {
    title: "The Shawshank Redemption",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*ZuyHle2wBnM1MY0xkIa9hA.jpeg",
    description: "The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption."
  },
  {
    title: "The Dark Knight",
    image: "https://m.media-amazon.com/images/S/pv-target-images/fd2a62ebf8534a10465dfc63ea11635bd42ed1692ad3af11d5e83ab553e3d0ae.jpg",
    description: "The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy."
  },
  {
    title: "Forrest Gump",
    image: "https://www.koimoi.com/wp-content/new-galleries/2022/08/did-you-know-tom-hanks-had-to-fund-a-certain-portion-of-the-forrest-gump-01.jpg",
    description: "Forrest Gump is a 1994 American epic romantic comedy-drama film directed by Robert Zemeckis and written by Eric Roth. It is based on the 1986 novel of the same name by Winston Groom and stars Tom Hanks, Robin Wright."
  },
  {
    title: "Naruto",
    image: "https://c4.wallpaperflare.com/wallpaper/854/243/605/naruto-the-film-naruto-uzumaki-naruto-wallpaper-preview.jpg",
    description: "The latest opus in the acclaimed STORM series is taking you on a colourful and breathtaking ride. Take advantage of the totally revamped battle system and prepare to dive into the most epic fights you’ve ever seen"
  },
  {
    title: "Inception",
    image: "https://c4.wallpaperflare.com/wallpaper/574/531/642/2010-inception-movie-inception-poster-wallpaper-preview.jpg",
    description: "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas."
  },
  {
    title: "Pulp Fiction",
    image: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/04d2059a-0056-4693-93cd-5fd1b7b02d4e/394696225b571c335b42a7a9329992b5f33ba8fb.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom",
    description: "Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Ving Rhames, and Uma Thurman."
  },
  {
    title: "Pulp Fiction",
    image: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/04d2059a-0056-4693-93cd-5fd1b7b02d4e/394696225b571c335b42a7a9329992b5f33ba8fb.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom",
    description: "Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Ving Rhames, and Uma Thurman."
  },
  {
    title: "Inception",
    image: "https://c4.wallpaperflare.com/wallpaper/574/531/642/2010-inception-movie-inception-poster-wallpaper-preview.jpg",
    description: "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas."
  },
  {
    title: "Naruto",
    image: "https://c4.wallpaperflare.com/wallpaper/854/243/605/naruto-the-film-naruto-uzumaki-naruto-wallpaper-preview.jpg",
    description: "The latest opus in the acclaimed STORM series is taking you on a colourful and breathtaking ride. Take advantage of the totally revamped battle system and prepare to dive into the most epic fights you’ve ever seen"
  },
  {
    title: "Forrest Gump",
    image: "https://www.koimoi.com/wp-content/new-galleries/2022/08/did-you-know-tom-hanks-had-to-fund-a-certain-portion-of-the-forrest-gump-01.jpg",
    description: "Forrest Gump is a 1994 American epic romantic comedy-drama film directed by Robert Zemeckis and written by Eric Roth. It is based on the 1986 novel of the same name by Winston Groom and stars Tom Hanks, Robin Wright."
  },
  {
    title: "The Dark Knight",
    image: "https://m.media-amazon.com/images/S/pv-target-images/fd2a62ebf8534a10465dfc63ea11635bd42ed1692ad3af11d5e83ab553e3d0ae.jpg",
    description: "The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy."
  },
  {
    title: "The Shawshank Redemption",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*ZuyHle2wBnM1MY0xkIa9hA.jpeg",
    description: "The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption."
  },
  {
    title: "The Godfather",
    image: "https://th-thumbnailer.cdn-si-edu.com/q4pSR0jGcmWxCfMfiSUFB4uqaMY=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/The-Godfather-Effect-Don-Vito-631.jpg",
    description: "The Godfather is a 1972 American crime film directed by Francis Ford Coppola and produced by Albert S. Ruddy, based on the 1969 novel of the same name by Mario Puzo."
  }
];

const MoviePage = () => {
  return (
    <MoviePageContainer>
      <h2>Movies</h2>
      <MoviesContainer>
        {movies.map((movie, index) => (
          <MovieCard key={index}>
           <img src={movie.image} alt={movie.title} width="150px" height="150px" />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>
          </MovieCard>
        ))}
      </MoviesContainer>
    </MoviePageContainer>
  );
};

const MoviePageContainer = styled.div`
  padding: 20px;
`;

const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const MovieCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
  }

  .movie-info {
    padding: 10px;

    h3 {
      margin-top: 0;
      font-size: 18px;
    }

    p {
      margin: 0;
      font-size: 14px;
    }
  }
`;

export default MoviePage;
