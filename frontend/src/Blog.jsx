
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <header>
        <h1>John's Blog</h1>
      </header>
      <section className="blog-posts">
        <article className="blog-post">
          <h2>First Blog Post</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim ultrices lacus. Duis sodales ex quis odio porta, nec vestibulum magna tincidunt.</p>
        </article>
        <article className="blog-post">
          <h2>Second Blog Post</h2>
          <p>Etiam non nulla nulla. Sed tempus erat nec lorem varius sollicitudin. Curabitur consequat massa velit, nec finibus metus tristique vel.</p>
        </article>
        {/* Add more blog posts as needed */}
      </section>
      <footer>
        <p>&copy; 2024 John Doe</p>
      </footer>
    </div>
  );
};

export default Blog;
