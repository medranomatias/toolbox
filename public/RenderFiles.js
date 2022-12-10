// eslint-disable-next-line
const Table = ReactBootstrap.Table
// eslint-disable-next-line
class RenderFiles extends React.Component {
  constructor (props) {
    super(props)
    // setting the initial count
    this.state = {
      files: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:3000/files/data')
      .then((response) => response.json())
      .then((data) => this.setState({
        files: data
      }))
      .catch((error) => console.log(error))
  }

  renderRow (fileName, fileContent) {
    return (
      <tr>
        <td>{fileName}</td>
        <td>{fileContent.text}</td>
        <td>{fileContent.number}</td>
        <td>{fileContent.hex}</td>
      </tr>
    )
  }

  render () {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {
                    this.state.files.map(file => {
                      const fileName = file.file
                      const lines = file.lines
                      return lines.map(lineContent => this.renderRow(fileName, lineContent))
                    })
                }
        </tbody>
      </Table>
    )
  }
}

ReactDOM.render(
  <RenderFiles />,
  document.getElementById('root')
)
