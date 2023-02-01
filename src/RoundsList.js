import React from 'react';

class RoundsList extends React.Component {
    render() {
        const listItems = this.props.rounds.map((round, idx) => {
            return <li key={idx}>{round.seconds} : {round.decySeconds}</li>
        });
        return (
            <div>
                <h1>Rounds</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default RoundsList;