import { useState } from 'react';

import blogData_43 from '../assets/data/blogData.json';
import Blog_43 from '../components/Blog_43';

const BlogLocalJsonPage_43 = () => {
  const [name, setName] = useState('htchung');
  const [id, setId] = useState(123456789);
  const [blogs_43, setBlogs_43] = useState(blogData_43);
  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from local json -- {name}, {id}{' '}
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

export default BlogLocalJsonPage_43;
