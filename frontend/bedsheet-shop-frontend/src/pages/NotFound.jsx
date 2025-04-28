import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default NotFound;
