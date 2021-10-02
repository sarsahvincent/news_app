import React from 'react'
import Layout from '@/components/Layout';
import Link from 'next/Link';
import styles from '@/styles/404.module.css'
import {FaExclamationTriangle} from 'react-icons'


function NotFound() {
    return (
        <Layout title="Page Not Found">
            <div className={styles.error}>
                <h1><FaExclamationTriangle/> 404</h1>
                <h4>Sorry, Nothing is here</h4>
                <Link href="/">Go Back Home</Link>
            </div>
            
        </Layout>
    )
}

export default NotFound
 