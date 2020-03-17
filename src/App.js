import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Provider } from 'react-redux'
import store from './store'
import Quantity from './components/quantity'
import Buy from './components/buy'
import Search from './components/search'
import ResultSearch from './components/resultSearch'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <div className='row'>
          <div className='col-12'>
            <div className='card mt-5' style={{ maxWidth: '370px' }}>
              <div className='row no-gutters'>
                <div className='col-4'>
                  <img
                    src={require('./images/pokemon.png')}
                    alt='pokemon'
                    className='card-img'
                  ></img>
                </div>
                <div className='col-8'>
                  <div className='card-body'>
                    <div className='card-title h3 text-center'>
                      <Quantity />
                    </div>
                    <Buy />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 mt-4 border-top pt-3'>
            <Search />
          </div>
          <div className='col-12'>
            <ResultSearch />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App
