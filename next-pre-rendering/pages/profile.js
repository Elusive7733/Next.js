const Profile = (props) => {
    return (
        <div>
            {props.name}
        </div>
    );
}

export default Profile;


//* If we want display a page with highly dynamic data that changes with every request we can use server side rendering
//. If we want to handle every incoming request by using server-side rendering we can use getServerSideProps()
// ---> This is useful if we want to fetch data from an external API
// ---> This does not pre generate pages but instead renders the page on every request

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;

  //we get node req and res objects in getServerSideProps context, but also the params object similar to getStaticProps
    
  return {
    props: {
      name: "Abdullah",
    },
  };
}