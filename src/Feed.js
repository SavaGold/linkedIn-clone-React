import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import InputOption from './InputOption.js'
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons'
import Post from './Post.js'
import { db } from './firebase'
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move'

function Feed() {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoURL: user.photoURL || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        });
        setInput('');
    };

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    {/* Input Options with props*/}
                    <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
                    <InputOption Icon={Subscriptions} title='Video' color='#E7A33E' />
                    <InputOption Icon={EventNote} title='Event' color='#C0CBCD' />
                    <InputOption Icon={CalendarViewDay} title='Write article' color='#7FC15E' />
                </div>
            </div>

            <FlipMove>
                {/* Posts */}
                {posts.map(({ id, data: { name, description, message, photoURL } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoURL={photoURL}
                    />
                ))}
            </FlipMove>

            {/* <Post name='zakhar Savchuk' description='This is a test' message='Test message' /> */}
        </div>
    )
}

export default Feed;
