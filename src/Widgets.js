import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import { FiberManualRecord } from '@mui/icons-material';

function Widget() {
  const newsArticle = (heading,subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecord className='materialuiIcon'/>
      </div>

      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className="widgets">
       <div className="widgets_header">
         <h2>LinkedIn News</h2>
         <InfoIcon/>
       </div>
       {newsArticle("King is back", "Top news - 858 readers")}
       {newsArticle("Tesla hits new highs", "Cars & auto -200 readers")}
       {newsArticle("Is Redux too good?", "code - 150 readers")}
       {newsArticle("Market crashes", "Business - 5858 readers")}
       {newsArticle("Coronavirus", "Top news - 3858 readers")}
       {newsArticle("Storm hits east coast", "Top news - 5858 readers")}

       

    </div>
  )
}

export default Widget