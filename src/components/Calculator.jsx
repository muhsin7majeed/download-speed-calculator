import React, { Component } from "react";
import "./Calculator.css";
export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputSpeed: null,
            inputSize: null,
            answer: null,
            time: "minutes",
            speedIn: "Mb",
            sizeIn: "GB"
        };
    }
    handleChangeSpeed = e => {
        this.setState({
            inputSpeed: e.target.value
        });
    };
    handleChangeSize = e => {
        this.setState({
            inputSize: e.target.value
        });
    };
    handleCalculate = () => {
        let speedInByte = this.state.inputSpeed / 8;
        let sizeInGB = this.state.inputSize * 1024;
        let seconds = sizeInGB / speedInByte;
        let minutes = seconds / 60;
        if (minutes > 60) {
            let hours = minutes / 60;
            this.setState({
                answer: hours,
                time: "hours"
            });
        } else {
            this.setState({
                answer: Math.floor(minutes)
            });
        }
    };
    handleChangeSpeedIn = e => {
        this.setState({
            speedIn: e.target.value
        });
        console.log(e.target.value);
    };
    addSpeed = e => {
        e.preventDefault();
        this.setState({ inputSpeed: this.state.inputSpeed + 1 });
    };
    minusSpeed = e => {
        e.preventDefault();
        this.setState({ inputSpeed: this.state.inputSpeed - 1 });
    };
    addSize = e => {
        e.preventDefault();
        this.setState({ inputSize: this.state.inputSize + 1 });
    };
    minusSize = e => {
        e.preventDefault();
        this.setState({ inputSize: this.state.inputSize - 1 });
    };
    render() {
        return (
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                    <div class="container">
                        <a class="navbar-brand" href="/">
                            DTC
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon" />
                        </button>
                        <div
                            class="collapse navbar-collapse"
                            id="navbarResponsive"
                        >
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="/">
                                        Home
                                        <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about">
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div className="main row">
                                <div className="col-sm ">
                                    <label htmlFor="inputSize">
                                        Enter download size
                                    </label>
                                    <br />
                                    <span
                                        className="btn btn-success btn-sm"
                                        onClick={this.addSize}
                                    >
                                        +
                                    </span>
                                    <input
                                        className=""
                                        type="number"
                                        onChange={this.handleChangeSize}
                                        value={this.state.inputSize}
                                    />
                                    <span
                                        className="btn btn-danger btn-sm"
                                        onClick={this.minusSize}
                                    >
                                        -
                                    </span>
                                </div>
                                <div className="col-sm">
                                    <label htmlFor="inputSize">
                                        Enter internet speed
                                    </label>
                                    <br />
                                    <span
                                        className="btn btn-success btn-sm"
                                        onClick={this.addSpeed}
                                    >
                                        +
                                    </span>
                                    <input
                                        type="number"
                                        onChange={this.handleChangeSpeed}
                                        value={this.state.inputSpeed}
                                    />
                                    <span
                                        className="btn btn-danger btn-sm"
                                        onClick={this.minusSpeed}
                                    >
                                        -
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={this.handleCalculate}
                                className="marg btn btn-primary"
                            >
                                Calculate
                            </button>
                            <br />
                            <label htmlFor="inputSize">It takes about</label>
                            <br />
                            <input
                                value={this.state.answer}
                                type="number"
                                value={this.state.answer}
                            />
                            <p>{this.state.time}</p>
                        </div>
                    </div>
                    <div className="section jumbotron">
                        <h2 id="about">About</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Laudantium quod rerum labore eveniet mollitia
                            quos animi repellendus asperiores molestias dolores,
                            reprehenderit soluta eos consequatur tenetur
                            laboriosam necessitatibus eum incidunt! Unde.Earum
                            dignissimos cumque quia? Tempore, atque ut.
                            Dignissimos quasi similique neque nesciunt labore
                            optio autem consequuntur, asperiores, quod eveniet
                            reprehenderit vel eaque sunt quae vero rerum
                            quibusdam perspiciatis reiciendis modi?
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
