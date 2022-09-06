import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
  deleteButtonClick = (idUser) => {
    this.props.deleteUser(idUser);
  };
  mappingDataUser = () =>
    this.props.DataUserProps.map((value, key) => (
      <TableDataRow
        deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)}
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        editFunClick={(user) => this.props.editFun(value)}
        userName={value.name}
        key={key}
        stt={key}
        tel={value.tel}
        permission={value.Permission}
        id={value.id}
      />
    ));

  render() {
    return (
      <div className='col'>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>STT</th>
              <th>Ten</th>
              <th>Dien Thoai</th>
              <th>Quyen</th>
              <th>Thao Tac</th>
            </tr>
          </thead>
          <tbody>{this.mappingDataUser()}</tbody>
        </table>
      </div>
    );
  }
}

export default TableData;
