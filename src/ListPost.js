import React from "react";
import './ListPost.css';
import ListCategory from './ListCategory';

export default function ListPost({ src }) {
  // const dateOnly = posts.filter(post => post.createdAt );

  return (
    src.map(elem => (
      <>
        <div className="home_container">
          <ul>
            <li>
              <a href="index.js">
                <div className="home_inner">
                  <div className="home_info">
                    <div className="home_date">
                      {elem.createdAt}
                    </div>
                    <div className="home_categories">
                      {elem.categories[0] ? <ListCategory category={elem.categories[0]} /> : null}
                      {elem.categories[1] ? <ListCategory category={elem.categories[1]} /> : null}
                    </div>
                  </div>
                  <h2>{elem.title}</h2>
                  <p>{elem.content}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </>
    )));
}