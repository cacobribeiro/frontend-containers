import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { updateContainers } from '../redux/actions/updateContainers';

class newContainer extends Component {

    async onSubmit() {
        const { container } = this.props;
        const { id, ...containerInfos } = container;

        await axios({
            method: 'POST',
            url: 'http://localhost:3001/api/containers',
            data: {

                ...containerInfos,
            },
        }).catch((err) => {
            alert(err.response.data.message);
        });

        return (window.location.href = '/home');
    }

    render() {
        const { setContainer, container } = this.props;
        return (
            <div>
                <div>
                    <h5>Container {container.id}</h5>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        value={container.fullName}
                        onChange={(event) => setContainer('fullName', event.target.value)}
                        placeholder="Nome Completo"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="containerId"
                        value={container.containerId}
                        onChange={(event) => setContainer('containerId', event.target.value)}
                        placeholder="Container-Id"
                    />
                </div>
                <div className="form-group">
                    <select
                        defaultValue=""
                        value={container.status}
                        onChange={(event) => setContainer('status', event.target.value)}
                        className="form-control"
                    >
                        <option value="">--</option>
                        <option value="Cheio">Cheio</option>
                        <option value="Vazio">Vazio</option>
                    </select>
                </div>
                <div className="form-group">
                    <select
                        defaultValue=""
                        value={container.category}
                        onChange={(event) => setContainer('category', event.target.value)}
                        className="form-control"
                    >
                        <option value="">--</option>
                        <option value="Exportação">Exportação</option>
                        <option value="Importação">Importação</option>
                    </select>
                </div>
                <div className="form-group">
                    <select
                        defaultValue=""
                        value={container.type}
                        onChange={(event) => setContainer('type', event.target.value)}
                        className="form-control"
                    >
                        <option value="">--</option>
                        <option value="20">20</option>
                        <option value="40">40</option>
                    </select>
                </div>
                <button type="button" onClick={() => this.onSubmit()} className="btn btn-primary">
                    Atualizar
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    container: state.updateContainers.container,
});

const mapDispatchToProps = (dispatch) => ({
    setContainer: (key, value) => dispatch(updateContainers(key, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(newContainer);
