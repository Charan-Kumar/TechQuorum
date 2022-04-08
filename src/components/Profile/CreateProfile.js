import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Select } from 'antd';
import { Web3Storage } from 'web3.storage'
import { getFilesFromPath } from 'web3.storage'
import { File } from 'web3.storage'
import {Buffer} from 'buffer';

function makeFileObjects (values) {
  // You can create File objects from a Buffer of binary data
  // see: https://nodejs.org/api/buffer.html
  // Here we're just storing a JSON object, but you can store images,
  // audio, or whatever you want!
  //const objq1 = { handle:'handle of lens', handleDAO:'handle of DAO', question:'text data', link:'link', code:'code', }
  //const obja1 = { handleQU:'handle of Q of User', handleAU:'handle of Ans of User', handleDAO:'handle of DAO', question:'text data', link:'link', code:'code', }
  const buffer1 = Buffer.from(JSON.stringify(values))
  //const buffer2 = Buffer.from(JSON.stringify(obja1))

  const files = [
    new File([buffer1], 'q1.json'),
    //new File([buffer2], 'a1.json')
  ]
  return files
}
function getAccessToken () {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
   return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY2OEJBQTIyRTk0QjJENjAzOTMwMjQxMTAzNmUxQzQyMzFkNURFY2MiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDkzNDk0Mjk0NTcsIm5hbWUiOiJUZXN0In0.4FwYdVSQauy64v3HPLeQLhpHDCTdP5-ky2tYXrmb954'

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  //return process.env.WEB3STORAGE_TOKEN
}

function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}

async function storeFiles (files) {
  const client = makeStorageClient()
  
  const cid = await client.put(files)
  console.log('stored files with cid:', cid)
  return cid
}
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function CreateProfile() {
  const [form] = Form.useForm();

  const onDaoChange = (value) => {
    switch (value) {
      case 'dao1':
        /*form.setFieldsValue({
          note: 'Hi, man!',
        });*/
        return;

      case 'dao2':
        /*form.setFieldsValue({
          note: 'Hi, lady!',
        });*/
        return;

      case 'other':
        /*form.setFieldsValue({
          note: 'Hi there!',
        });*/
    }
  };

  const onFinish = (values) => {
    const files = makeFileObjects(values)
    storeFiles (files)
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    /*form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });*/
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="dao"
        label="Dao"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onDaoChange}
          allowClear
        >
          <Option value="dao1">dao1</Option>
          <Option value="dao2">dao2</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.dao !== currentValues.dao}
      >
        {({ getFieldValue }) =>
          getFieldValue('dao') === 'other' ? (
            <Form.Item
              name="customizeDao"
              label="Customize Dao"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="projectdetails"
        label="ProjectDetails"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="githublink"
        label="GithubLink"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="rate"
        label="Rate"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="skill"
        label="Skill"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
  );
};
