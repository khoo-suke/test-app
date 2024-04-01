import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Header from './Header';
import ListPost from './ListPost';
import Contact from './Contact';
import PostDitail from './PostDitail';

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header/>}>
      <Route path="/" element={<ListPost />} />
      <Route path="contact" element={<Contact />} />
      <Route path="post/:postId" element={<PostDitail/>} />
    </Route>
  )
);

export default App;
