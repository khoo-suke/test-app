import { createBrowserRouter } from 'react-router-dom';
import ListPost from './ListPost';
import Contact from './Contact';
import PostDitail from './PostDitail';

const App = createBrowserRouter([
  { path: '/', element: <ListPost /> },
  { path: '/contact', element: <Contact /> },
  { path: '/post/:postId' , element: <PostDitail /> },
]);

export default App;
