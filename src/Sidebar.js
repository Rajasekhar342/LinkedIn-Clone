import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';
import "./Sidebar.css"

function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic)=>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuR_4oOij6SyACb3lrPl6c8FwoeZGRxek4KQ&usqp=CAU" alt="" />
            <Avatar src={user.photoUrl} className='sidebar_avatar'>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>who viewed you</p>
                <p className='sidebar_statNumber'>254</p>
            </div>
            <div className="sidebar_stat">
                <p>views on post</p>
                <p className='sidebar_statNumber'>200</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
            
        </div>      
    </div>
  )
}

export default Sidebar