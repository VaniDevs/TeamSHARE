import React, { Component } from 'react';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAgencyInfo } from '../../actions/agencyActions';
import { fetchUser, fetchUserInfo } from '../../actions/authActions';
class AgencyProfile extends Component {
    componentDidMount() {
        this.props.fetchUser().then(ret => {
            if(ret && ret.payload && ret.payload.uid && !ret.payload.errorCode) {
                return this.props.fetchUserInfo(ret.payload.uid).then(infoRet => {
                    let agencyId = infoRet && infoRet.payload && infoRet.payload.agencyId ? infoRet.payload.agencyId : null;
                    this.props.fetchAgencyInfo({ agencyId });
                })
            }
        })
    }
    render() {
        let { address, name, phone } = this.props.agencyInfo;
        return (
            <div>
                <h1>
                {
                    name ? name : null
                }</h1>             

                <p>{phone ? phone : null}</p>
                <p>{address && address.suite ? address.suite : null} {address && address.street ? address.street : null}</p>
                <p>{address && address.city ? address.city : null}</p>
                <p>{address && address.province ? address.province : null}</p>
                <p>{address && address.postalCode ? address.postalCode : null}</p>

            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        fetchAgencyInfo,
        fetchUser,
        fetchUserInfo
    }, dispatch);
}

function mapStateToProps(state) {
    return {  
        userInfo: state.userInfo,
        agencyInfo: state.agency && state.agency.info ? state.agency.info : {}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AgencyProfile);