import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blogs.css';

const BlogCard = ({ imgSrc, author, date, title, subtitle, description, tags }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="row no-gutters">
        <div className="col-md-4">
          <div
            className="blog-card-photo"
            style={{ backgroundImage: `url(${imgSrc})` }}
          ></div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">{title}</h1>
            <h2 className="card-subtitle mb-2 text-muted">{subtitle}</h2>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By <a href="#">{author}</a> on {date}</small></p>
            <ul className="list-inline">
              {tags.map((tag, index) => (
                <li key={index} className="list-inline-item badge bg-secondary text-dark me-1">{tag}</li>
              ))}
            </ul>
            <p className="card-text text-end">
              <a href="#" className="btn btn-primary">Read More</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <div className='blogs' id='blogs'>
        <h3>Blogs</h3>
        <h2 className="text-center mb-5">Believe in yourself;<br />knowledge is the greatest weapon.</h2>
<div className="container py-5">
      <BlogCard
        imgSrc="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg"
        author="John Doe"
        date="Aug. 24, 2015"
        title="Learning to Code"
        subtitle="Opening a door to the future"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
        tags={['Learn', 'Code', 'HTML', 'CSS']}
      />
      <BlogCard
        imgSrc="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg"
        author="Jane Doe"
        date="July. 15, 2015"
        title="Mastering the Language"
        subtitle="Java is not the same as JavaScript"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
        tags={['Learn', 'Code', 'JavaScript']}
      />
    </div>
    </div>
    
  );
};

export default Blogs;