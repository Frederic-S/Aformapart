import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Head>
                <title>A Form Apart</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='title'>
                <h1>Home Page</h1>
            </div>
        </div>
    )
}
