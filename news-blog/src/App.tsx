import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Header } from './components/Header';
import { Blog } from './components/Blog';
import { store } from './redux/store';
import { SearchList } from './components/SearhList';

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store} >

        <Header />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/search/:search" element={<SearchList />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}


