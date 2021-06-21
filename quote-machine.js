class QuoteMachine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        quote: ''
      };
      handleChange(event) {
        this.setState({ input: event.target.value})
      }
       render() {
         return (
            <div>
            <h1>Popular Front End JavaScript Frameworks</h1>
            <ul>
              {renderFrameworks}
            </ul>
          </div>
         )
  }
}