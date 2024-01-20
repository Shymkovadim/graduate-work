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


export const App = () => {
  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Provider store={store} >

          <Header />
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/search" element={<SearchList />} />
          </Routes>
        </Provider>
      </QueryParamProvider>
    </BrowserRouter>
  );
}


