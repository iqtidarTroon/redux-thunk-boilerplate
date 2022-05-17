import React, { useEffect } from "react";
import { fatchuser } from "../redux";
import { connect } from "react-redux";

function User({ userdata, fatchuser }) {
  useEffect(() => {
    fatchuser();
  }, []);

  console.log("user data....", userdata);
  return userdata.loading ? (
    <h2>loading</h2>
  ) : userdata.error ? (
    <h2>{userdata.error}</h2>
  ) : (
    <div>
      <h2>user list</h2>
      {userdata && userdata.data.map((user) => <h4>{user.name}</h4>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userdata: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fatchuser: () => dispatch(fatchuser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
