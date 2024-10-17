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
                            <input type="text" id="nombres" name="nombres"/>
                        </div>
                        <div>
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" id="apellidos" name="apellidos"/>
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
                        <div>
                            <label htmlFor="tipoID">Tipo ID</label>
                            <select id="tipoID" name="tipoID">
                                <option value="cedula">Cédula</option>
                                <option value="pasaporte">Pasaporte</option>
                            </select>
                        </div>
                        <div>
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
