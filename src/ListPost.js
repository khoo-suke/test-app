import { useEffect, useState } from "react";
import './ListPost.css';
import { Link, Outlet } from 'react-router-dom';

export default function ListPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
      const data = await res.json()
      setPosts(data.posts)
    }

    fetcher()
  }, []);

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
                        <p key={category}>{category}</p>
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