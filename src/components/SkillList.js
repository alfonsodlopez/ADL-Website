import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function SkillList() {
    const skills = [
        'Python',
        'TensorFlow',
        'Pandas',
        'JavaScript',
        'jQuery',
        'Node.js',
        'Handlebars.js',
        'React.js',
        'SQL/MySQL',
        'MongoDB',
        'Firebase',
        'AWS',
        'Heroku',
        'And plenty of other popular technologies/libraries under JS and Python I haven\'t listed'
    ];
    return (
        <List>
            {skills.map((skill, index) => {
                return (<ListItem key={index}><ListItemText primary={skill} /></ListItem>);
            })}
        </List>
    )
}

export default SkillList