import Head from 'next/head';
import "../../public/assets/css/plugins/fontawesome.css";
import "../../public/assets/css/plugins/magnifying-popup.css";
import "../../public/assets/css/plugins/swiper.css";
import "../../public/assets/css/plugins/metismenu.css";
import "../../public/assets/css/vendor/bootstrap.min.css";
import 'react-modal-video/css/modal-video.min.css';

// Import your custom styles LAST to override plugin styles
import "../../public/assets/css/style.css";

import Script from 'next/script';



export const metadata = {
  title: "First Choice Supplies",
  description: "First Choice Supplies",
  icons: {
    icon: "/assets/images/fav.png", // Ensure the path is correct
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>First Choice Supplies</title>
        <meta name="author" content="reactheme" />
        <meta name="description" content="First Choice Supplies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/fav.png" />
      </Head>
      <body className='index-one'>

        {children}


        <a
          href="https://wa.me/+971555867611"
          className="position-fixed bg-success text-white p-3 rounded-circle shadow d-flex align-items-center justify-content-center"
          style={{ bottom: "80px", right: "28px", zIndex: 1050, width: "60px", height: "60px" }}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp" style={{ fontSize: "32px" }}></i>
        </a>


        <Script
          src="/assets/js/plugins/smooth-scroll.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
