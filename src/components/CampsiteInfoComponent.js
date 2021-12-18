
import React, { Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class Campsiteinfo extends Component {
    renderCampsite(campsite) {
           return (
               <div className='col-md-5 m-1'>
                   <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
               </div>
           )
    }

    renderComments(comments) {
        if(comments) {
            return (
                <div className="col-md-5 m-1 mb-2">
                    <h4>Comments</h4>
                    {comments.comments.map(comments => <div key={comments.id}> {comments.text}
                    <p>-- {comments.author} - {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p> </div>)}
                    <br /> 
                    <br />
                </div>
            )
        } else {
            return (
            <div></div>
            )
        }
    }

    render(props) {
        if (this.props.src) {
            return <div className="row">
                {this.renderCampsite(this.props.src)}
                {this.renderComments(this.props.src)}
            </div>
        } else {
            return (<div></div>)
        }
    }
}

export default Campsiteinfo;
