/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { UpstashRedisAdapter } from '@next-auth/upstash-redis-adapter';
import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SERCRET, AUTH_SECRET } from '../config';

import { db } from './db';

const getGoogleCredintials = () => {
  const clientId = GOOGLE_CLIENT_ID;
  const clientSercret = GOOGLE_CLIENT_SERCRET;

  if (!clientId || clientId.length === 0) {
    throw new Error('Nothing GOOGLE_CLIENT_ID');
  }

  if (!clientSercret || clientSercret.length === 0) {
    throw new Error('Nothing GOOGLE_CLIENT_SERCRET');
  }

  return { clientId, clientSercret };
};

export const authOptions: NextAuthOptions = {
  secret: AUTH_SECRET,
  adapter: UpstashRedisAdapter(db),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: getGoogleCredintials().clientId,
      clientSecret: getGoogleCredintials().clientSercret,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = (await db.get(`user:${token.id}`)) as User | null;

      if (!dbUser) {
        token.id = user.id;
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
    session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
    redirect() {
      return '/dashboard';
    },
  },
};
