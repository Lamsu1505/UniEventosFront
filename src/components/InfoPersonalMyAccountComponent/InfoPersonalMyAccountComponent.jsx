import './InfoPersonalMyAccountComponent.css';
import { useNavigate } from "react-router-dom";
import React from "react";


const InfoPersonalMyAccountComponent = () => {

    return (
        <div>
            <div className="container">
                <h2>Información personal</h2>
                <form>
                    <div className="form-name">
                        <div className="contenedorNombre">
                            <label htmlFor="nombres" className="labelNombre">Nombres</label>
                            <input type="text" id="nombres" className="inputNombre"/>
                        </div>
                        <div className= "contenedorApellidos">
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" id="apellidos" name="apellidos" className="inputApellido"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div>
                            <label htmlFor="direccion">Dirección</label>
                            <input type="text" id="direccion" name="direccion" className="full-width"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div>
                            <label htmlFor="ciudad">Ciudad</label>
                            <input type="text" id="ciudad" name="ciudad"/>
                        </div>
                        <div>
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="text" id="telefono" name="telefono"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="contenedorComboBoxId">
                            <label htmlFor="tipoID">Tipo ID</label>
                            <select id="tipoID" name="tipoID">
                                <option value="cedula">CC</option>
                                <option value="pasaporte">TI</option>
                            </select>
                        </div>
                        <div className="contenedorId">
                            <label htmlFor="numeroID">Número de identificación</label>
                            <input type="text" id="numeroID" name="numeroID"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div>
                            <label htmlFor="correo">Correo electrónico</label>
                            <input type="email" id="correo" name="correo" className="full-width"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn">Actualizar perfil</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export {InfoPersonalMyAccountComponent};
