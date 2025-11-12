import { useState, useEffect } from 'react';

// import blogData_43 from '../assets/data/blogData.json';
import Blog_43 from '../components/Blog_43';

const api_url = 'http://localhost:5000/api/blog_43';

const BlogNodePage_43 = () => {
  const [name, setName] = useState('htchung');
  const [id, setId] = useState(123456789);
  const [blogs_43, setBlogs_43] = useState([]);

  const fetchBlogFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('blogs', data);
      setBlogs_43(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogFromNodeServer();
  }, []);

  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from Node -- {name}, {id}{' '}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_43.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog_43
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BlogNodePage_43;
