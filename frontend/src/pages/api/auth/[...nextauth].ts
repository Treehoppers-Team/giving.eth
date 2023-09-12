import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "797550200921-n15f7uck66s3hvsgjt2udpo7ijoak0qu.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};
export default NextAuth(authOptions);
