import React, { Component } from 'react';

class AppUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      tel: '',
      Permission: '',
    };
  }
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
    // var item = {};
    // item.id = this.state.id;
    // item.name = this.state.name;
    // item.tel = this.state.tel;
    // item.Permission = this.state.Permission;
    // console.log(item);
  };
  kiemtraTrangThai = () => {
    if (this.props.hienThiForm === true) {
      return (
        <div className='col'>
          <form>
            <div className='card border-primary mb-3 mt-2'>
              <div className='card-header'>Them moi user vao he thong</div>
              <div className='card-body'>
                <div className='form-group'>
                  <input
                    type='text'
                    name='name'
                    onChange={(event) => this.isChange(event)}
                    className='form-control'
                    placeholder='User Name'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='tel'
                    onChange={(event) => this.isChange(event)}
                    className='form-control'
                    placeholder='Dien Thoai'
                  />
                </div>
                <div className='form-group'>
                  <select
                    className='custom-select'
                    onChange={(event) => this.isChange(event)}
                    name='Permission'>
                    <option value>Chon Quyen Mac Dinh</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Moderator</option>
                    <option value={3}>Normal User</option>
                  </select>
                </div>
                <div className='form-group'>
                  <input
                    type='reset'
                    className='btn btn-block btn-primary'
                    onClick={(name, tel, Permission) =>
                      this.props.add(
                        this.state.name,
                        this.state.tel,
                        this.state.Permission
                      )
                    }
                    value='Them Moi'
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    }
  };
  render() {
    // console.log(this.state);
    return (
      <div>
        {/* {this.hienThiNut()} */}
        {this.kiemtraTrangThai()}
      </div>
    );
  }
}

export default AppUser;
