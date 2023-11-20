import { redirect } from 'next/navigation';
import { prisma } from '../../../utils/db';
import { currentUser } from '@clerk/nextjs';

const createNewUser = async () => {
  const user = await currentUser();
  console.log(user);

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    },
  });

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user?.emailAddresses[0].emailAddress,
      },
    });
  }

  redirect('/jobs');
};

const NewUser = async () => {
  await createNewUser();
  return <div>Loading.....</div>;
};

export default NewUser;
