import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import AccountNavbar from '../components/AccountNavbar';
import Head from 'next/head';
import styles from '../styles/Account.module.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const LoggedIn = () => {
    const { authUser, loading, signOut } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if(!loading && !authUser)
            router.push("/sign_in")
    }), [authUser, loading]

  return (
    <>
        {
            loading?
            <p>loading...</p>
            :
            <>
                <Head>
                    <title>Sign Up</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                </Head>
                <AccountNavbar/>
                <div className={styles.logInfo}>
                    {authUser && <p>Youre logged as <b>{authUser.email}</b></p>}
                    <button className={styles.logOutBtn} onClick={signOut}>
                        <ExitToAppIcon className={styles.btnIcon} />
                            Sign Out
                    </button>
                </div>
                <div className={styles.carPurchase}>
                    <img
                        src='/images/modelX.png' 
                        className={styles.modelX}
                    />
                    <h1>Model X</h1>
                </div>
            </>
        }
    </>
  )
}

export default LoggedIn;