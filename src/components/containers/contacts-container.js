import React from 'react';
import {connect} from 'react-redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import Contacts from '../contacts';
import ContactsMinimal from "../contacts-minimal";

const ContactsContainer = ({page, contacts, workingHours, postInfo, loading, error}) => {

    if (loading) {
        return <Spinner/>;
    }
    if (error) {
        return <ErrorIndicator/>
    }
    if (page) return <Contacts page={page} contacts={contacts} workingHours={workingHours} postInfo={postInfo}/>;

    if (!page) return <ContactsMinimal contacts={contacts} workingHours={workingHours}/>;

    return <div>Page not found</div>;
};

const mapStateToProps = ({settingsList: {settings: {staffContacts, workingHours, postInfo}, loading, error}}) => {
    return {
        contacts: staffContacts,
        workingHours: workingHours,
        postInfo: postInfo,
        loading,
        error
    };
};

export default connect(mapStateToProps)(ContactsContainer);