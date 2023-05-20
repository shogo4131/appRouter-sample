'use client';

import { NextPage } from 'next';

import { signIn } from 'next-auth/react';

import { Button } from '../../components/Elements/Button';

import styles from './page.module.css';

const Login: NextPage = () => {
  const onClickLoginHandler = async () => {
    try {
      await signIn('google');
    } catch (error) {
      throw new Error('Auth Login Error');
    }
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>ログイン</h1>
      <Button type="button" onClick={onClickLoginHandler} className={styles.button}>
        <span>Google</span>
      </Button>
    </div>
  );
};

export default Login;
