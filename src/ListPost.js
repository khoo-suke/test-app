import React from "react";
import './ListPost.css';
import ListCategory from './ListCategory';

export default function ListPost({ src }) {

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
                      {elem.createdAt.substring(0, 10).replace(/-/g, '/')}
                    </div>
                    <div className="home_categories">
                      {elem.categories[0] ? <ListCategory category={elem.categories[0]} /> : null}
                      {elem.categories[1] ? <ListCategory category={elem.categories[1]} /> : null}
                    </div>
                  </div>
                  <h2>{elem.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: `${elem.content.substring(0, 60)}${elem.content.length > 60 ? '…' : ''}` }} />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </>
    )));
}