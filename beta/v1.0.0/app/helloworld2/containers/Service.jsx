import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Helmet from 'react-helmet';


class Service extends React.Component {
  componentDidMount() {
    const sseUrl = '/api/sses/change-stream?_format=event-stream';
    const src = new EventSource(sseUrl);
    // src.onmessage = (msg) => {
    //   this.setState({ sse: msg.data });
    // };
    src.addEventListener('data', (msg) => {
      // const data = JSON.parse(msg.data);
      // console.log(data);
      const sse = this.state ? [...this.state.sse] : [];
      sse.push(msg.data);
      this.setState({ sse });
    });
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/sses', { sse: this.state.input });
  }

  render() {
    return (
      <section>
        <h3>Service</h3>
        <Helmet title="Service" />
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="sse" value={(this.state && this.state.input) || ''} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        {this.state && this.state.sse && this.state.sse.map((sse, index) => (
          <p key={index}>{sse}</p>
        ))}
      </section>
    );
  }
}

function mapStateToProps(state) {
  const props = {
    app: state.app,
  };
  return props;
}
// function mapDispatchToProps(dispatch) {
function mapDispatchToProps() {
  return {
    // actions: bindActionCreators(boovatechActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Service);
