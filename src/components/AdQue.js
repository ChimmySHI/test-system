import React, { Component } from 'react'
import {Button, Icon, Select,Input} from 'antd'
import {connect} from 'dva'
import style from './AdQue.css'
const { TextArea } = Input;
const Option = Select.Option;
let mapState = store => {
  window.store = store;
  return {...store.login}
}
class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      subjectone:'',
      subjecttwo:''
    };
  }
      but_add = () => {
        let {
          subject,
          subjectone,
          subjecttwo
        } =this.state;   
        console.log(subject,
          subjectone,
          subjecttwo)  
          console.log(this.refs.textone)  
      }
      textone=(value)=>{
        this.setState({
          text:value
        })
      }
      texttwo=(value)=>{
        this.setState({
          size:value
        })
      }
      handleChangeone=(value)=>{
        this.setState({
          subjectone:value
        })
      }
      handleChangetwo=(value)=>{
        this.setState({
          subjecttwo:value
        })
      }
      handleChangethree=(value)=>{
        this.setState({
          subject:value
        })
      }
  render () {
    return (
      <div className={style.content}>
      <div className={style.top}>
        试题管理/添加试题
        {/* <Button type="danger" size='small'>Danger</Button> */}
      </div>
      <div className={style.cont}>
      <div className={style.title}>请在这里输入题干</div>
        {/* <Title level={2}>请在这里输入题干</Title> */}
        {/* <h3 className={style.title}></h3> */}
        <div className={style.text}>
          <div className={style.icons}>
            <div className={style.icon_left}>
              <Icon type="home" />
              <Icon type="italic" />
              <Icon type="font-colors" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
            </div>
            <div className={style.icon_right}>
              <Icon type="align-left" />
              <Icon type="align-left" />
            </div>
          </div>
          <TextArea  ref='textone'  placeholder="Autosize height based on content lines" rows={6} />
        </div>
      </div>
      <div className={style.cont}>
        {/* <Title level={2}>请在这里输入答案</Title> */}
        <div className={style.title}>请在这里输入答案</div>
        <div className={style.text}>
          <div className={style.icons}>
            <div className={style.icon_left}>
              <Icon type="home" />
              <Icon type="italic" />
              <Icon type="font-colors" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
              <Icon type="home" />
            </div>
            <div className={style.icon_right}>
              <Icon type="align-left" />
              <Icon type="align-left" />
            </div>
          </div>
          <TextArea onChange={this.texttwo}  placeholder="Autosize height based on content lines" rows={12}/>
        </div>
      </div>
      <div className={style.choose}>
        <div className={style.chooseBox}>
          <span>试题选择试题类型：</span>
          <Select  defaultValue="周考一" style={{ width: 120 }} onChange={this.handleChangeone}>
            <Option value="周考一">周考一</Option>
            <Option value="周考二">周考二</Option>
            <Option value="周考三">周考三</Option>
            <Option value="月考">月考</Option>
          </Select>
        </div>
        <div className={style.chooseBox}>
        <span>试题选择课程类型</span>
          <Select  defaultValue="js" style={{ width: 120 }} onChange={this.handleChangetwo}>
            <Option value="js">Js</Option>
            <Option value="渐进式开发">渐进式开发</Option>
            <Option value="模块化开发">模块化开发</Option>
            <Option value="项目实战">项目实战</Option>
          </Select>
        </div>
        <div className={style.chooseBox}>
        <span>试题选择题目类型</span>
          <Select ref={subject=>this.subject=subject} defaultValue="简答题" style={{ width: 120 }} onChange={this.handleChangethree}>
            <Option value="简答题">简答题</Option>
            <Option value="代码补全">代码补全</Option>
            <Option value="修改bug">修改bug</Option>
            <Option value="手写代码">手写代码</Option>
          </Select>
        </div>
      </div>
      <div className={style.subBtn}>
        <Button type="primary" onClick={this.but_add}>提交</Button>
      </div>
    </div>
    )
  }
}

export default connect(mapState)(componentName)