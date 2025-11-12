import { createBrowserRouter, RouterProvider } from 'react-router';

import {
  HomeLayoutPage_43,
  HomePage_43,
  BlogStaticPage_43,
  BlogLocalJsonPage_43,
  BlogNodePage_43,
  BookListPage_43,
  BlogSupaPage_43,
} from './pages';

import {
  T11_ErrorExamplePage_43,
  T12_UseStateBasicsPage_43,
} from './pages/tutorials';

import {
  Quiz1LayoutPage_43,
  Quiz1Page_43,
  TourStaticPage_43,
  TourStaticPage2_43,
  TourStaticPage3_43,
  TourNodePage_43,
} from './pages/quiz1';

import {
  MidtermLayoutPage_43,
  MidtermHomePage_43,
  P1_StaticPage_43,
  P2_StaticPage_43,
  P3_NodePage_43,
  P4_SupaPage_43,
} from './pages/midterm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_43 />,
    children: [
      {
        index: true,
        element: <HomePage_43 />,
      },
      {
        path: 'static_43',
        element: <BlogStaticPage_43 />,
      },
      {
        path: 'localjson_43',
        element: <BlogLocalJsonPage_43 />,
      },
      {
        path: 'node_43',
        element: <BlogNodePage_43 />,
      },
      {
        path: 'supa_43',
        element: <BlogSupaPage_43 />,
      },
      {
        path: 'booklist_43',
        element: <BookListPage_43 />,
      },
    ],
  },
  {
    path: '/tutorials',
    element: <HomeLayoutPage_43 />,
    children: [
      {
        index: true,
        element: <HomePage_43 />,
      },
      {
        path: 't11_43',
        element: <T11_ErrorExamplePage_43 />,
      },
      {
        path: 't12_43',
        element: <T12_UseStateBasicsPage_43 />,
      },
    ],
  },
  {
    path: '/quiz1',
    element: <Quiz1LayoutPage_43 />,
    children: [
      {
        index: true,
        element: <Quiz1Page_43 />,
      },
      {
        path: 'static_43',
        element: <TourStaticPage_43 />,
      },
      {
        path: 'static2_43',
        element: <TourStaticPage2_43 />,
      },
      {
        path: 'static3_43',
        element: <TourStaticPage3_43 />,
      },
      {
        path: 'node_43',
        element: <TourNodePage_43 />,
      },
    ],
  },
  {
    path: '/midterm',
    element: <MidtermLayoutPage_43 />,
    children: [
      {
        index: true,
        element: <MidtermHomePage_43 />,
      },
      {
        path: 'p1_43',
        element: <P1_StaticPage_43 />,
      },
      {
        path: 'sneakers_43',
        element: <P1_StaticPage_43 />,
      },
      {
        path: 'p2_43',
        element: <P2_StaticPage_43 />,
      },
      {
        path: 'p3_43',
        element: <P3_NodePage_43 />,
      },
      {
        path: 'p4_43',
        element: <P4_SupaPage_43 />,
      },
    ],
  },
]);

const App_43 = () => {
  return <RouterProvider router={router} />;
};

export default App_43;
