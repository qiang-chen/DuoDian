import React, { Component } from 'react'
import { ImagePicker } from 'antd-mobile';
import Header from 'components/header/index';
import { List, InputItem, Button, Toast, WhiteSpace, WingBlank, } from 'antd-mobile';
import { createForm } from 'rc-form';
import api from 'api/index'
import { Upload, Icon, message } from 'antd';
const Item = List.Item;
const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];
function getBase64(img: Blob, callback: { (imageUrl: any): void; (arg0: string | ArrayBuffer | null): void; }) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file: { type: string; size: number; }) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}


@createForm()
export class Changeinfo extends Component<any, any>{
    state = {
        files: [],
        loading: false,
        value: 1,
        imageUrl: ""
    }
    onSubmit = () => {
        this.props.form.validateFields({ force: true }, (error: any) => {
            if (!error) {
                Toast.info('更改成功', 1);
                console.log("提交")
                api.changeinfo({ ...this.props.form.getFieldsValue(), email: window.localStorage.getItem('user'), files: this.state.files })
                setTimeout(() => {
                    this.props.history.push('/main/mine')
                }, 2000);
            } else {
                alert("数据填写错误");
            }
        });
    }
    onReset = () => {
        this.props.form.resetFields();
    }
    validateAccount = (rule: any, value: any, callback: any) => {
        if (value && value.length > 4) {
            callback();
        } else {
            callback(new Error('至少大于四个字符的昵称'));
        }
    }
    onChange = (files: any, type: any, index: any) => {
        console.log(files, type, index, "这是什么");
        this.setState({
            files,
        }, () => {
            api.changefile({ params: files })
        });
    }
    imgClick(index: any, fs: any) {
        console.log(index, fs, '打印了吗')
        console.log(this)
    }

    handleChange(info: any) {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.

            console.log(info.file, "这是什么")

            api.changefile({ params: info.file })
            getBase64(info.file.originFileObj, (imageUrl: any) =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    }
    render() {
        const { files } = this.state;
        const { getFieldProps, getFieldError } = this.props.form;
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        return (
            <div className="wrap">
                <Header title="更改个人信息"></Header>
                <div className="main">
                    <form>
                        <List
                            renderFooter={() => getFieldError('account') && getFieldError('account').join(',')}
                        >
                            <InputItem
                                {...getFieldProps('username', {
                                    // initialValue: 'little ant',
                                    rules: [
                                        { required: true, message: '请输入昵称' },
                                        { validator: this.validateAccount },
                                    ],
                                })}
                                clear
                                error={!!getFieldError('username')}
                                onErrorClick={() => {
                                    alert(getFieldError('username').join('、'));
                                }}
                                placeholder="请输入昵称"
                            >昵称</InputItem>
                            <InputItem {...getFieldProps('signature')} placeholder="请输入签名" type="text">
                                签名
                            </InputItem>
                            <Item>
                                {/* <ImagePicker
                                    files={files}
                                    onChange={this.onChange}
                                    onImageClick={(index, fs) => this.imgClick.bind(this)(index, fs)}
                                    selectable={files.length < 5}
                                    accept="image/gif,image/jpeg,image/jpg,image/png"
                                /> */}

                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    beforeUpload={beforeUpload}
                                    onChange={this.handleChange.bind(this)}
                                >
                                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                </Upload>

                            </Item>
                            <Item>
                                <WingBlank>
                                    <Button type="primary" size="large" inline onClick={this.onSubmit}>提交</Button>
                                    <Button size="large" inline style={{ marginLeft: '3px' }} onClick={this.onReset}>重置</Button>
                                </WingBlank>
                            </Item>
                        </List>
                    </form>
                </div>
            </div>
        )
    }
}

export default Changeinfo
