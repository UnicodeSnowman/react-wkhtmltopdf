const React = require('react');

export default class Form extends React.Component {

    render() {
        const { data, onAddField, onAddFriend, onUpdateField } = this.props;

        return (
            <div className="container">
                <div className="header">
                    <div style={{width: '25%'}}>
                        <span>Form</span>
                        <h2>W-666</h2>
                        <br />
                        <span>Department of Cash Money</span>
                    </div>
                    <div style={{width: '50%', textAlign: 'center'}}>
                        <h1>Employee Form</h1>
                        <p><i>Here, have some money</i></p>
                    </div>
                    <div style={{width: '25%'}}>
                        <span>OMG NO</span>
                        <br />
                        <h2>2016</h2>
                    </div>
                    <div style={{clear: 'both'}}></div>
                </div>
                <div className="form-body">
                    <div style={{borderBottom: '1px solid black'}}>
                        <label>
                            First Name:<br />
                            <input type="text" placeholder="First Name..." value={data.firstName} onChange={(e) => onUpdateField(e.target.value, 'firstName')}/>
                        </label>
                        <label>
                            Last Name:<br />
                            <input type="text" placeholder="Last Name..." value={data.lastName} onChange={(e) => onUpdateField(e.target.value, 'lastName')}/>
                        </label>
                    </div>
                    <div>
                        <br />
                        <label>
                            Address:<br />
                            <input type="text" placeholder="Address..." value={data.address} onChange={(e) => onUpdateField(e.target.value, 'address')}/>
                        </label>
                    </div>
                    <br />
                    <div>
                        <label>
                            Occupation:<br />
                            <input type="text" placeholder="Occupation..." value={data.occupation} onChange={(e) => onUpdateField(e.target.value, 'occupation')}/>
                        </label>
                        <label>
                            Company:<br />
                            <input type="text" placeholder="Company..." value={data.company} onChange={(e) => onUpdateField(e.target.value, 'company')}/>
                        </label>
                    </div>
                    <br />
                    <div>
                        <h3>Interests</h3>
                        <div>
                            <a onClick={() => onAddField('interests')}>Add New +</a>
                        </div>
                        {
                            data.interests.map((interest, index) =>
                                <div key={index}>
                                    <input
                                        type="text"
                                        placeholder="Whatchu like?"
                                        value={interest} 
                                        onChange={(e) => onUpdateField(e.target.value, 'interests', index)} />
                                </div>)
                        }
                    </div>
                    <br />
                    <div>
                        <h3>Friends</h3>
                        <div>
                            <a onClick={() => onAddField('friends')}>Add New +</a>
                        </div>
                        {
                            data.friends.map((friend, index) =>
                                <div key={index}>
                                    <input
                                        type="text"
                                        placeholder="Who's ya buddy?"
                                        value={friend}
                                        onChange={(e) => onUpdateField(e.target.value, 'friends', index)} />
                                </div>)
                        }
                    </div>
                    <br />
                </div>
            </div>
        )
    }
}

