import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  return (
    <div className="px-8 py-6">
      the user id is for {params.user_Id}
      <br />
      and username of {params.uname}
    </div>
  );
};

export default UserDetails;
