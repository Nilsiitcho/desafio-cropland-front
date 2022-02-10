import React, {useEffect, useState} from 'react';
import http from "./http";

export default () => {

    const [registros, setRegistros] = useState([]);


    async function getDados(){
        const {data} = await http.get('/registros');
        setRegistros(data);
    }

    useEffect(() => {
        getDados();
    },[]);

    async function handleDelete(id){
        await http.delete(`/registros/${id}`);
        getDados();
    }

    function getColor(tipo){
        return {color: tipo === 'DESPESA' ? 'red' : 'green'}
    }

    const deleteButtonStyle = {
        color: 'white',
        background: 'red',
        border: 'none',
        cursor: 'pointer'
    }


    function renderizaRegistros(){
        return registros.map(registro => {
            return (
                <tr key={registro.id}>
                    <td>{registro.descricao}</td>
                    <td style={getColor(registro.tipo)}>{registro.tipo}</td>
                    <td>{registro.vencimento}</td>
                    <td style={getColor(registro.tipo)}>{registro.valor}</td>
                    <td> <button style={deleteButtonStyle} onClick={() => handleDelete(registro.id)}>Excluir</button></td>
                </tr>
            )
        });

    }

    return (
        <div className={'container-tabela'}>
            <table className={'tabela'}>
              <tr>
                  <th>Descrição</th>
                  <th>Tipo</th>
                  <th>Vencimento</th>
                  <th>Valor</th>
                  <th>Ações</th>
              </tr>
                {renderizaRegistros()}
            </table>
        </div>
    );
}
