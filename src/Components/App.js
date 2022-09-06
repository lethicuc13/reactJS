import './../App.css';
import AppUser from './AppUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import React, { Component } from 'react';
import DataUser from './Data.json';
import { v4 as uuidv4 } from 'uuid';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: [],
      searchText: '',
      editUserStatus: false,
      userEditObject: {},
    };
  }

  componentWillMount() {
    if (localStorage.getItem('userData' === null)) {
      localStorage.setItem('userData', JSON.stringify(DataUser));
    } else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp,
      });
    }
  }

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    });
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  };
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    });
  };
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm,
    });
  };
  editUser = (user) => {
    this.setState({
      userEditObject: user,
    });
  };
  deleteUser = (idUser) => {
    var tempData = this.state.data.filter((item) => item.id !== idUser);
    this.setState({
      data: tempData,
    });
    localStorage.setItem('userData', JSON.stringify(tempData));
  };
  getNewUserData = (name, tel, Permission) => {
    var item = { id: uuidv4(), name, tel, Permission };
    var items = this.state.data;

    items.push(item);

    this.setState({
      data: items,
    });
    localStorage.setItem('userData', JSON.stringify(items));
    console.log('ket noi ok');
    console.log(this.state.data);
  };
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl,
    });
  };

  render() {
    // localStorage.setItem('userData', JSON.stringify(DataUser));

    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    });
    // console.log(ketqua);
    return (
      <div>
        <Header />
        <div className='searchForm'>
          <div className='container'>
            <div className='row'>
              <Search
                getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
                userEditObject={this.state.userEditObject}
                checkConnectProps={(dl) => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}
              />
              <TableData
                deleteUser={(idUser) => this.deleteUser(idUser)}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                editFun={(user) => this.editUser(user)}
                DataUserProps={ketqua}
              />
              <AppUser
                add={(name, tel, Permission) =>
                  this.getNewUserData(name, tel, Permission)
                }
                hienThiForm={this.state.hienThiForm}
              />
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default App;
