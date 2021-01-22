import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src='
            https://flevix.com/wp-content/uploads/2019/12/Live-Wave-Background.svg
                ' alt='bg' />
                <Avatar className='sidebar__avatar' />
                <h2>Zakhar Savchuk</h2>
                <h4>savagold98@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2,453</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>2,432</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('React JS')}
                {recentItem('Frontend')}
                {recentItem('Programming')}
                {recentItem('Software Development')}
                {recentItem('Student')}
            </div>
        </div>
    )
}

export default Sidebar
