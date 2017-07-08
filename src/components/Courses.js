import React from 'react';

import {NavLink} from 'react-router-dom' ;

import '../scss/Courses.css';


class Courses extends React.Component {

    render() {

        let courses = this.props.data.map((course) => {
            return (

                <div className="course-figure" key={course.id}>
                    <NavLink to={`/courses/${course.id}`} >
                        <figure>
                            <img src={course.img_src} alt={course.teacher}/>
                            <figcaption>
                                <span>{course.name} </span>
                                <span>{course.teacher}</span>
                                <div>{course.date_start} - {course.date_finish}</div>
                            </figcaption>
                        </figure>
                    </NavLink>
                </div>

            );
        });

        return (

            <div>
                <div>{courses}</div>

            </div>

        );
    };
}

export default Courses;