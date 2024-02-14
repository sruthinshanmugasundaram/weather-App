import React from 'react';

const TvShow = ({ title, description, genre, rating, imageUrl }) => {
  return (
    <div className="tv-show" style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{description}</p>
      <p style={styles.genre}>Genre: {genre}</p>
      <p style={styles.rating}>Rating: {rating}</p>
      <img src={imageUrl} alt="TV Show" style={styles.image} />
      <button style={styles.button}>Watch Now</button>
    </div>
  );
};

const TvShowList = () => {
  // Array of TV show data
  const tvShows = [
    {
      title: 'Breaking Bad',
      description: 'A high school chemistry teacher turned methamphetamine manufacturer.',
      genre: 'Crime, Drama, Thriller',
      rating: '9.5/10',
      imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/poster/k/v/f/medium-andph289-ananyadesigns-breaking-bad-wall-poster-original-imae8afzjpggwncy.jpeg?q=20&crop=false',
    },
    {
      title: 'Friends',
      description: 'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
      genre: 'Comedy, Romance',
      rating: '8.9/10',
      imageUrl: 'https://www.themoviedb.org/t/p/original/f496cm9enuEsZkSPzCwnTESEK5s.jpg',
    },
    {
      title: 'Stranger Things',
      description: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.',
      genre: 'Drama, Fantasy, Horror',
      rating: '8.7/10',
      imageUrl: 'https://www.themoviedb.org/t/p/original/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
    },
    {
      title: 'Game of Thrones',
      description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
      genre: 'Action, Adventure, Drama',
      rating: '9.3/10',
      imageUrl: 'https://www.themoviedb.org/t/p/original/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg',
    },
    {
      title: 'The Office',
      description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
      genre: 'Comedy',
      rating: '8.9/10',
      imageUrl: 'https://www.tallengestore.com/cdn/shop/products/636110477960532720-1058440242_wp_office_cast_1920_bd967e75-1603-4f8e-85c7-cb144ca6a2bf_large.jpg?v=1570155292',
    },
    {
      title: 'TV Show 1',
      description: 'Description for TV Show 1',
      genre: 'Drama',
      rating: '8.5/10',
      imageUrl: 'https://bharatstories.com/wp-content/uploads/2018/11/Top-7-Indian-Tv-Serials.jpg',
    },
    {
      title: 'TV Show 2',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
    {
      title: 'TV Show 3',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://edtimes.in/wp-content/uploads/2022/02/Untitled-design-18.jpg',
    },
    {
      title: 'TV Show 4',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
    {
      title: 'TV Show 5',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
    {
      title: 'TV Show 6',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
    {
      title: 'TV Show 7',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
    {
      title: 'TV Show 8',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
    {
      title: 'TV Show 9',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
    {
      title: 'TV Show 10',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
    {
      title: 'TV Show 11',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
    {
      title: 'TV Show 12',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
    {
      title: 'TV Show 13',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
    {
      title: 'TV Show 14',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
    {
      title: 'TV Show 15',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
    {
      title: 'TV Show 16',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
    {
      title: 'TV Show 17',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
    {
      title: 'TV Show 18',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
    {
      title: 'TV Show 19',
      description: 'Description for TV Show 2',
      genre: 'Comedy',
      rating: '7.9/10',
      imageUrl: 'https://showtimelive.co.uk/wp-content/uploads/2020/08/Hindi-Television-Serials.jpg',
    },
  ];

  return (
    <div style={styles.tvShowList}>
      {tvShows.map((show, index) => (
        <TvShow
          key={index}
          title={show.title}
          description={show.description}
          genre={show.genre}
          rating={show.rating}
          imageUrl={show.imageUrl}
        />
      ))}
    </div>
  );
};

export default TvShowList;

const styles = {
  tvShowList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow items to wrap to the next line
    justifyContent: 'space-between', // Space between TV shows
  },
  container: {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  genre: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  rating: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
