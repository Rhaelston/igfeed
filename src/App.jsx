import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'


import './global.css'
import styles from './App.module.css'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      name: 'Rhaelston Honório',
      avatarUrl:'https://github.com/rhaelston.png',
      role: 'Front-End Dev'
    },
    content: [
      {type: 'paragraph', content: 'fala galera, '},
      {type: 'paragraph', content: 'acabei de publicar um projeto no meu portfolio'},
      {type: 'link', content: 'https://rhaelston-dev.vercel.app'}
    ],
    publishedAt: new Date('2022-08-14 22:12:54'),
  },

  {
    id: 2,
    author: {
      name: 'Israel Fagundes',
      avatarUrl: 'https://github.com/israelfagundes.png',
      role: 'Meu casa'
    },
    content: [
      {type: 'paragraph', content: 'fala galera, '},
      {type: 'paragraph', content: 'acabei de publicar um projeto no meu portfolio'},
      {type: 'link', content: 'https://rhaelston-dev.vercel.app'}
    ],
    publishedAt: new Date('2022-09-12 14:42:54'),
  },
];


function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
      
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
