import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './modules/users/pages/NotFoundPage/NotFoundPage';
import HomePage from './modules/users/pages/HomePage/HomePage';
import UsersModule from './modules/users/UsersModule';
import ImageFull from './modules/imageFull/ImageFull';
import Navigation from './modules/common/components/Navigation';
import { deletePhoto, deleteList } from './store/actions/actions';
import useTableInfo from './hooks/useTableInfo';
import { connect } from 'react-redux';


function App() {

  const { tableInfo, addNewData, onDeleteItem } = useTableInfo();

  return (
      <Router>
        <div className="App">
          <Navigation/>
          <Switch>
            <Route path="/" exact>
              <HomePage/>
            </Route>
            <Route path={'/users'}>
              <UsersModule onDelete={deletePhoto} tableInfo={tableInfo} onDeleteItem={onDeleteItem} addNewData={addNewData}/>
            </Route>
            <Route path={'/imageFull'}>
              <ImageFull/>
            </Route>
            <Route path="/notfound">
              <NotFoundPage />
            </Route>
            <Route path="*" exact>
              <Redirect to="/notfound"/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function mapStateToProps({tableList}) {
  return {
    tableList,
  }
}

const mapDispatchToProps = {
  onDeleteItem: deleteList
};

export default connect(mapStateToProps, mapDispatchToProps)(App);




