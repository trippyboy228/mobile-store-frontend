import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <center>
      <div style={{width:'100vw',height:'76.6vh'}} className="flex justify-center items-center flex-col gap-4 ">
        <img
          height="300"
          width="300"
          src="https://www.shutterstock.com/image-vector/online-shop-logo-designs-template-260nw-1265771701.jpg"
          alt="cartimg"
        />
        <h5 className="">
          Your cart is empty
        </h5>
        <p style={{ fontSize: "12px", fontWeight: "bold", color: "gray" }}>
          You can go to home page to view more item in mobile store
        </p>
        <Link to="/">
          <Button
            type=""
            className=""
            style={{ backgroundColor: "orangered", color: "white" }}
          >
            SEE ONLINE STORE NEAR YOU
          </Button>
        </Link>
      </div>
      </center>
  );
};
export default EmptyCart;
