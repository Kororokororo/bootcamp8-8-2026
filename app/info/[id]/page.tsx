import React from 'react'

const infoParamPage = async ({ params }) => {
    const { id } = await params;
  return (
    <>
    <p>inforParamPage : {id}</p>
    </>
  );
};

export default infoParamPage