import React from 'react'
import './projects.css';



import Projectitem from './project-item';



class Projects extends React.Component {


  state = {
    sections: [
      {
        info: 'Coffee Shop',
        linkUrl: 'https://github.com/GOKULMATHI/reactday3',
      title: 'GM CAFE',

      id: 1,
    },
        
   
      , {
        info: 'Cloth Shop ',
        linkUrl: 'https://github.com/GOKULMATHI/react_day4',
        title: 'HM Shop',
        id: 2,
      }
      , {
        info: 'Shopping Cart',
        linkUrl: 'https://github.com/GOKULMATHI/react_Shopping-cart',
        title: 'ELITE',
        id: 2,
      }
    ]

  }



  render() {
    return (
      <div className='projects-page' id='projects' >

        <h1 className='te'>  <span role="img" aria-label="cd"  > Projects</span>  </h1>

        <hr />


        <div className='directory-project'>


          {

            this.state.sections.map(({ title, linkUrl, info, id }) => (
              <Projectitem key={id} title={title} linkUrl={linkUrl} info={info} />
            ))
          }

        </div>

        <div className='gitwork' >
          <hr />
          <span className='work'  >Like my work ? OR want to see more work..!? well You can see all on  my Github. </span>

          <button
            className=' buttun  grow  pointer bg-black tc br2 Center white'

            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/GOKULMATHI');
            }}
          > <i className="cib-github"></i>
            {' '}Github</button>
          <hr />

        </div>

      </div>

    )
  }
}
export default Projects;
