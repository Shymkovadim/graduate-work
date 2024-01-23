import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Header } from './components/Header';
import { Blog } from './components/Blog';
import { store } from './redux/store';
import { SearchList } from './components/SearhList';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { ArticlPage } from './components/ArticlPage';
import { CreateArticle } from './components/CreateArticl';


export const App = () => {
  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Provider store={store} >

          <Header />
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/:id" element={<ArticlPage />} />
            <Route path="/search" element={<SearchList />} />
            <Route path="/create" element={<CreateArticle />} />
          </Routes>
        </Provider>
      </QueryParamProvider>
    </BrowserRouter>
  );
}


