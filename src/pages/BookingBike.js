import { Col, Row, Divider, DatePicker } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import DefaultLayoutut from '../components/DefaultLayout'
import Spinner from '../components/Spinner';
import { getAllBikes } from '../redux/actions/bikesAction';
import moment from 'moment'
import Checkbox from 'antd/lib/checkbox/Checkbox';
import {bookbike} from '../redux/actions/bookingAction'
const {RangePicker} = DatePicker


function BookingBike({match}) {
  const {bikes} = useSelector(state=>state.bikeReducer)
  const {loading} = useSelector(state=>state.alertsReducer)
  const [bike , setbike] = useState({})
  const dispatch = useDispatch()
  const [from , setFrom] = useState()
  const [to , setTo] = useState()
  const [totalHours , setTotalHours] = useState(0)
  const [driver , setDriver] = useState(false)
  const [totalAmount , setTotalAmount] = useState(0)
  

  useEffect(()=>{
    dispatch(getAllBikes())
    if(bikes.length>0)
    {
      setbike(bikes.find(o=>o.id==match.params.bikeid))
    }
  },[bikes])

  useEffect(() => {
    setTotalAmount((totalHours * bike.rentPerHour))
    if(driver)
    {
      setTotalAmount(totalAmount + (30 * totalHours))
    }

  }, [driver , totalHours]);
  

  function selectTimeSlots(values){
  
    setFrom(moment(values[0]).format('MM DD yyyy HH:mm'))
    setTo(moment(values[1]).format('MM DD yyyy HH:mm'))

    setTotalHours(values[1].diff(values[0] , 'hours'))
  }

  function bookNow(){

    const reqObj ={
      user : JSON.parse(localStorage.getItem('user')).id,
      bike : bike.id,
      totalHours,
      totalAmount,
      driverRequire : driver,
      bookingTimeSlots :{
        from,
        to
      }
    }

    dispatch(BookingBike(reqObj))

  }



  return(
   <DefaultLayoutut>
      {loading && (<Spinner/>)}
      <Row justify='center' className='d-flex align-items-center' style={{minHeight:'90vh'}}>
        <Col lg={10} sm={24} xs={24}>
        <img src={bike.image} className='bikeimg2 bs1'/>
        </Col>

        <Col lg={10} sm={24} xs={24} className='text-right'>
        <Divider type='horizontal' Dashed>Bike Info</Divider>
        <div style={{textAlign: 'right'}}>
          <p>{bike.name}</p>
          <p>{bike.rentPerHour} Rent Per Hour /-</p>
          <p>fuel Type : {bike.fuelType}</p>
          <p>Max Person : {bike.capacity}</p>
        </div>

        <Divider type='horizontal' Dashed>Select Time Slots</Divider>
        <RangePicker showTime={{format: 'HH:mm'}} format='MM DD yyyy HH:mm' onChange={selectTimeSlots}/>

        <div>
          <p>Total Hours : <b>{totalHours}</b></p>
          <p>Rent Per Hour : <b>{bike.rentPerHour}</b></p>
          <Checkbox onChange={(e)=>{
            if(e.target.checked)
            {
              setDriver(true);
            }
            else
            {
              setDriver(false);
            }
          }}>Driver Required</Checkbox>
          <h3>Total Amount : {totalAmount}</h3>

          <button className='btn1' onClick={bookNow}>Book Now</button>
        </div>
        
        </Col>

      </Row>
  </DefaultLayoutut>
  )
  ;
}

export default BookingBike;

{/* <h1>BookingBike</h1>
      <h1>bike name = {bike.name}</h1> */}