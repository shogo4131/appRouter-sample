'use client';

import { NextPage } from 'next';
import Image from 'next/image';

import GoogleIcon from '../../../public/google.svg';
import { Button } from '../../components/Elements/Button';

import styles from './page.module.css';

const Login: NextPage = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>ログイン</h1>
      <Button type="button" className={styles.button}>
        <Image src={GoogleIcon} alt="google" />
        <span>Google</span>
      </Button>
    </div>
  );
};

export default Login;
