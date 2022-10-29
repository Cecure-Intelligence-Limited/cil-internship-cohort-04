import React from 'react';
import { MdCopyright } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="w-full bg-[#343a40] h-fit flex justify-center align-middle text-white p-4 items-center">
      <div className="max-w-[1140px] m-auto flex items-center">
        <MdCopyright className="w-5" />
        <h1 className="text-center">2020. Toluwalase Adeosun</h1>
      </div>
    </div>
  );
};

export default Footer;
