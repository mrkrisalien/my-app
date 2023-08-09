import React, { useState } from "react";
import { Col, Row, Select, Divider } from "antd";
import AComponant from "./Templates/ATemplate";
import BComponant from "./Templates/ATemplate";
import CComponant from "./Templates/ATemplate";

const Reports = () => {
  const [selectValue, setSelectValue] = useState("template1");

  const onChange = (value) => {
    console.log(value);
    setSelectValue(value);
    if (value == "template2") {
      setSelectValue(<BComponant />);
    }
  };

  let selectTemplate = <AComponant />;

  return (
    <div className="site-card-wrapper">
      <Row>
        <Col span={4}>Template</Col>
        <Col span={4}>
          <Select
            showSearch
            placeholder="Template"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "template1",
                label: "Template 1",
              },
              {
                value: "template2",
                label: "Template 2",
              },
              {
                value: "template3",
                label: "Template 3",
              },
            ]}
          />
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>{selectTemplate}</Row>
    </div>
  );
};

export default Reports;
