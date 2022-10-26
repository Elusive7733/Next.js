const Profile = (props) => {
    return (
        <div>
            {props.name}
        </div>
    );
}

export default Profile;



export const getServerSideProps = async () => {


    return {
        props:{
            name: "Abdullah"
        }
    }
}