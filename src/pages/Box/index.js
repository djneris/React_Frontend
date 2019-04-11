import React, { Component } from 'react';
import api from '../../services/api';

import { MdInsertDriveFile } from 'react-icons/md'

import logo from '../../assets/logo.svg';
import './styles.css';

export default class Box extends Component {
    state = { box: {} }

    async componentDidMount() {
        const box = this.props.match.params.id;
        //const box = '5cae8d2bfbe61b0017a4d39b';
        console.log(box);
        const response = await api.get(`boxes/${box}`);

        this.setState({box: response.data});
    }

    render() {
        return (
            <div id="box-container">
                <header>
                    <img src={logo} alt="" />
                    <h1>{this.state.box.title}</h1>
                </header>

                <ul>
                    <li>
                        <a className="fileInfo" href="">
                            <MdInsertDriveFile size={24} color="#A5Cfff" />
                            <strong>Desafio.pdf</strong>
                        </a>
                        <span>há 3 minitos atrás</span>
                    </li>
                    <li>
                        <a className="fileInfo" href="">
                            <MdInsertDriveFile size={24} color="#A5Cfff" />
                            <strong>Desafio.pdf</strong>
                        </a>
                        <span>há 3 minitos atrás</span>
                    </li>
                    <li>
                        <a className="fileInfo" href="">
                            <MdInsertDriveFile size={24} color="#A5Cfff" />
                            <strong>Desafio.pdf</strong>
                        </a>
                        <span>há 3 minitos atrás</span>
                    </li>
                </ul>
            </div>
        );
    }
}
