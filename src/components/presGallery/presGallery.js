import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "./presGallery.scss";

// import { ReactComponent as Arrow } from "./../../assets/images/arrow.svg";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    const { className } = props;

    this.state = {
      className: className,
      slides: [],
    };
  }

  // componentDidMount() {
  //   let items = document.getElementsByClassName('pswp-thumbnail');

  //   this.setState({
  //     slides: items
  //   });

  //   console.log(this.state);
  // }

  render(props) {
    const settings = {
      dots: true,
      infinite: true,
    };

    // console.log(this.state.slides[0]);
    // let items = document.getElementsByClassName('pswp-thumbnail');

    // console.log(items);

    return (
      <div>
        <Slider className={this.state.className} {...settings}>
          {/* {this.state.slides} */}
        </Slider>
      </div>
    );
  }
}