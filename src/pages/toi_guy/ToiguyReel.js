import { Row, Col, Container } from "react-bootstrap";
import VideoLoader from "../../components/video/VideoLoader";
const ToiguyReel = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={3}>
          <VideoLoader video="video_1_lq"></VideoLoader>
        </Col>
        <Col xs={6} md={3}>
          <VideoLoader video="video_2_lq"></VideoLoader>
        </Col>
        <Col xs={6} md={3}>
          <VideoLoader video="video_3_lq"></VideoLoader>
        </Col>
        <Col xs={6} md={3}>
          <VideoLoader video="video_4_lq"></VideoLoader>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3}>
          <VideoLoader video="video_5_lq"></VideoLoader>
        </Col>
        <Col xs={6} md={3}>
          <VideoLoader video="video_6_lq"></VideoLoader>
        </Col>
        <Col xs={6} md={3}>
          <VideoLoader video="video_7_lq"></VideoLoader>
        </Col>
        <Col xs={6} md={3}>
          <VideoLoader video="video_8_lq"></VideoLoader>
        </Col>
      </Row>
      <Row>
      <Col xs={6} md={3}>
          <VideoLoader video="video_9_lq"></VideoLoader>
        </Col>
        <Col xs={6} md={3}>
          <VideoLoader video="video_10_lq"></VideoLoader>
        </Col>
        <Col xs={6} md={3}>
          <VideoLoader video="video_11_lq"></VideoLoader>
        </Col>
        <Col xs={6} md={3}>
          <VideoLoader video="video_12_lq"></VideoLoader>
        </Col>
      </Row>

    </Container>
  );
};

export default ToiguyReel;