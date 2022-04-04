import React, { useState, useRef } from 'react';

// styles & assets
import './Student.css';
import addBtn from '../assets/addBtn.svg';
import removeBtn from '../assets/removeBtn.svg';

export default function Student ({ studentInfo }) {

    const [expanded, setExpanded] = useState(false);
    const [newTag, setNewTag] = useState('');
    const [tags, setTags] = useState([]);
    const tagInput = useRef(null);

    const average = studentInfo.grades.reduce((a, b) => parseInt(a) + parseInt(b), 0)
        / (studentInfo.grades.length);

    const handleSubmit = (e) => {
        e.preventDefault();
        const tag = newTag.trim();
        setTags(PrevTags => [...PrevTags, tag]);
        setNewTag('');
        tagInput.current.focus();
    };

    return (
        <div className='student-card'>
            <div className='avatar'>
                <img src={ studentInfo.pic } alt="student-pic" />
            </div>

            <div className='info'>
                <h1>{ studentInfo.firstName } { studentInfo.lastName }</h1>
                <p>Email: { studentInfo.email }</p>
                <p>Company: { studentInfo.company }</p>
                <p>Skill: { studentInfo.skill }</p>
                <p>Average: { average }</p>

                <div style={ { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' } }>
                    { tags.length > 0 && tags.map((tag, index) => (
                        <p key={ index }>{ tag }</p>
                    )) }
                </div>

                <form onSubmit={ handleSubmit }>
                    <label>
                        <input type="text"
                            placeholder="Add a tag"
                            onChange={ (e) => setNewTag(e.target.value) }
                            value={ newTag }
                            ref={ tagInput }
                        />
                    </label>
                </form>
            </div>

            <div>
                { !expanded ? (
                    <button onClick={ () => setExpanded(true) }>
                        <img src={ addBtn } alt="add-btn" />
                    </button>
                ) : (
                    <button onClick={ () => setExpanded(false) }>
                        <img src={ removeBtn } alt="remove-btn" />
                    </button>
                ) }
            </div>

            <div className='grade-list'>
                { expanded && studentInfo.grades.map((grade, index) => (
                    <p key={ index }>Test { index + 1 }:&nbsp;&nbsp;&nbsp;{ grade }%</p>)) }
            </div>
        </div>
    );
}
