import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { updateContainers } from '../redux/actions/updateContainers';

class UpdateContainer extends Component {
    findOneContainer = async () => {
        const { containerId } = this.props.match.params;
        const { setContainer } = this.props;

        return axios({
            method: 'GET',
            url: `http://localhost:3001/api/containers/${containerId}`,
        }).then((response) => setContainer(null, response.data));
    };

    componentDidMount() {
        this.findOneContainer();
    }

    async onSubmitDelete() {
        const { containerId } = this.props.container;

        await axios({
            method: 'DELETE',
            url: 'http://localhost:3001/api/containers',
            data: {
                containerId,
            },
        }).catch((error) => {
            if (error) return alert(error.response.data.message);
        });

        return (window.location.href = '/home');
    }

    async onSubmit() {
        const { container } = this.props;
        const { id, ...containerInfos } = container;

        await axios({
            method: 'PATCH',
            url: 'http://localhost:3001/api/containers',
            data: {
                ...containerInfos,
            },
        }).catch((error) => {
            if (error) return alert(error.response.data.message);
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
                        disabled
                        onChange={(event) => setContainer('containerId', event.target.value)}
                        placeholder="Container-Id"
                    />
                </div>
                <div className="form-group">
                    <select
                        defaultValue="Vazio"
                        value={container.status}
                        onChange={(event) => setContainer('status', event.target.value)}
                        className="form-control"
                    >
                        <option value="Cheio">Cheio</option>
                        <option value="Vazio">Vazio</option>
                    </select>
                </div>
                <div className="form-group">
                    <select
                        defaultValue="Exportação"
                        value={container.category}
                        onChange={(event) => setContainer('category', event.target.value)}
                        className="form-control"
                    >
                        <option value="Exportação">Exportação</option>
                        <option value="Importação">Importação</option>
                    </select>
                </div>
                <div className="form-group">
                    <select
                        defaultValue="20"
                        value={container.type}
                        onChange={(event) => setContainer('type', event.target.value)}
                        className="form-control"
                    >
                        <option value="20">20</option>
                        <option value="40">40</option>
                    </select>
                </div>
                <button
                    type="button"
                    onClick={() => this.onSubmit()}
                    className="btn btn-primary m-2"
                >
                    Atualizar
                </button>
                <button
                    type="button"
                    onClick={() => this.onSubmitDelete()}
                    className="btn btn-danger m-2"
                >
                    Deletar Container
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateContainer);
