import getUserByClerkId from '../../../../utils/auth';
import { prisma } from '../../../../utils/db';

const getJobs = async () => {
  const user = await getUserByClerkId();

  const entries = prisma.jobEntry.findMany({
    where: {
      userId: user?.id as string,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return entries;
};

const Jobs = async () => {
  const jobs = await getJobs();
  console.log(jobs);
  return (
    <div>
      <h1>Jobs</h1>
    </div>
  );
};

export default Jobs;
