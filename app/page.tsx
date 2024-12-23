'use client';
import React, {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';

import {FiDownload} from 'react-icons/fi';
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import {IHomeGeneral} from '@/interfaces/home/home.interface';
import {getHomeDetail, getUrlCV} from '@/hooks/homePage/homeApisHook';
import {downloadFile} from '@/utils/downloadFile';
import {toast} from 'react-toastify';

// getHomeDetail
const Home = () => {
  const [homeDetail, setHomeDetail] = useState<IHomeGeneral>();

  // Navigate phamgiatrihieu.io.vn domain
  useEffect(() => {
    const checkUrl = async () => {
      try {
        const response = await fetch('/api/check-url');

        const data = await response.json();

        if (data.success) {
          window.location.replace('https://phamgiatrihieu.io.vn');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    checkUrl();
  }, []);

  useEffect(() => {
    fetchHomeDetail();
  }, []);

  const fetchHomeDetail = async () => {
    try {
      const response = await getHomeDetail('portfolios/home/my-portfolio');
      setHomeDetail(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getDownloadLink = async () => {
    try {
      const response = await getUrlCV('files/cloudinary/download/cv');
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  if (!homeDetail) return <div>Loading...</div>;
  const {
    fullName,
    description,
    numberOfCodeCommits,
    numberOfProjectsCompleted,
    numberOfTechnologiesUsed,
    yearOfExperience,
  } = homeDetail;

  const handleDownloadCV = async () => {
    // TODO: implement download CV
    const url = await getDownloadLink();
    if (!url) {
      alert('Error: Failed to download CV');
    }
    if (url) {
      await downloadFile(url, `Hieu-Pham-Resume-${Date.now()}.pdf`);
      toast.success('CV downloaded successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* <span className="text-xl">Software Developer</span> */}
            <h1 className="h1 mb-6">
              Hello I’m <br />
              <span className="text-accent">
                {fullName ?? 'Phạm Gia Trí Hiếu'}
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">{description}</p>
            {/* Button and media Socials  */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                onClick={handleDownloadCV}
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats
        numCommit={numberOfCodeCommits}
        numProjects={numberOfProjectsCompleted}
        numTechnologies={numberOfTechnologiesUsed}
        numYoE={yearOfExperience}
      />
    </section>
  );
};

export default Home;
