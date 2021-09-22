import React from "react";
import { Progress } from "antd";
import { Space } from "antd";
import { Row, Col } from "antd";
import { Steps } from "antd";

function ProgressPage() {
  const { Step } = Steps;
  return (
    <div>
      <Row offset={100}>
        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step
            title="In Progress"
            subTitle="Left 00:00:08"
            description="This is a description."
          />
          <Step title="Waiting" description="This is a description." />
        </Steps>
        <div style={{ minHeight: 200 }}></div>
      </Row>

      <Row justify="center">
        <Col>
          <Progress
            type="circle"
            percent={75}
            format={(percent) => `${percent} Days`}
          />
        </Col>
        <Col offset={1}>
          <Progress type="circle" percent={100} format={() => "Done"} />
        </Col>
      </Row>
    </div>
  );
}

export default ProgressPage;
