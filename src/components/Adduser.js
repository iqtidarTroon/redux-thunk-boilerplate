import React from "react";
import { connect } from "react-redux";
import { adduser } from "../redux";
const Adduser = (props) => {
  const [newuser, setnewuser] = React.useState([]);
  return (
    <>
      <div>Adduser</div>
      <input
        type="text"
        placeholder="Enter your name"
        value={newuser}
        style={{ padding: "10px 50px" }}
        onChange={(e) => setnewuser(e.target.value)}
      />
      <button onClick={() => props.adduser(newuser)}>Add user</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userdata: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adduser: (newuser) => dispatch(adduser(newuser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Adduser);
