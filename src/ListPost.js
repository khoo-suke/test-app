import React from "react";
import './ListPost.css';
import { posts } from "./data/posts";
import ListCategory from './ListCategory';
import { Link, Outlet } from 'react-router-dom';

export default function ListPost() {

  return (
  posts.map(elem => (
    <>
      <div className="home_container" key={elem.id}>
        <ul>
          <li>
            <Link to={`post/${elem.id}`}>
              <div className="home_inner">
                <div className="home_info">
                  <div className="home_date">
                    {elem.createdAt.substring(0, 10).replace(/-/g, '/')}
                  </div>
                  <div className="home_categories">
                    {elem.categories.map(category => (
                      <ListCategory key={category} category={category}/>
                    ))}
                  </div>
                </div>
                <h2>{elem.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: `${elem.content.substring(0, 60)}${elem.content.length > 60 ? '…' : ''}` }} />
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet/>
    </>
  )));
}