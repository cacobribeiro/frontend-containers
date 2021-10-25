import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { Component } from 'react';
import { getAllContainers } from '../redux/actions/containers';

class Home extends Component {
    getAllContainer = async () => {
        const { getAllContainers } = this.props;

        await axios({
            url: 'http://localhost:3001/api/containers/all',
        }).then((response) => getAllContainers(response.data.containerInfo));
    };

    componentDidMount() {
        this.getAllContainer();
    }

    render() {
        const { containers } = this.props;

        if (!containers) return null;

        return (
            <div className="card text-center">
                <div className="card-header">
                    <h5 className="card-title">Containers </h5>
                </div>

                {containers.map((container) => {
                    return (
                        <ul key={container.id} className="list-group list-group-horizontal-md mt-3">
                            <li className="list-group-item">{container.id}</li>
                            <li className="list-group-item flex-fill">{container.fullName}</li>
                            <li className="list-group-item flex-fill">{container.containerId}</li>
                            <li className="list-group-item flex-fill">{container.type}</li>
                            <li className="list-group-item flex-fill">{container.status}</li>
                            <li className="list-group-item flex-fill">{container.category}</li>
                            <Link
                                className="list-group-item"
                                to={`/update/${container.containerId}`}
                            >
                                <li className="list-group-item list-group-item-warning">Editar</li>
                            </Link>
                        </ul>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    containers: state.Containers.containers,
});

const mapDispatchToProps = (dispatch) => ({
    getAllContainers: (containers) => dispatch(getAllContainers(containers)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
