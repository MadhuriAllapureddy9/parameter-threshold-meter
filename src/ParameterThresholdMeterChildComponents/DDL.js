import React, { useState, useEffect, Component } from "react";
import axios from "axios"
import { Table, TableCell, TableHead, TableRow, TableBody } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

class DDL extends React.Component{
    constructor(){
        super();
        this.state={
            DDL1:[],
            DDL2:[],
            selectDDL:'',
        };
    }
    componentDidMount(){
        this.setState({
            DDL1:[
                {name:'Colors', DDL2:['Red', 'Black', 'orange','Blue']},
                {name:'Sports', DDL2:['Cricket', 'Rugby', 'Boxing','Swimming']},
                {name:'Fruits', DDL2:['Apple', 'Cherry', 'Kiwi','Mango']},
                {name:'CountryNames', DDL2:['India', 'Japan', 'UK','USA']},
            ]
        });
    }
    selectChange(e){
        this.setState({selectDDL:e.target.value});
        this.setState({DDL2:this.state.DDL1.find(x=> x.name === e.target.value).DDL2});
    }
    render(){
        return(
            <div align='center'>
                <select  value={this.state.selectDDL} onChange={this.selectChange.bind(this)}>
                    <option>----Select----</option>
                    {this.state.DDL1.map(x => {
                        return <option>{x.name}</option>
                    })}
                </select>
                <select>
                    <option selected disabled>----------------</option>
                    {
                        this.state.DDL2.map(x =>{
                            return <option>{x}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}
export default DDL;
