import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
      <div className="widgets__article">
          <div className="widgets__articleLeft">
              <FiberManualRecord />
          </div>
          <div className="widgets__articleRight">
              <h4>{heading}</h4>
              <p>{subtitle}</p>
          </div>
      </div>  
    );

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            {newsArticle('SavaGold Developer', 'Top news - 99999 readers')}
            {newsArticle('Corona-19', 'How to die in 2021?')}
            {newsArticle('Tesla car', 'Top cars - 99998 readers')}
            {newsArticle('Developer', 'Top news - 99999 readers')}
            {newsArticle('SavaGold ', 'Top news - 99999 readers')}
            {newsArticle('Car', 'Top news - 99999 readers')}
            {newsArticle('Money', 'Business - 1 reader')}
        </div>
    )
}

export default Widgets;
