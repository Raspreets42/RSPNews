import React from 'react'
import image from "../raspreet.jpg";

export default function Header() {
    return (
        <div className="about ">
            <div className="texted">
                <h1 className="my-2 text-center">About</h1>
                <hr />
                <h5 className="text-center">"News is a delicate balance of serving public good and private gain."</h5>
                <br />
                <p>It's Now become very neccessary to have a good knowledge of what is happening in the world day by day.
            <b><i> The RSP News</i></b> presents top 20 News of the day. <b><i> The RSP News Chennel</i></b> launched in June' 2021. The channel is designed using the ReactJs Framework and is operated by <b><i> Mr. Raspreet Singh Pasrija.</i></b></p>
                <br />
                <h6>Mr. Raspreet Singh Pasrija words :</h6>
                <p><b><i> The RSP News Chennel</i></b> is the first API based Project. I designed <b><i> The RSP News Chennel</i></b> in a single day only and one of my friend <b><i> Aman Mahore </i></b> helped me when I'm facing some issues with my project <b><i> The RSP News Chennel.</i></b> This is just an start to the way of becoming an Web Developer. </p>
                <br />
                <p><b><i> About Me :</i></b><br /> I'm a <b><i> BE 3<sup>rd</sup> year student</i></b> studying <b>Computer Science Engineering</b> at <b>Rungta College of Engineering and Technology , Bhilai.</b> I like Programmings and will soon start an Bloging on the Programmings. </p>

                <div className="text-center my-4 crdspace ">
                    <div className="card crd">
                        <img src={image} className="card-img-top" alt="Not Found" />
                        <div className="card-body">
                            <h5 className="card-title crdhead">Raspreet Singh Pasrija</h5>
                            <h5 className="card-text crdhead" >Designed <b><i> The RSP News Chennel</i></b></h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item crdli"><b>Age : </b>21</li>
                            <li className="list-group-item crdli"><b>Education: </b>Bachelor of Engineering</li>
                            <li className="list-group-item crdli"><b>Project: </b>RSP News</li>
                            <li className="list-group-item crdli"><b>Framework : </b>ReactJs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}