'use client';
import CountUp from 'react-countup';

interface IStatProps {
  numCommit?: number;
  numProjects: number;
  numTechnologies: number;
  numYoE: number;
}

const Stats = ({
  // numCommit,
  numProjects,
  numTechnologies,
  numYoE,
}: IStatProps) => {
  const data = [
    {
      num: numYoE,
      text: 'Years of experience',
    },
    {
      num: numProjects,
      text: 'Projects completed',
    },
    {
      num: numTechnologies,
      text: 'Technologies known and used',
    },
    // {
    //   num: numCommit,
    //   text: 'code commits',
    // },
  ];
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {data.length &&
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-1 gap-4 items-center justify-center xl:justify-start"
                >
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                  <p
                    className={`${
                      item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                    } leading-snug text-white/80`}
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
