/*

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteClass } from '../../actions/profile';


const Class = ({ class1, deleteClass }) => {
    const classes = class1.map(class1 => (
        <tr key={class1._id}>
            <td>{class1.instructor}</td>
            <td className="hide-sm">{class1.title}</td>
            <td>
                <Moment format="YYYY/MM/DD">{moment.utc(class1.from)}</Moment> -{' '}
                {class1.to === null ? (
                    ' Now'
                ) : (
                        <Moment format="YYYY/MM/DD">{moment.utc(class1.to)}</Moment>
                    )}
            </td>
            <td>
                <button
                    onClick={() => deleteClass(class1._id)}
                    className="btn btn-danger"
                >
                    Delete
        </button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className="my-2">Class Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className="hide-sm">Title</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{classes}</tbody>
            </table>
        </Fragment>
    );
};

Class.propTypes = {
    class: PropTypes.array.isRequired,
    deleteClass: PropTypes.func.isRequired
};

export default connect(
    null,
    { deleteClass }
)(Class);

*/