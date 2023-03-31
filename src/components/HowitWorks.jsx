import React from "react";
// import rocket from '../img/rocketrovbg.png';
import rocket from '../img/phone-2-973x1024.png';

function Howitworks() {
    const ColoredHr = ({color}) =>(
        <hr
          style={{
            color:color,
            backgroundColor:color,
            height:2,
            width:113,
            marginLeft:64
          }}
          />
    )

    const styles={
            phone__image_div: {
                width:"50%"
            }

    }

    return(
        <div  className="Howitworks flex justify-between">
            <div data-aos="fade-right" data-aos-duration="1000">
                <h2 className=" mt-60 ml-16 font-bold text-2xl"> 
                        <span className=" text-lime-50">Pluto</span>
                        <span className="logopay text-sky-500">Pay</span>
                </h2>

                <div className="how_it_works_link mt-28 ml-16 text-sky-500">
                        <a  href="">HOW IT WORKS</a>
                </div>
                <ColoredHr color="white" className="hr"/>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" style={styles.phone__image_div}>
                <img src={rocket} alt="" srcset={rocket} />
            </div>
          
        </div>
    )
}

export default Howitworks;