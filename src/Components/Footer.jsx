import React from 'react';
import { FaFacebook, FaLinkedin, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#111",
    width: "100%",
    height: "300px",
  };

  return (
    <>
      <section>
        <div style={footerStyle} className="flex flex-col items-center bg-black py-10">
          <div className="w-full flex justify-center relative mb-5">
            <hr style={{ width: "1000px", backgroundColor: "white" }} className="mt-5" />
          </div>

          <div className="flex flex-col items-center text-center max-w-xl mb-10">
            <h2 className="text-white font-semibold text-2xl mb-2">SUBSCRIBE TO US</h2>
            <h5 className="text-white font-light text-sm px-5 max-w-[800px]">
              Stay updated with the latest news, exclusive offers, and insightful articles delivered
              right to your inbox. Join our community and be the first to discover tips, trends, and
              stories that inspire. Subscribe now and never miss an update!
            </h5>
          </div>

          <div className="flex flex-row space-x-6 mb-5">
            <FaXTwitter size={20} color="white" aria-label="Twitter" />
            <FaInstagram size={20} color="white" aria-label="Instagram" />
            <FaFacebook size={20} color="white" aria-label="Facebook" />
            <FaYoutube size={20} color="white" aria-label="YouTube" />
            <FaLinkedin size={20} color="white" aria-label="LinkedIn" />
          </div>

          <div className="w-full flex justify-center relative mb-5">
            <hr style={{ width: "1000px", backgroundColor: "white" }} className="mt-5" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
