import axios from "axios";
import { message } from "antd";

export const BookingBike = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post("/api/booking/bookbike");

    dispatch({ type: "LOADING", payload: false });
    message.success("Your Bike Booked Successfully");
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("Something Went Wrong , Please try later");
  }
};
