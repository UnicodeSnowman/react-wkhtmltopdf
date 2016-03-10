const React = require('react');

export default class Form extends React.Component {

    render() {
        const { data, onAddField, onUpdateField } = this.props;

        return (
            <div className="container">
                <div className="header">
                    <h1>HideousForm</h1>
                </div>
                <div className="form-body">
                    <div className="section">
                        <input type="text" placeholder="What's your name?" value={data.name} onChange={(e) => onUpdateField(e.target.value, 'name')}/>
                    </div>
                    <div>
                        <div className="header">
                            <h3>Things</h3>
                        </div>
                        <div className="section">
                            {
                                data.things.map((thing, index) =>
                                                <div key={index}>
                                                <input
                                                type="text"
                                                placeholder="add a new thing..."
                                                value={thing} 
                                                onChange={(e) => onUpdateField(e.target.value, 'things', index)} />
                                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <div className="btn-group">
                    <a className="btn" onClick={() => onAddField('things')}>Add New</a>
                </div>
            </div>
        );
    }
}

