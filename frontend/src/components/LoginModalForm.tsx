import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';

import { signIn } from 'next-auth/react';
import { createUser } from '@/lib/api';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const formSchema = z.object({
  email: z.string().nonempty({ message: 'Email is required' }),
  password: z.string().nonempty({ message: 'Password is required' }),
});

const LoginModalForm = () => {
  // form definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSignIn = () => {
    const result = signIn('google');
    console.log('SIGN IN RESULT', result);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Charity Login</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-4">
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            <Button onClick={handleSignIn}>Sign In With Google</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModalForm;
