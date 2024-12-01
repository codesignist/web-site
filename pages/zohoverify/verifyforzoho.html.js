export default function VerifyZOHO({ zohokey }) {
  return <>{zohokey}</>;
}

export const getServerSideProps = async () => {
  return {
    props: {
      zohokey: process.env.ZOHOKEY,
    },
  };
};
