import React from 'react';
import HomePage from './pages/Homepage/HomePage';
import NotFound404Page from './pages/NotFoundPage/NotFound404Page';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
const routes = [
   {
    path : '/',
    exact : true,
    main: () => <HomePage />
   },
   {
    path : '/product-list',
    exact : false,
    main: () => <ProductListPage />
   },
   {
    path : '/product/add',
    exact : false,
    main: () => <ProductActionPage />
   },
   {
    path : '/product/:id/edit',
    exact : false,
    main: ({match}) => <ProductActionPage match={match} />
   },
   {
    path : '',
    exact : false,
    main: () => <NotFound404Page />
   }
];

export default routes
