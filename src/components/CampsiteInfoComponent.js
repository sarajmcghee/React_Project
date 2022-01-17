import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class CampsiteInfo extends Component {


    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.desciption}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments {comments.id}</h4>
                    {comments.map(comment => <div key={comment.id}> {comment.text}<div>--  {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}<div></div></div></div>)}
                </div>
            );
        }
        return (
            <div></div>
        );
    }

    render() {
        if (this.props.campsite) {
            return (
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            );
        }
        else {
            return (
                <div>
                </div>

            );

        }

    }
}


export default CampsiteInfo;