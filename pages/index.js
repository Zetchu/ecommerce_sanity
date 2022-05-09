import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";

import { client } from "../LIB/client";
import banner from "../sanity_shop/schemas/banner";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className="products-heading">
        <h2>Best Selliing product</h2>
        <p>Spekaers</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner FooterBanner={bannerData && bannerData[0]}></FooterBanner>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
