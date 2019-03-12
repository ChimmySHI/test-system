import React, { Component } from "react";
import { Radio, Input, Select, Button, Popconfirm, message } from "antd";
import { connect } from "dva";
import style from "./Adminis.css";
import { withRouter } from "react-router-dom";
import { addusers } from "../../../utils/userMessage";
const Option = Select.Option;
let mapState = store => {
  window.store = store;
  return { ...store.login };
};

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      size: "添加用户",
      user_id: "",
      msg: "",
      code: ""
    };
  }
 

  cancel = e => {
    message.error("添加失败");
  };
  confirm =(code)=>{
    console.log(code)
    if(code=='1'){
      message.success(this.state.msg);
    }else if(code=='0'){
      message.error(this.state.msg);
    }

  };
  butadduer(code){
   this.confirm
  }
  
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
    console.log(e.target.value);
  };
  handleChange = value => {
    console.log(value);
    this.setState({
      user_id: value.key
    });
  };
  adduser = () => {
    let { userName, password, user_id } = this.state;
    console.log(userName, password, user_id);
    addusers({
      user_name: userName,
      user_pwd: password,
      identity_id: user_id
    }).then(res => {
    
      this.setState({
        msg: res.data.msg,
        code: res.data.code
      });
    });
  };
  changeuser(e) {
    console.log(e);
  }
  render() {
    const { size, userName, password,code } = this.state;
    return (
      <div className={style.wrap}>
        <div className={style.tip}>
          <span>用户管理</span>
          <span>/</span>
          <span>用户展示</span>
        </div>
        <div className={style.Adm}>
          <div className={style.Adm_min}>
            <div>
              <Radio.Group value={size} onChange={this.handleSizeChange}>
                <Radio.Button value="添加用户">添加用户</Radio.Button>
                <Radio.Button value="更新用户">更新用户</Radio.Button>
              </Radio.Group>
            </div>
            {size && size !== "添加用户" ? (
              <Select
                labelInValue
                defaultValue={{ key: "请选择身份ID" }}
                style={{ width: 200 }}
              >
                <Option value="管理员">管理员</Option>
                <Option value="出题者">出题者</Option>
              </Select>
            ) : null}
            <div>
              <Input
                value={userName}
                onChange={ev => {
                  // console.log(ev.target.value)
                  this.setState({ userName: ev.target.value });
                }}
                placeholder="请输入用户名"
              />
              <Input
                value={password}
                onChange={ev => {
                  // console.log(ev.target.value)
                  this.setState({ password: ev.target.value });
                }}
                placeholder="请输入密码"
              />
            </div>
            <div>
              <Select
                labelInValue
                defaultValue={{ key: "请选择身份ID" }}
                style={{ width: 200 }}
                onChange={this.handleChange}
              >
                <Option value="63no9p-8y0k4">管理员</Option>
                <Option value="uf81yn-hv8uvv">出题者</Option>
              </Select>
            </div>
            <div>
              <Popconfirm
                title="你确定要添加用户吗?"
                onConfirm={this.confirm.bind(this,code)}
                onCancel={this.cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" onClick={this.adduser}>
                  确定
                </Button>
              </Popconfirm>
              ,<Button>重置</Button>
            </div>
          </div>
          <div className={style.Adm_min}>
            <div>
              <Radio.Group>
                <Radio.Button value="添加身份">添加身份</Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <Input placeholder="请输入身份名称" />
            </div>
            <div>
              <Button type="primary">确定</Button>
              <Button>重置</Button>
            </div>
          </div>
          <div className={style.Adm_min}>
            <div>
              <Radio.Group>
                <Radio.Button value="添加api接口权限">
                  添加api接口权限
                </Radio.Button>
              </Radio.Group>
            </div>
            <div>
              <Input placeholder="请输入api接口权限名称" />
              <Input placeholder="请输入api接口权限URL" />
              <Input placeholder="请输入api接口权限方法" />
            </div>
            <div>
              <Button type="primary">确定</Button>
              <Button>重置</Button>
            </div>
          </div>
          <div className={style.Adm_min}>
            <div>
              <Radio.Group>
                <Radio.Button value="添加视图接口权限">
                  添加视图接口权限
                </Radio.Button>
              </Radio.Group>
            </div>
            <Select
              labelInValue
              defaultValue={{ key: "选择已有视图" }}
              style={{ width: 200 }}
            >
              <Option value="管理员">管理员</Option>
              <Option value="出题者">出题者</Option>
            </Select>
            <div>
              <Button type="primary">确定</Button>
              <Button>重置</Button>
            </div>
          </div>
          <div className={style.Adm_min}>
            <div>
              <Radio.Group>
                <Radio.Button value="给身份设置api接口权限">
                  给身份设置api接口权限
                </Radio.Button>
              </Radio.Group>
            </div>
            <Select
              labelInValue
              defaultValue={{ key: "选择身份ID" }}
              style={{ width: 200 }}
            >
              <Option value="管理员">管理员</Option>
              <Option value="出题者">出题者</Option>
            </Select>
            <Select
              labelInValue
              defaultValue={{ key: "选择api接口权限" }}
              style={{ width: 200 }}
            >
              <Option value="管理员">管理员</Option>
              <Option value="出题者">出题者</Option>
            </Select>
            <div>
              <Button type="primary">确定</Button>
              <Button>重置</Button>
            </div>
          </div>
          <div className={style.Adm_min}>
            <div>
              <Radio.Group>
                <Radio.Button value="给身份设置视图权限">
                  给身份设置视图权限
                </Radio.Button>
              </Radio.Group>
            </div>
            <Select
              labelInValue
              defaultValue={{ key: "选择身份ID" }}
              style={{ width: 200 }}
            >
              <Option value="管理员">管理员</Option>
              <Option value="出题者">出题者</Option>
            </Select>
            <Select
              labelInValue
              defaultValue={{ key: "选择api接口权限ID" }}
              style={{ width: 200 }}
            >
              <Option value="管理员">管理员</Option>
              <Option value="出题者">出题者</Option>
            </Select>
            <div>
              <Button type="primary">确定</Button>
              <Button>重置</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapState)(componentName));
