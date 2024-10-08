import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const ClientRoom = ({ userNo, socket, setUsers, setUserNo }) => {
  const imgRef = useRef(null);
  useEffect(() => {
    socket.on("message", (data) => {
      toast.info(data.message);
    });
  }, []);
  useEffect(() => {
    socket.on("users", (data) => {
      setUsers(data);
      setUserNo(data.length);
    });
  }, []);
  useEffect(() => {
    socket.on("canvasImage", (data) => {
      imgRef.current.src = data;
    });
  }, []);
  return (
    <div className="container-fluid  bg-white ">
      <div className="row pb-2">
        <h1 className="display-5 pt-4 pb-3 text-center">
          React Drawing App - Users online:{userNo}
        </h1>
      </div>
      <div className="row mt-5">
        <div
          className="col-md-8 overflow-hidden border border-dark px-0 mx-auto
          mt-3"
          style={{ height: "500px" }}
        >
          <img style={{width: 846, height: 780}} ref={imgRef} src="" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default ClientRoom;
