import React, {Component} from 'react';
import axios from 'axios';

class Customer extends Component{
    newCusGenerator(e){
        return({
            firstName: this.refs.first_name.value,
            lastName: this.refs.last_name.value,
            email: this.refs.email.value,
            idNumber: this.refs.idNumber.value,
            telephone: this.refs.telephone.value,
            address: this.refs.address.value
        })
    }

    addChangeOrSearchCus(cusInfo, request, mainURL){
        axios.request({
            method: request,
            url: mainURL,
            data: cusInfo
        }).then(response => {
            console.log('success')
        })
        .catch(err => console.log(err))
        console.log(cusInfo)
    }

    onCreateSubmit(e){
        const newCus = this.newCusGenerator(e);
        let mainURL = "http://localhost:8080/kycapplication/v1/customers/"
        this.addChangeOrSearchCus(newCus, "post", mainURL);
        e.preventDefault();
    }

    onChangeSubmit(e){
        const newCus = this.newCusGenerator(e)
        const cusId = {
            id: this.refs.cusIdChange.value
        }
        console.log(typeof cusId.id)
        let mainURL = "http://localhost:8080/kycapplication/v1/customers/".concat(cusId.id)
        console.log(mainURL)
        this.addChangeOrSearchCus(newCus, "put", mainURL)
        e.preventDefault();
    }

    onSearchSubmit(e){
        const cusInfo = this.newCusGenerator(e);
        let mainURL = "http://localhost:8080/kycapplication/v1/customers/"
        this.addChangeOrSearchCus(cusInfo, "get", mainURL);
        e.preventDefault();
    }

    searchOrDelById(cusId, request){
        let mainURL = 'http://localhost:8080/kycapplication/v1/customers/'.concat(cusId.id);
        if (request === 'del') {
            axios.delete(mainURL)
            .then(response => {
                console.log('success')
            })
            .catch(err => console.log(err))
            console.log(cusId)
        }
        else {
            axios.get(mainURL)
            .then(response => {
                console.log('success')
            })
            .catch(err => console.log(err))
            console.log(cusId)
        }
    }

    onDeleteSubmit(e){
        const cusId = {
            id: this.refs.cusId.value
        }
        this.searchOrDelById(cusId, "del")
        e.preventDefault();
    }
    
    onSearchByIdSubmit(e){
        const cusId = {
            id: this.refs.cusId.value
        }
        this.searchOrDelById(cusId, "search")
        e.preventDefault();
    }


    render(){
        return (
        <div className="row">
            <form onSubmit={this.onCreateSubmit.bind(this)}>
                <div className="row">
                    <div className="input-field col s6">
                    <input name="first_name" type="text" ref="first_name"/>
                    <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                    <input name="last_name" type="text" ref="last_name" />
                    <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input name="email" type="email" ref="email" />
                    <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                    <input name="idNumber" type="text" ref="idNumber" />
                    <label htmlFor="idNumber">idNumber</label>
                    </div>
                    <div className="input-field col s6">
                    <input name="telephone" type="text" ref="telephone" />
                    <label htmlFor="telephone">Telephone</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input name="address" type="text" ref="address" />
                    <label htmlFor="address">Address</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input name="cusIdChange" type="text" ref="cusIdChange" />
                    <label htmlFor="cusIdChange">Customer Unique Id (Only for Change function)</label>
                    </div>
                </div>
                <div align="right" id="submitButton">
                    <button type="submit" className="waves-effect waves-light submitBtn btn flag blue">Create</button>
                    <button type="submit" className="waves-effect waves-light submitBtn btn flag brown" onClick={this.onChangeSubmit.bind(this)}>Change</button>
                    <button type="submit" className="waves-effect waves-light submitBtn btn" onClick={this.onSearchSubmit.bind(this)}>Search</button>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input name="cusId" type="text" ref="cusId" />
                    <label htmlFor="cusId">Customer Unique Id</label>
                    </div>
                </div>
                <div align="right" className="submitBtn">
                    <button type="submit" className="waves-effect waves-light submitBtn btn flag red" onClick={this.onDeleteSubmit.bind(this)}>Delete</button>
                    <button type="submit" className="waves-effect waves-light submitBtn btn" onClick={this.onSearchByIdSubmit.bind(this)}>Search</button>
                </div>
            </form>
        </div>
        )
    }
}

export default Customer;
