import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Header from './Header';
// import ListPost from './ListPost';
import ListPostAPI from './ListPostAPI';
import Contact from './Contact';
// import PostDitail from './PostDitail';
import PostDitailAPI from './PostDitailAPI';

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header/>}>
      {/* <Route path="/" element={<ListPost />} /> */}
      <Route path="/" element={<ListPostAPI />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route path="post/:postId" element={<PostDitail/>} /> */}
      <Route path="post/:postId" element={<PostDitailAPI/>} />
    </Route>
  )
);

export default App;
