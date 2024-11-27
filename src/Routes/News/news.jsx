import React from 'react';
import './News.css';
import Usercard from '../../Users/usercard';
import Womenclothes from '../Usernews/newsplaceholder';

function News() {
  return (
    <div className='news-con'>
      <h2>OUR NEWS</h2>
      <Usercard/>
      <Womenclothes/>
      
    </div>
  )
}

export default News;
